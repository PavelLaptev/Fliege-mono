<section class="posters">
	<img src="assets/poster-6.png" alt="" />
	<img src="assets/poster-3.png" alt="" />
	<img src="assets/poster-2.png" alt="" />
	<img src="assets/poster-4.png" alt="" />
</section>

<style>
	.posters {
		columns: 2;
		column-gap: 20px;
	}

	.posters img {
		width: 100%;
		margin-bottom: 20px;
	}

	/* SMALL SCREENS */
	@media (max-width: 800px) {
		.posters {
			columns: 1;
		}
	}
</style>
