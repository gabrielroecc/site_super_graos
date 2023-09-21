let options = document.querySelectorAll(".option");
let bar = document.querySelector(".bar_selected");
const body = document.querySelector(".body");

let titleDescription = document.querySelector(".title_option_description");
let description1 = document.querySelector(".option_description_1");
let description2 = document.querySelector(".option_description_2");

let firstImage = document.querySelector(".img_option_1");
let secondImage = document.querySelector(".img_option_2");

titleDescription.textContent = "Ração Animal";
description1.textContent =
	"A Super Grãos oferece uma ampla variedade de rações animais, para diferentes tipos de animais, como bovinos, suínos, aves, peixes e equinos.";
description2.innerHTML = `<strong>Bovinos:</strong> ração para vacas leiteiras, ração para vacas de corte, ração para bezerros, ração para novilhos
<br><br>
<strong>Suínos:</strong> ração para leitões, ração para suínos em crescimento, ração para suínos em terminação
<br><br>
<strong>Aves:</strong> ração para frangos de corte, ração para frangos de postura, ração para perus
<br><br>
<strong>Peixes:</strong> ração para peixes de água doce, ração para peixes de água salgada
<br><br>
<strong>Equinos:</strong> ração para cavalos de corrida, ração para cavalos de passeio, ração para cavalos de trabalho`;

options.forEach(function (option, index) {
	option.addEventListener("click", function () {
		options.forEach(function (otherOption) {
			otherOption.classList.remove("active");
		});

		option.classList.add("active");

		bar.className = "bar_selected";
		bar.classList.add(`bar_${index + 1}`);

		if (index === 0) {
			firstImage.style.backgroundImage = `url("../img/o1.png")`;
			secondImage.style.backgroundImage = `url("../img/o12.png")`;
			titleDescription.textContent = "Ração Animal";
			description1.textContent =
				"A Super Grãos oferece uma ampla variedade de rações animais, para diferentes tipos de animais, como bovinos, suínos, aves, peixes e equinos.";
			description2.innerHTML = `<strong>Bovinos:</strong> ração para vacas leiteiras, ração para vacas de corte, ração para bezerros, ração para novilhos
                <br><br>
                <strong>Suínos:</strong> ração para leitões, ração para suínos em crescimento, ração para suínos em terminação
                <br><br>
                <strong>Aves:</strong> ração para frangos de corte, ração para frangos de postura, ração para perus
                <br><br>
                <strong>Peixes:</strong> ração para peixes de água doce, ração para peixes de água salgada
                <br><br>
                <strong>Equinos:</strong> ração para cavalos de corrida, ração para cavalos de passeio, ração para cavalos de trabalho`;
		} else if (index === 1) {
			firstImage.style.backgroundImage = `url("../img/o2.avif")`;
			secondImage.style.backgroundImage = `url("../img/o22.avif")`;
			titleDescription.textContent = "Transporte";
			description1.textContent =
				"A Super Grãos oferece um serviço de transporte de rações animais. Nossos caminhões são equipados com sistema de refrigeração para garantir a qualidade dos produtos.";
			description2.innerHTML = `
                <strong>Em nossas lojas físicas: </strong> Visite uma de nossas lojas e encontre um amplo estoque de rações para todos os tipos de animais. Nossos funcionários estão sempre prontos para te ajudar a escolher a ração ideal para o seu animal.
                <br><br>
                `;
		} else if (index === 2) {
			firstImage.style.backgroundImage = `url("../img/o3.avif")`;
			secondImage.style.backgroundImage = `url("../img/o32.avif")`;
			titleDescription.textContent = "Venda";
			description1.textContent =
				"A Super Grãos é uma empresa especializada na venda de rações animais. Oferecemos uma ampla variedade de produtos de alta qualidade, produzidos com ingredientes selecionados.";
			description2.textContent =
				"Temos rações para todos os tipos de animais, desde bovinos e suínos até aves e peixes.";
		} else if (index === 3) {
			firstImage.style.backgroundImage = `url("../img/o41.avif")`;
			secondImage.style.backgroundImage = `url("../img/o4.avif")`;
			titleDescription.textContent = "Compra";
			description1.textContent =
				"Para comprar rações animais na Super Grãos, você pode visitar uma de nossas lojas físicas ou fazer seu pedido pelo whatsapp.";
			description2.textContent =
				"Em nossas lojas físicas, você pode encontrar um amplo estoque de rações para todos os tipos de animais. Nossos funcionários estão sempre prontos para te ajudar a escolher a ração ideal para o seu animal.";
		}
	});
});

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
