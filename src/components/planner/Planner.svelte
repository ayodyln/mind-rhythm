<script lang="ts">
	import PlannerNav from './PlannerNav.svelte';
	import { dailyTasks } from '$lib';
	import PlannedItem from './PlannedItem.svelte';

	$: console.log($dailyTasks);
</script>

<section class="min-h-[650px] max-h-[700px] h-full overflow-hidden flex flex-col p-4">
	<hgroup class="p-4 card flex justify-between items-center h-[10%] mb-4 drop-shadow-lg">
		<h3 class="h3">Rhythm Tasks</h3>
		<PlannerNav />
	</hgroup>

	<ul class="flex flex-col gap-4 w-full overflow-y-auto h-full">
		{#each $dailyTasks as task}
			<PlannedItem {task} />
		{/each}
	</ul>
</section>
