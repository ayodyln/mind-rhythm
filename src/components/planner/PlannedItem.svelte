<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import type { RhythmTask } from '../../app';
	import { currentEditTask, dailyTasksDB } from '$lib';

	export let task: RhythmTask;

	let ID = task.id || '';
	let title: string = task.title;
	let description: string = task.description;
	let startTimeInput: string = task.start_time;
	let dueTimeInput: string = task.due_time;

	const popupHover: PopupSettings = {
		event: 'hover',
		target: task.id,
		placement: 'top'
	};

	function enableEditState() {
		$currentEditTask = task;
	}

	function saveHndlr(): void {
		const t: RhythmTask | undefined = dailyTasksDB.find((t) => t.id === ID);

		if (t?.title !== title) {
			console.log(t);
		}
		if (t?.description !== description) {
			console.log(t);
		}
		if (t?.start_time !== startTimeInput) {
			console.log(t);
		}
		if (t?.due_time !== dueTimeInput) {
			console.log(t);
		}

		$currentEditTask = undefined;
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

<li class="card p-4 flex justify-between gap-8">
	<hgroup class="flex flex-col w-full">
		{#if task.id !== $currentEditTask?.id}
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
		{#if task.id !== $currentEditTask?.id}
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
