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
  }, 5000); // Change the interval (in milliseconds) as needed
}

// Show the first carousel initially
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

// Start autoplay when the page loads
startAutoplay();

// ACCORDIOn

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion");

  accordionItems.forEach((item) => {
    const question = item.querySelector(".question");
    const arrowDown = item.querySelector(".arrow-down");
    const hiddenBox = item.querySelector(".hidden-box");

    question.addEventListener("click", () => {
      if (hiddenBox.style.display === "block") {
        // Close the current item
        hiddenBox.style.display = "none";
        arrowDown.style.transform = "rotate(0deg)";
      } else {
        // Close all other items
        accordionItems.forEach((otherItem) => {
          const otherHiddenBox = otherItem.querySelector(".hidden-box");
          const otherArrowDown = otherItem.querySelector(".arrow-down");

          if (otherHiddenBox.style.display === "block") {
            otherHiddenBox.style.display = "none";
            otherArrowDown.style.transform = "rotate(0deg)";
          }
        });

        // Open the clicked item
        hiddenBox.style.display = "block";
        arrowDown.style.transform = "rotate(180deg)";
      }
    });
  });
});

// TRANSPARENT HEADER

// Add an event listener for the scroll event
window.addEventListener("scroll", function () {
  // Get the scroll position
  let scrollPosition = window.scrollY;

  // Set the header background color based on the scroll position
  let header = document.querySelector("header");
  let alpha = Math.min(0.9, scrollPosition / 200); // Adjust the value as needed
  header.style.backgroundColor = "rgba(27, 30, 31, " + alpha + ")";
});

// UPDATE YEAR

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

console.log("welcome");
