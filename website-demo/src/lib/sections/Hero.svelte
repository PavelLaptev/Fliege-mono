<section class="hero">
	<div class="hero-top">
		<h1 class="title">Fliege</h1>
		<div class="links">
			<a
				class="links-item"
				href="https://github.com/PavelLaptev/Fliege-mono/raw/refs/heads/main/font/Fliege-mono.zip"
				target="_blank"
			>
				Download
			</a>
			<a class="links-item" href="https://github.com/PavelLaptev/Fliege-mono" target="_blank">
				Source
			</a>
		</div>
	</div>

	<table class="data-table">
		<tbody>
			<tr>
				<td class="label">Glyphs</td>
				<td>531</td>
			</tr>
			<tr>
				<td class="label">Styles</td>
				<td>6 + variable font</td>
			</tr>
			<tr>
				<td class="label">Alphabets</td>
				<td>Ext.Latin, Cyrillic</td>
			</tr>
		</tbody>
	</table>

	<p class="hero-description">
		Fliege mono It is a monospaced typeface with a strong personality. It is designed as a monospace
		font but with a human touch. In order to make the font a bit more playful and less monotonous,
		the font has ink traps and lowercase ascenders are slightly taller than uppercase cap height.
	</p>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 16px;
		padding: 60px 0;
		height: calc(100vh - 140px);
		max-height: 800px;
	}
	.hero-top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.hero-description {
		max-width: 600px;
		line-height: 1.6;
		text-wrap: balance;
	}
	.title {
		font-size: 15em;
		margin: 0;
		line-height: 1;
		letter-spacing: -0.11em;
		font-weight: 700;
		margin-left: -20px;
	}
	.links {
		display: flex;
		align-items: center;
		border: 2px solid var(--text-color);
		border-radius: 40px;
		overflow: hidden;
	}
	.links-item {
		color: var(--text-color);
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 18px;
		padding: 20px 30px;

		&:hover {
			background-color: var(--text-color);
			color: var(--bg-color);
		}
	}
	.links-item:first-child {
		border-right: 2px solid var(--text-color);
	}
	.data-table {
		width: 100%;
	}
	.data-table td {
		padding: 14px 0;
		font-size: 1.5em;
		border-bottom: 2px solid var(--text-color);
	}

	/* MEDIUM SCREENS */
	@media (max-width: 1200px) {
		.hero {
			padding: 30px 0 80px;
		}

		.hero-top {
			flex-direction: column;
		}

		.title {
			font-size: 12em;
			margin-left: 0;
		}
	}

	/* SMALL SCREENS */
	@media (max-width: 800px) {
		.hero {
			padding: 20px 0 60px;
			max-height: none;
			height: auto;
		}

		.title {
			font-size: calc(2em + 20vw);
		}

		.links {
			width: 100%;
			margin-top: 30px;
			margin-bottom: 30px;
		}

		.links-item {
			flex: 1;
			text-align: center;
		}

		.data-table {
			margin-bottom: 60px;
		}

		.data-table td {
			padding: 10px 0;
			font-size: 1em;
			font-weight: 500;
		}
	}
</style>
