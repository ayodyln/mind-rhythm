<script lang="ts">
	// CalanderNav component
	export let todayStr: string, navigateMonth: any;
</script>

<div>

<nav id="calander__nav" class="flex justify-center items-center gap-4">
	<button id="calander__navBtn__previous" class="btn variant-soft" on:click={() => navigateMonth(false)}>
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current" viewBox="0 0 512 512">
				<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<defs>
					<style>
						.fa-secondary {
							opacity: 0.4;
						}
					</style>
				</defs>
				<path
					class="fa-primary"
					d="M203.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160z"
				/>
				<path
					class="fa-secondary"
					d="M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L256 271V241L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96V416c0 12.4-7.2 23.7-18.4 29z"
				/>
			</svg>
		</span>
	</button>

	<div class="w-full text-center">
		<p>{todayStr}</p>
	</div>

	<button id="calander__navBtn__forward" class="btn variant-soft" on:click={() => navigateMonth(true)}>
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current" viewBox="0 0 512 512">
				<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<defs>
					<style>
						.fa-secondary {
							opacity: 0.4;
						}
					</style>
				</defs>
				<path
					class="fa-primary"
					d="M308.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160z"
				/>
				<path
					class="fa-secondary"
					d="M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L256 271V241L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96V416c0 12.4 7.2 23.7 18.4 29z"
				/>
			</svg>
		</span>
	</button>
</nav>

<div class="w-full h-1 rounded-lg bg-primary-500 my-2"></div>
</div>