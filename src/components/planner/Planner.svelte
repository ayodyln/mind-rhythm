<script lang="ts">
	import PlannerNav from './PlannerNav.svelte';
	import { dailyTasks } from '$lib';
	import type { RhythmTask } from '../../app';

	$: remainingTasks = [] satisfies RhythmTask[];
</script>

<section class="h-[650px] overflow-hidden flex flex-col p-4">
	<hgroup class="p-4 card flex justify-between items-center h-[10%] mb-4 drop-shadow-lg">
		<h3 class="h3">Rhythm Tasks</h3>
		<PlannerNav />
	</hgroup>

	<div class="h-[82%] overflow-hidden">
		<ul class="flex flex-col gap-4 w-full overflow-y-auto h-full">
			{#each $dailyTasks as task}
				<!-- <li class="card card-hover cursor-pointer shadow-lg flex variant-soft items-center">
					<hgroup class="p-4 w-80">
						<p class="text-lg font-bold">{task.title}</p>
						<p>{task.description}</p>
					</hgroup>
					<section id="status" class="w-80 h-full flex items-center">
						<div class="bg-surface-500 h-4/5 w-0.5" />
					</section>
				</li> -->
				<li class="card p-4">
					<hgroup>
						<p>{task.title}</p>
					</hgroup>
				</li>
			{/each}
		</ul>
	</div>

	<footer class="w-full bg-surface-300 dark:bg-surface-700 p-4 h-fit">
		<p>Total remaining tasks today: {remainingTasks.length}</p>
	</footer>
</section>
