<script lang="ts">
	import '../app.css';
	// import { dev } from '$app/environment';

	// // Loaded from .env.local, guide covers this
	// // step in a moment.
	// // Flag to defer rendering of components
	// // until certain criteria are met on dev,
	// // e.g. MSW init.
	// let isReady: boolean = false;

	// const isMswEnabled = true;

	// if (isMswEnabled) {
	// 	import('../msw/index').then((res) => res.inject()).then(() => (isReady = true));
	// }
</script>

<main>
	<div class="container max-w-[855px] mt-2 md:mt-[70px] mx-auto p-4 lg:p-0">
		<slot />
	</div>
</main>
