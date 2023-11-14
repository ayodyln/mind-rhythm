<script lang="ts">
	import PlannerNav from './PlannerNav.svelte';
	import { dailyTasks } from '$lib';
</script>

<section class="card h-[800px] overflow-hidden">
	<hgroup class="p-4 bg-surface-300 dark:bg-surface-700 flex justify-between items-center h-[10%]">
		<h3 class="h3">Rhythm Tasks</h3>
		<PlannerNav />
	</hgroup>

	<div class="h-[80%] overflow-hidden">
		<ul class="flex flex-col gap-4 w-full overflow-y-auto h-full p-4">
			{#each $dailyTasks as task}
				<li class="card card-hover cursor-pointer shadow-lg flex variant-soft items-center">
					<hgroup class="p-4 w-80">
						<p class="text-lg font-bold">{task.title}</p>
						<p>{task.description}</p>
					</hgroup>
					<div class="bg-surface-500 h-4/5 w-0.5" />
					<section id="status" class="p-4" />
				</li>
			{/each}
		</ul>
	</div>

	<footer class="h-[10%] w-full bg-surface-300 dark:bg-surface-700 p-4">
		<p>Total remaining tasks today:</p>
	</footer>
</section>
