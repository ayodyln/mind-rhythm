<script lang="ts">
	import { dailyTasks } from '$lib';
	import PlannedItem from './PlannedItem.svelte';
</script>

<section class="min-h-[650px] max-h-[700px] h-full overflow-hidden flex flex-col p-4">
	<hgroup class="flex justify-between items-center h-[10%] mb-4 drop-shadow-lg">
		<p class="h2 font-black">Rhythm Tasks</p>
	</hgroup>

	<ul class="flex flex-col gap-4 w-full overflow-y-auto h-full">
		{#each $dailyTasks as task}
			<PlannedItem {task} />
		{/each}
	</ul>
</section>
