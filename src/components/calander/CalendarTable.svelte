<script lang="ts">
	export let weeks: any[] = [],
		today: Date,
		selectedMMYY: Date;

	const highlightedDate = (day: number): boolean =>
		day === today.getDate() && today.getMonth() === selectedMMYY.getMonth();
</script>

<section id="calander__table__wrapper" class="w-full">
	<table class="w-full">
		<thead>
			<tr>
				<th class="w-[44px] h-[44px] text-center text-sm">Sun</th>
				<th class="w-[44px] h-[44px] text-center text-sm">Mon</th>
				<th class="w-[44px] h-[44px] text-center text-sm">Tue</th>
				<th class="w-[44px] h-[44px] text-center text-sm">Wed</th>
				<th class="w-[44px] h-[44px] text-center text-sm">Thu</th>
				<th class="w-[44px] h-[44px] text-center text-sm">Fri</th>
				<th class="w-[44px] h-[44px] text-center text-sm">Sat</th>
			</tr>
		</thead>
		<tbody>
			{#each weeks as week}
				<tr>
					{#each week as day}
						<td class="h-[44px] w-[44px]">
							<button
								on:click={() => console.log(day)}
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
</section>
