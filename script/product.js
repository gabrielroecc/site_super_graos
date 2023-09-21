document.querySelector(".icon_nav_mob").addEventListener("click", () => {
	document.querySelector(".nav_mobile").classList.toggle("active");
	document.querySelector(".person").classList.toggle("active");
});

if (window.innerWidth <= 558) {
	let lastScrollPosition = window.scrollY;

	document.body.addEventListener("scroll", (e) => {
		const currentScrollPosition = e.target.scrollTop;

		if (currentScrollPosition > lastScrollPosition) {
			document.querySelector(".header_wrapper").classList.add("active");
		} else if (currentScrollPosition < lastScrollPosition) {
			document.querySelector(".header_wrapper").classList.remove("active");
		}

		e.target.scrollTop >= 30
			? document.querySelector(".header_wrapper").classList.add("zindex")
			: document.querySelector(".header_wrapper").classList.remove("zindex");

		lastScrollPosition = currentScrollPosition;
	});
}
const titleCardPs = document.querySelectorAll(".title_card_p");

titleCardPs.forEach((item) => {
	const numberCard = item.innerHTML;
	item.innerHTML = 0;
	console.log(numberCard);
	const count = setInterval(() => {
		if (item.innerHTML === numberCard) {
			clearInterval(count);
			item.innerHTML = item.innerHTML - 1;
		}
		item.innerHTML++;
	}, 10);
	console.log(item.innerHTML);
});
