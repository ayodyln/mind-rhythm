<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Avatar, storePopup, LightSwitch } from '@skeletonlabs/skeleton';
	import { faker } from '@faker-js/faker';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import Calendar from '../components/calendar/Calendar.svelte';
	import { invoke } from '@tauri-apps/api/tauri';
	import { onMount } from 'svelte';

	let time: Date = new Date();

	$: clockStr = new Intl.DateTimeFormat(navigator.language, {
		hour: '2-digit',
		minute: '2-digit'
	}).format(time);

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<AppShell
	slotHeader="flex items-center justify-between p-4 py-2 card rounded-none"
	slotSidebarRight="w-fit max-w-sm rounded-none px-4 py-2 my-2 border-l-2 border-surface-500/50"
>
	<svelte:fragment slot="header">
		<a href="/" class="btn rounded-lg font-bold variant-soft">MindRhythm</a>

		<div>
			<span>{clockStr}</span>
		</div>

		<ul class="list-nav flex items-center gap-4">
			<li>
				<LightSwitch />
			</li>
			<li>
				<button class="drop-shadow-lg">
					<Avatar
						src={faker.image.avatar()}
						width="w-12"
						rounded="rounded-full"
						border="border-4 border-surface-300-600-token hover:!border-primary-500"
						cursor="cursor-pointer"
					/>
				</button>
			</li>
		</ul>
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft" /> -->

	<!-- Router Slot -->
	<section id="slot__wrapper" class="container p-4 h-full">
		<slot />
	</section>
	<!-- ---- / ---- -->

	<svelte:fragment slot="sidebarRight">
		<div class="card variant-soft">
			<Calendar />
		</div>
	</svelte:fragment>

	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
