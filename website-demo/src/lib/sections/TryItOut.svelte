<script lang="ts">
	import RangeSlider from '$lib/components/RangeSlider.svelte';

	let weightNumber = $state(400);
	let fontSize = $state(130);
	let letterSpacing = $state(-0.7);

	let containerWidth = $state(0);

	$effect(() => {
		if (containerWidth < 800) {
			fontSize = 50;
			weightNumber = 400;
			letterSpacing = -0.7;
		} else {
			fontSize = 130;
			weightNumber = 400;
			letterSpacing = -0.7;
		}
	});
</script>

<section class="try-it-out" bind:clientWidth={containerWidth}>
	<div class="controls">
		<RangeSlider label="Font size" bind:value={fontSize} min={12} max={200} />
		<RangeSlider label="Font weight" bind:value={weightNumber} min={100} max={900} step={10} />
		<RangeSlider label="Letter spacing" bind:value={letterSpacing} min={-1} max={0} step={0.1} />
	</div>
	<div
		class="text-preview"
		contenteditable="true"
		style:font-size={fontSize + 'px'}
		style:font-weight={weightNumber}
		style:letter-spacing={(letterSpacing * fontSize) / 6 + 'px'}
	>
		Every line counts — version control with GitButler.
	</div>
</section>

<style>
	.try-it-out {
		display: flex;
		flex-direction: column;
		padding: 40px 0;
	}

	.controls {
		display: flex;
		gap: 32px;
		margin-bottom: 40px;
	}

	.text-preview {
		line-height: 1;
	}

	.text-preview:focus {
		outline: none;
	}

	/* SMALL SCREENS */
	@media (max-width: 800px) {
		.try-it-out {
			padding: 20px 0;
		}

		.controls {
			flex-direction: column;
			gap: 20px;
		}
	}
</style>
