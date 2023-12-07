<script lang="ts">
	import { currentDate, selectedCalenderDate, userSelectedDate } from '$lib';

	$: dateStr = $userSelectedDate;
</script>

<nav class="flex card variant-ghost w-fit items-center">
	<button class="h-8 rounded-none variant-soft w-11 flex items-center justify-center">
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-4" viewBox="0 0 448 512">
				<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M50.4 256L200.3 113.3c.8-.8 2-1.3 3.2-1.3c2.5 0 4.6 2 4.6 4.6l0 83.4c0 13.3 10.7 24 24 24l168 0 0 64-168 0c-13.3 0-24 10.7-24 24l0 83.4c0 2.5-2 4.6-4.6 4.6c-1.2 0-2.3-.5-3.2-1.3L50.4 256zm153-192c-13.5 0-26.5 5.2-36.3 14.5L13.2 225.1C4.8 233.2 0 244.3 0 256s4.8 22.8 13.2 30.9L167.2 433.5c9.8 9.3 22.8 14.5 36.3 14.5c29 0 52.6-23.5 52.6-52.6l0-59.4 144 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-144 0 0-59.4c0-29-23.5-52.6-52.6-52.6z"
				/>
			</svg>
		</span>
	</button>
	<div class="flex items-center h-full w-32">
		<p class="text-xs font-medium w-full text-center">
			{new Intl.DateTimeFormat('en-US', {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			}).format(dateStr)}
		</p>
	</div>
	<button class="h-8 rounded-none variant-soft w-11 flex items-center justify-center">
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-4" viewBox="0 0 448 512">
				<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M397.6 256L247.7 398.7c-.8 .8-2 1.3-3.2 1.3c-2.5 0-4.6-2-4.6-4.6l0-83.4c0-13.3-10.7-24-24-24L48 288l0-64 168 0c13.3 0 24-10.7 24-24l0-83.4c0-2.5 2-4.6 4.6-4.6c1.2 0 2.3 .5 3.2 1.3L397.6 256zm-153 192c13.5 0 26.5-5.2 36.3-14.5L434.8 286.9c8.5-8.1 13.2-19.2 13.2-30.9s-4.8-22.8-13.2-30.9L280.8 78.5C271.1 69.2 258.1 64 244.6 64c-29 0-52.6 23.5-52.6 52.6l0 59.4L48 176c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l144 0 0 59.4c0 29 23.5 52.6 52.6 52.6z"
				/>
			</svg>
		</span>
	</button>
</nav>
