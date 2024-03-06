"use strict";
// NAV BAR
const nav = document.querySelector("nav");
const navElements = nav.querySelectorAll("li");
navElements.forEach((li) => {
    li.addEventListener("click", navLiSelected);
});
function navLiSelected(ev) {
    // Remove all selecteds
    navElements.forEach(element => {
        element.classList.remove("selected");
    });
    this.classList.add("selected");
}
