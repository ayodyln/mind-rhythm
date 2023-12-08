<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import type { RhythmTask } from '../../app';

	export let task: RhythmTask;

	let timeInput = task.due_time;
	let editState = !false;

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};

	const toggleEditState = () => (editState = !editState);
	function saveHndlr() {
		editState = !editState;
	}
</script>

<div class="card p-4 drop-shadow-lg variant-filled" data-popup="popupHover">
	<p>Double click to edit.</p>
	<div class="arrow variant-filled" />
</div>

<li class="card p-4 flex justify-between gap-8">
	<hgroup class="flex flex-col w-full">
		{#if !editState}
			<button
				on:dblclick={toggleEditState}
				use:popup={popupHover}
				class="font-extrabold text-lg text-start hover:underline">{task.title}</button
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
		<label for="due_time">
			<input
				bind:value={timeInput}
				type="time"
				name="due_time"
				id={task.id}
				class="input rounded-lg cursor-pointer btn-sm"
			/>
		</label>
		<button
			class="btn rounded-lg disabled:variant-soft variant-soft-success btn-sm disabled:opacity-20"
			disabled={!editState}
			on:click={saveHndlr}
		>
			Save
		</button>
	</div>
</li>
