<script>
	const engAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const ukAlphabet = 'абвгдеєжзиіїйклмнопрстуфхцчшщьюя'.split('');
	const numbers = '0123456789'.split('');
	const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/→↑←↓'.split('');
</script>

<section class="symbols">
	<div class="symbols-grid" style:text-transform="uppercase">
		{#each engAlphabet as letter}
			<span class="symbol">{letter}</span>
		{/each}
	</div>
	<div class="symbols-grid">
		{#each engAlphabet as letter}
			<span class="symbol">{letter}</span>
		{/each}
	</div>
	<hr class="divider" />
	<div class="symbols-grid">
		{#each ukAlphabet as letter}
			<span class="symbol">{letter}</span>
		{/each}
	</div>
	<div class="symbols-grid">
		{#each ukAlphabet as letter}
			<span class="symbol">{letter}</span>
		{/each}
	</div>
	<hr class="divider" />
	<div class="symbols-grid">
		{#each numbers as number}
			<span class="symbol">{number}</span>
		{/each}
	</div>
	<div class="symbols-grid">
		{#each symbols as symbol}
			<span class="symbol">{symbol}</span>
		{/each}
	</div>
</section>

<style>
	.symbols {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 60px 0 120px;
	}

	.symbols-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
		gap: 8px;
	}

	.symbol {
		font-size: 24px;
	}

	.divider {
		display: block;
		width: 100%;
		border: 0;
		border-top: 1px dashed var(--text-color);
	}
</style>
