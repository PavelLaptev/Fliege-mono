<script lang="ts">
	import '../styles.css';
	import Hero from '$lib/sections/Hero.svelte';
	import WeightPresentation from '$lib/sections/WeightPresentation.svelte';
	import FontLayout from '$lib/sections/FontLayout.svelte';
	import TryItOut from '$lib/sections/TryItOut.svelte';
	import Symbols from '$lib/sections/Symbols.svelte';
	import Posters from '$lib/sections/Posters.svelte';
</script>

<main class="page-wrapper">
	<Hero />
	<WeightPresentation />
	<FontLayout />
	<TryItOut />
	<Symbols />
	<Posters />
</main>

<style>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		max-width: 1400px;
		margin: 0 auto;
	}
</style>
