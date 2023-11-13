<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Avatar, storePopup, LightSwitch } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell slotSidebarRight="card max-w-[300px] w-full rounded-none p-4">
	<svelte:fragment slot="header">
		<AppBar padding="px-4 py-2" slotTrail="space-x-4">
			<svelte:fragment slot="lead">
				<a href="/" class="btn rounded-lg font-bold variant-soft">MindRhythm</a>
			</svelte:fragment>

			<svelte:fragment slot="trail">
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
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft" /> -->
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>

	<!-- Router Slot -->
	<section id="slot__wrapper" class="container p-4">
		<slot />
	</section>
	<!-- ---- / ---- -->

	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
