<script lang="ts">
	const scaleCutoffs = 9;
	let sliderValue = $state(400);
</script>

<section class="weight-presentation">
	<div class="slider">
		<div class="slider-scale">
			{#each Array.from({ length: scaleCutoffs }, (_, i) => i) as i}
				<div class="slider-scale-tick" class:transparent={i === 0 || i === scaleCutoffs - 1}>
					{#if i === 0}
						<span class="tick-weight">100</span>
					{:else if i === 3}
						<span class="tick-weight">400</span>
					{:else if i === scaleCutoffs - 1}
						<span class="tick-weight">900</span>
					{/if}
				</div>
			{/each}
			<div class="slider-track"></div>
			<input
				class="slider-input"
				type="range"
				name="emoji-range"
				step="10"
				min="100"
				max="900"
				bind:value={sliderValue}
			/>
		</div>
	</div>

	<div class="preview">
		<span class="preview-letters" style:font-weight={sliderValue}>Aa</span>
		<span class="preview-caption">+ 7 static styles</span>
	</div>
</section>

<style>
	.weight-presentation {
		display: flex;
		gap: 80px;
		padding-bottom: 80px;
	}

	.slider {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		flex: 1;
		min-height: 300px;
		border: 2px solid var(--text-color);
		border-top-width: 0;
		border-bottom-width: 0;
	}
	.slider-scale {
		position: relative;
		display: flex;
		justify-content: space-between;
		height: 48px;
		/* background-color: rgba(0, 0, 0, 0.1); */
	}
	.slider-scale-tick {
		position: relative;
		pointer-events: none;
		/* position: absolute;
		top: 0; */
		width: 2px;
		height: 100%;
		background-color: var(--text-color);
	}
	.slider-scale-tick .tick-weight {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateY(10px) translateX(-50%);
		font-size: 14px;
		color: var(--text-color);
	}

	.slider-scale-tick.transparent {
		background-color: transparent;
	}

	.slider-input[type='range'] {
		z-index: 1;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		margin: 0;
		margin-left: -24px;

		left: 0;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		background-color: transparent;
		height: 2px;
		width: calc(100% + 48px);
		outline: none;
		cursor: pointer;
	}

	.slider-track {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		height: 2px;
		width: 100%;
		background-color: var(--text-color);
	}

	.slider-input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background-color: var(--text-color);
	}

	.preview {
		display: flex;
		flex-direction: column;

		gap: 10px;
	}
	.preview-letters {
		font-size: 30em;
		font-weight: 700;
		margin: 0;
		line-height: 0.8;
		letter-spacing: -0.05em;
	}
</style>
