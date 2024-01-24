"use strict";

//HEADER
window.addEventListener("scroll", function () {
  // Get the scroll position
  let scrollPosition = window.scrollY;

  let header = document.querySelector("header");
  let alpha = Math.min(0.9, scrollPosition / 200);
  header.style.backgroundColor = "rgba(27, 30, 31, " + alpha + ")";
});
