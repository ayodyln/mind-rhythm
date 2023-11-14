<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Avatar, storePopup, LightSwitch } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import Calendar from '../components/calendar/Calendar.svelte';
</script>

<AppShell
	slotHeader="flex items-center justify-between p-4 card rounded"
	slotSidebarRight="w-fit max-w-sm rounded-none px-4 py-2 my-2 border-l-2 border-surface-500/50"
>
	<svelte:fragment slot="header">
		<a href="/" class="btn rounded-lg font-bold variant-soft">MindRhythm</a>

		<div class="flex items-center gap-4">
			<LightSwitch />

			<button class="drop-shadow-lg">
				<Avatar
					src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
					width="w-12"
					rounded="rounded-full"
					border="border-4 border-surface-300-600-token hover:!border-primary-500"
					cursor="cursor-pointer"
				/>
			</button>
		</div>
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft" /> -->

	<!-- Router Slot -->
	<section id="slot__wrapper" class="container p-4 h-full flex">
		<slot />
	</section>
	<!-- ---- / ---- -->

	<svelte:fragment slot="sidebarRight">
		<div class="card">
			<Calendar />
		</div>
	</svelte:fragment>

	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
