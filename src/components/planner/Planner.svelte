<script lang="ts">
	import PlannerNav from './PlannerNav.svelte';
	import { dailyTasks } from '$lib';
	import type { RhythmTask } from '../../app';
	import { onMount } from 'svelte';

	function handleScroll(event: Event) {
		console.log(event);
	}
</script>

<section class="h-[650px] overflow-hidden flex flex-col">
	<hgroup class="p-4 card flex justify-between items-center h-[10%] mb-4">
		<h3 class="h3">Rhythm Tasks</h3>
		<PlannerNav />
	</hgroup>

	<div class="h-full w-full overflow-y-scroll relative" on:scroll={handleScroll}>
		<ul class="flex flex-col gap-4 w-full h-full p-4">
			{#each $dailyTasks as task, i (task)}
				<li
					id="dailyTask-{i}"
					class="card card-hover cursor-pointer shadow-lg flex variant-soft items-center transition-opacity duration-100"
				>
					<hgroup class="p-4 w-full">
						<p class="text-lg font-bold">{task.title}</p>
						<p>{task.description}</p>
					</hgroup>
					<section id="status" class="w-80 h-full flex items-center">
						<div class="bg-surface-500 h-4/5 w-0.5" />
					</section>
				</li>
			{/each}
		</ul>
	</div>
</section>
