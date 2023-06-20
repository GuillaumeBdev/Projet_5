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
]

const rightArrow = document.querySelector(".arrow_right");
const leftArrow = document.querySelector(".arrow_left");
const bulletpoint = document.getElementById("bullet_point");
let currentImage = 0;

rightArrow.addEventListener("click", function() {
	console.log("Clic on right arrow");
	currentImage++;
	if (currentImage >= slides.length) {
	  currentImage = 0;
	}
	switchImage(currentImage);
  });
  
  leftArrow.addEventListener("click", function() {
	console.log("Clic on left arrow");
	currentImage--;
	if (currentImage < 0) {
	  currentImage = slides.length - 1;
	}
	switchImage(currentImage);
  });
  

function switchImage(index) {
	document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[index].image}`;
	document.querySelector("#banner p").innerHTML = slides[index].tagLine;
	const dotElements = document.querySelectorAll(".dot");
    dotElements.forEach((dotElement, dotIndex) => {
        if (dotIndex === index) {
            dotSelected(dotElement);
        } else {
            dotElement.classList.remove("dot_selected");
        }
    });
}

for (let i = 0; i < slides.length; i++) {
	let dotElement = document.createElement("div");
	dotElement.className = "dot";
	bulletpoint.appendChild(dotElement);

	if(currentImage === i) {
		dotElement.className += " dot_selected";
	}
}
function dotSelected(element) {
	element.classList.add("dot_selected");
}