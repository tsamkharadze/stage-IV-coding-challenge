"use strict";

// CAROUSEL
const carouselContainers = document.querySelectorAll(".carousel-container");
const prevButtons = document.querySelectorAll(".btn-prev");
const nextButtons = document.querySelectorAll(".btn-next");

let currentCarouselIndex = 0;
let autoplayInterval;

function showCarousel(index) {
  carouselContainers.forEach((container, i) => {
    container.classList.toggle("hidden", i !== index);
  });
  currentCarouselIndex = index;
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    showCarousel((currentCarouselIndex + 1) % carouselContainers.length);
  }, 5000);
}

showCarousel(currentCarouselIndex);

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showCarousel(
      (currentCarouselIndex - 1 + carouselContainers.length) %
        carouselContainers.length
    );
  });
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showCarousel((currentCarouselIndex + 1) % carouselContainers.length);
  });
});

startAutoplay();
