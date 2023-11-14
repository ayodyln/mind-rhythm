<script lang="ts">
	export let today: Date;
	export let weeks: any[] = [];
	export let weekDays: any[] = [];
	export let selectedCalenderDate: Date;
	export let dayClicked: Function;

	const highlightedDate = (day: number): boolean =>
		day === today.getDate() && today.getMonth() === selectedCalenderDate.getMonth();
</script>

<section id="calander__table__wrapper" class="w-full flex justify-between flex-col h-full">
	<table class="w-full">
		<thead>
			<tr>
				{#each weekDays as day}
					{#if day === 'Sun' || day === 'Sat'}
						<th class="text-surface-500 w-[44px]">{day}</th>
					{:else}
						<th class="w-[44px]">{day}</th>
					{/if}
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each weeks as week}
				<tr>
					{#each week as day}
						<td>
							<button
								on:click={() => dayClicked(day)}
								class:bg-primary-500={highlightedDate(day)}
								class="w-[44px] h-[44px] rounded-full hover:bg-surface-500/50 flex justify-center items-center"
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
</section>
