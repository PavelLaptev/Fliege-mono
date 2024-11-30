<section class="font-layout">
	<img class="font-layout-image" src="assets/font-layout-preview.svg" alt="Font Layout" />
</section>

<style>
	.font-layout {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 16px;
		padding: 60px 0 120px;
	}

	.font-layout-image {
		width: 100%;
		mix-blend-mode: multiply;
	}

	/* MEDIUM SCREENS */
	@media (max-width: 1200px) {
		.font-layout {
			padding: 40px 0 80px;
		}
	}

	/* SMALL SCREENS */
	@media (max-width: 800px) {
		.font-layout {
			padding: 20px 0 40px;
		}
	}
</style>
