<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell slotSidebarLeft="">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="btn">MindRhythm</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">(actions)</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft" />

	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>

	<!-- Router Slot -->
	<section id="slot__wrapper" class="p-4">
		<slot />
	</section>
	<!-- ---- / ---- -->

	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>

	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
