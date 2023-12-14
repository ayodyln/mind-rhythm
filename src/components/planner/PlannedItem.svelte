<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import type { RhythmTask } from '../../app';
	import { currentEditTask, dailyTasks, clock } from '$lib';
	import { onMount } from 'svelte';

	enum TaskState {
		Past,
		Current,
		Future,
		Undefined
	}
	export let task: RhythmTask;

	let ID = task.id || '';
	let title: string = task.title;
	let description: string = task.description;
	let startTimeInput: string = task.start_time;
	let dueTimeInput: string = task.due_time;

	$: taskState = getTaskTime($clock);

	function getTaskTime(clock: string): TaskState {
		const currTime = generateMemoDateTime(clock).getTime();
		const startTime = generateMemoDateTime(task.start_time).getTime();
		const endTime = generateMemoDateTime(task.due_time).getTime();
		if (currTime >= startTime && currTime <= endTime) {
			return TaskState.Current;
		}
		return TaskState.Undefined;
	}

	function generateMemoDateTime(timeStr: string): Date {
		const [h, m, s, t] = timeStr.match(/[^:\s]+/g) || ([] as string[]);
		const date = new Date();
		let hours: number;
		if (!t) {
			// !t for AM
			hours = +h;
		} else {
			// t for PM
			hours = +h + 12;
		}
		date.setHours(hours);
		date.setMinutes(+m);
		date.setSeconds(+s);
		return date;
	}

	const popupHover: PopupSettings = {
		event: 'hover',
		target: task.id,
		placement: 'top'
	};

	function enableEditState() {
		$currentEditTask = task;
	}

	function saveHndlr(): void {
		const task: RhythmTask = $dailyTasks.find((t: RhythmTask) => t.id === ID) || ({} as RhythmTask);
		const memo = new Map();
		memo.set('id', task.id);
		if (task.title !== title) memo.set('title', title);
		if (task.description !== description) memo.set('description', description);
		if (task.start_time !== startTimeInput) memo.set('start_time', startTimeInput);
		if (task.due_time !== dueTimeInput) memo.set('due_time', dueTimeInput);
		$currentEditTask = undefined;
		if (memo.size === 1) return;
		dailyTaskStoreUpdater(memo);
	}

	function dailyTaskStoreUpdater(data: Map<string, string>) {
		const task = { ...$dailyTasks.find((task) => task.id === data.get('id')) } as any;
		for (const [key, val] of data.entries()) {
			if (key === 'id') continue;
			task[key] = data.get(key);
		}
		$dailyTasks = sortDailyTasks([...$dailyTasks.filter((t) => t.id !== task.id), task]);
	}

	function sortDailyTasks(array: RhythmTask[]) {
		return array.sort((a, b) => {
			if (a.pos < b.pos) return -1;
			if (a.pos > b.pos) return 1;
			return 0;
		});
	}

	function formatTimeString(timeStr: string): string {
		const [h, m] = timeStr.split(':');
		const date = new Date();
		date.setHours(+h);
		date.setMinutes(+m);
		return date.toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		});
	}
</script>

<!-- class:opacity-50={taskState === TaskState.Past}
class:variant-filled-primary={taskState === TaskState.Current}
class:variant-soft={taskState === TaskState.Future} -->
<li
	class="card p-4 flex justify-between gap-8"
	class:variant-filled-primary={taskState === TaskState.Current}
	class:variant-soft={taskState === TaskState.Past}
	class:variant-filled-warning={taskState === TaskState.Future}
>
	<hgroup class="flex flex-col w-full">
		{#if ID !== $currentEditTask?.id}
			<button
				on:dblclick={enableEditState}
				use:popup={popupHover}
				class="font-extrabold text-lg text-start hover:underline w-fit">{task.title}</button
			>
			<span class="text-xs">{task.description}</span>
			<div class="card p-4 drop-shadow-lg variant-filled" data-popup={task.id}>
				<p>Double click to edit.</p>
				<div class="arrow variant-filled" />
			</div>
		{:else}
			<input
				type="text"
				bind:value={title}
				class="input btn-sm rounded-lg mb-2"
				placeholder={task.title}
			/>
			<textarea
				name="description"
				bind:value={description}
				id="description_textarea"
				placeholder={task.description}
				class="textarea resize-none btn-sm rounded-lg text-xs"
				rows="1"
			/>
		{/if}
	</hgroup>
	<div class="flex items-center gap-4">
		{#if ID !== $currentEditTask?.id}
			<button
				on:dblclick={enableEditState}
				use:popup={popupHover}
				class="w-40 btn btn-sm rounded-lg variant-ghost"
			>
				{formatTimeString(task.start_time)} - {formatTimeString(task.due_time)}
			</button>
			<div class="card p-4 drop-shadow-lg variant-filled" data-popup={task.id}>
				<p>Double click to edit.</p>
				<div class="arrow variant-filled" />
			</div>
		{:else}
			<section class="flex flex-col gap-2">
				<div class="flex gap-2">
					<label for="start_time">
						<input
							bind:value={startTimeInput}
							type="time"
							name="start_time"
							id={`start_time-${task.id}`}
							class="input rounded-lg cursor-pointer btn-sm"
						/>
					</label>
					<label for="due_time">
						<input
							bind:value={dueTimeInput}
							type="time"
							name="due_time"
							id={`due_time-${task.id}`}
							class="input rounded-lg cursor-pointer btn-sm"
						/>
					</label>
				</div>

				<div class="flex">
					<button
						class="btn rounded-lg variant-soft-success btn-sm rounded-r-none w-1/2"
						disabled={$currentEditTask?.id !== task.id}
						on:click={saveHndlr}
					>
						Save
					</button>
					<button class="btn rounded-lg btn-sm variant-soft-error rounded-l-none w-1/2">
						Delete
					</button>
				</div>
			</section>
		{/if}
	</div>
</li>
