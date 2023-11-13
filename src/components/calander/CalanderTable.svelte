<script lang="ts">
	export let weeks: any[] = [];
</script>

<section id="calander__table__wrapper" class="w-full">
	<table class="w-full">
		<thead>
			<tr>
				<th>Sun</th>
				<th>Mon</th>
				<th>Tue</th>
				<th>Wed</th>
				<th>Thu</th>
				<th>Fri</th>
				<th>Sat</th>
			</tr>
		</thead>
		<tbody>
			{#each weeks as week}
				<tr>
					{#each week as day}
						<td>{day}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</section>
