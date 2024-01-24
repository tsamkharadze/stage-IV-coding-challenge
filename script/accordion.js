"use strict";

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

        hiddenBox.style.display = "block";
        arrowDown.style.transform = "rotate(180deg)";
      }
    });
  });
});
