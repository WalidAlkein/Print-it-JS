const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Gestion des flèches
document.querySelector('.arrow_left').addEventListener('click', () => {
	console.log('Flèche gauche cliquée');
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateBanner();
});

document.querySelector('.arrow_right').addEventListener('click', () => {
	console.log('Flèche droite cliquée');
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateBanner();
});
