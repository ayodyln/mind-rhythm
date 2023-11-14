<script lang="ts">
	import PlannerNav from './PlannerNav.svelte';
	import { dailyTasks } from '$lib';
</script>

<section class="h-[800px] card variant-soft container">
	<div
		class="flex justify-between items-center p-4 dark:bg-surface-700/60 bg-surface-300/60 h-[10%]"
	>
		<h3 class="h3">Todays Daily Tasks</h3>
		<PlannerNav />
	</div>

	<div class="flex h-[90%]">
		<ul class="flex flex-col gap-4 w-full overflow-y-scroll p-4">
			{#each $dailyTasks as task}
				<li>
					<div class="card">
						<div class="card-header">
							<p class="text-lg font-bold">{task.title}</p>
						</div>
						<section class="p-4">
							<p>{task.description}</p>
						</section>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
