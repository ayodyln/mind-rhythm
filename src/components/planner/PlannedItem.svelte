<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import type { RhythmTask } from '../../app';
	import { currentEditTask } from '$lib';

	export let task: RhythmTask;

	$: id = task.id;
	$: currTaskID = $currentEditTask ? $currentEditTask.id : '';
	let timeInput = task.due_time;
	let editState = false;

	const popupHover: PopupSettings = {
		event: 'hover',
		target: task.id,
		placement: 'top'
	};

	function enableEditState() {
		$currentEditTask = task;
		editState = true;
	}

	function saveHndlr() {
		$currentEditTask = undefined;
		editState = false;
	}

	function formatTimeString() {
		const [h, m] = task.due_time.split(':');
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

<div class="card p-4 drop-shadow-lg variant-filled" data-popup={task.id}>
	<p>Double click to edit.</p>
	<div class="arrow variant-filled" />
</div>

<li class="card p-4 flex justify-between gap-8">
	<hgroup class="flex flex-col w-full">
		{#if !editState && id !== currTaskID}
			<button
				on:dblclick={enableEditState}
				use:popup={popupHover}
				class="font-extrabold text-lg text-start hover:underline w-fit">{task.title}</button
			>
			<span class="text-xs">{task.description}</span>
		{:else}
			<input type="text" class="input btn-sm rounded-lg mb-2" placeholder={task.title} />
			<textarea
				name="description"
				id="description_textarea"
				placeholder={task.description}
				class="textarea resize-none btn-sm rounded-lg text-xs"
				rows="1"
			/>
		{/if}
	</hgroup>
	<div class="flex items-center gap-4">
		{#if !editState}
			<button
				on:dblclick={enableEditState}
				use:popup={popupHover}
				class="w-24 btn btn-sm rounded-lg variant-ghost"
			>
				{formatTimeString()}
			</button>
		{:else}
			<label for="due_time">
				<input
					bind:value={timeInput}
					type="time"
					name="due_time"
					id={task.id}
					class="input rounded-lg cursor-pointer btn-sm"
				/>
			</label>
		{/if}
		<button
			class="btn rounded-lg disabled:variant-soft variant-soft-success btn-sm disabled:opacity-20"
			disabled={!editState}
			on:click={saveHndlr}
		>
			Save
		</button>
	</div>
</li>
