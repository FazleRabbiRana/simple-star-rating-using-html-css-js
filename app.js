const dynamicStarRating = () => {
	const allItems = document.querySelectorAll('.single-item');

	allItems.forEach((item, index) => {
		// randomly generate a number (1-5) for the Rating
		const randomNumber = ((Math.random() * 4) + 1).toFixed(1);
		const rating = parseFloat(randomNumber);

		// output for the UI
		const serial = index + 1;
		item.innerHTML = `
			<h3 class="item-title">Item-${serial}</h3>
			<h4 class="rating-number">${rating}</h4>

			<!-- dynamic star rating -->
			<div class="rating-stars">
				<div class="empty-rating">
					<span class="star">★★★★★</span>
				</div>
				<div class="fill-rating" style="width: ${rating * 20 + '%'}">
					<span class="star">★★★★★</span>
				</div>
			</div>
		`;
	});
}
dynamicStarRating();