<script lang="ts">
	export let weeks: any[] = [],
		today: Date;
</script>

<section id="calander__table__wrapper" class="w-full">
	<table class="w-full">
		<thead>
			<tr>
				<th class="w-[44px] h-[44px] text-center">Sun</th>
				<th class="w-[44px] h-[44px] text-center">Mon</th>
				<th class="w-[44px] h-[44px] text-center">Tue</th>
				<th class="w-[44px] h-[44px] text-center">Wed</th>
				<th class="w-[44px] h-[44px] text-center">Thu</th>
				<th class="w-[44px] h-[44px] text-center">Fri</th>
				<th class="w-[44px] h-[44px] text-center">Sat</th>
			</tr>
		</thead>
		<tbody>
			{#each weeks as week}
				<tr>
					{#each week as day}
						<td class="h-[44px] w-[44px]">
							<button
								on:click={() => console.log(day)}
								class:bg-surface-500={day === today.getDate()}
								class="h-full w-full rounded-full hover:bg-surface-500/50 flex justify-center items-center"
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
