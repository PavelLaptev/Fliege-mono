<script lang="ts">
	interface Props {
		label?: string;
		value?: number;
		min?: number;
		max?: number;
		step?: number;
	}

	let { label, value = $bindable(), min = 100, max = 900, step = 1 }: Props = $props();

	console.log({ label, value });
</script>

<div class="slider">
	<div class="slider-labels">
		<span class="slider-label">{label}</span>

		<span class="slider-label">{value}</span>
	</div>
	<div class="slider-scale">
		<div class="slider-track"></div>
		<input class="slider-input" type="range" name="emoji-range" {min} {max} {step} bind:value />
	</div>
</div>

<style>
	.slider {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		flex: 1;
		max-width: 300px;
	}
	.slider-scale {
		position: relative;
		display: flex;
		justify-content: space-between;
		height: 48px;
	}
	.slider-labels {
		display: flex;
		justify-content: space-between;
	}
	.slider-label {
		font-size: 0.9em;
		letter-spacing: -0.02em;
	}

	.slider-input[type='range'] {
		z-index: 1;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		margin: 0;

		left: 0;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		background-color: transparent;
		height: 2px;
		width: 100%;
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
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background-color: var(--text-color);
	}
</style>
