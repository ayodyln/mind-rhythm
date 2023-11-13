<script lang="ts">
	import { onMount } from 'svelte';
	import CalanderNav from './CalendarNav.svelte';
	import CalanderTable from './CalendarTable.svelte';

	$: [today, selectedMMYY] = [new Date(), new Date()];
	$: year = today.getFullYear() satisfies number;
	$: month = today.getMonth() satisfies number;
	$: mmyy_Str = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		year: 'numeric'
	}).format(today);

	let weeks: (string | number)[][] = [];

	function createweeks() {
		/* 
            current months firstDay: 0 - 6 (Sunday - Saturday)
            current months daysInMonth: 28 - 31 (depends on the month)
        */
		const firstDay = new Date(year, month, 1).getDay();
		const daysInMonth = new Date(year, month + 1, 0).getDate();

		// array of weeks in a month
		weeks = [];

		// date of the month
		let date = 1;

		for (let i = 0; i < 6; i++) {
			// array reperesenting a week and its days
			let week: (string | number)[] = [];

			for (let j = 0; j < 7; j++) {
				if (i === 0 && j < firstDay) {
					// checks if the day in the week array should be an empty string before the actual start date of the month
					week.push('');
				} else if (date > daysInMonth) {
					// checks if the date is greater than the number of days in the month
					break;
				} else {
					// adds the date to the week array
					week.push(date);

					// increments the date (numeric day) of the month
					date++;
				}
			}

			// adds the week array to the weeks array
			weeks.push(week);
		}
	}

	function navigateMonth(direction: boolean) {
		if (direction) {
			month === 11 ? year++ && (month = 0) : month++;
			selectedMMYY = new Date(year, month, 1);
			mmyy_Str = new Intl.DateTimeFormat('en-US', {
				month: 'long',
				year: 'numeric'
			}).format(selectedMMYY);
		} else {
			month === 0 ? year-- && (month = 11) : month--;
			selectedMMYY = new Date(year, month, 1);
			mmyy_Str = new Intl.DateTimeFormat('en-US', {
				month: 'long',
				year: 'numeric'
			}).format(selectedMMYY);
		}

		createweeks();
	}

	onMount(() => {
		createweeks();
	});
</script>

<section id="CalanderCard" class="w-fit h-[400px] card variant-soft p-4 space-y-2 flex flex-col drop-shadow-lg">
	<CalanderNav {mmyy_Str} {navigateMonth} />
	<CalanderTable {weeks} {today} {selectedMMYY} />
</section>
