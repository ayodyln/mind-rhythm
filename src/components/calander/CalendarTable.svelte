<script lang="ts">
	export let weeks: any[] = [],
		today: Date,
		selectedMMYY: Date;

	const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	let selectedDate: string = Intl.DateTimeFormat('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(new Date(selectedMMYY.getFullYear(), selectedMMYY.getMonth(), selectedMMYY.getDate()));

	const highlightedDate = (day: number): boolean =>
		day === today.getDate() && today.getMonth() === selectedMMYY.getMonth();

	function dayClicked(day: number) {
		selectedDate = Intl.DateTimeFormat('en-us', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(new Date(selectedMMYY.getFullYear(), selectedMMYY.getMonth(), day));
	}
</script>

<section id="calander__table__wrapper" class="w-full flex justify-between flex-col h-full">
	<table class="w-full">
		<thead>
			<tr>
				{#each weekDays as day}
					{#if day === 'Sun' || day === 'Sat'}
						<th class="text-surface-500">{day}</th>
					{:else}
						<th>{day}</th>
					{/if}
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each weeks as week}
				<tr>
					{#each week as day}
						<td class="h-[44px] w-[44px]">
							<button
								on:click={() => dayClicked(day)}
								class:bg-primary-500={highlightedDate(day)}
								class="h-full w-full rounded-full hover:bg-surface-500/50 flex justify-center items-center"
								type="button"
							>
								{day}
							</button>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>

	<footer>
		<div class="text-xs font-thin">
			<span>Selected Date:</span>
			<span>{selectedDate}</span>
		</div>
	</footer>
</section>
