import { getNewWord } from "./fetchWord.js";
function handleNavSelection() {
    const nav = document.querySelector("nav");
    const navElements = nav.querySelectorAll("li");
    navElements.forEach((li) => {
        li.addEventListener("click", navLiSelected);
    });
    function navLiSelected(ev) {
        navElements.forEach(element => {
            element.classList.remove("selected");
        });
        this.classList.add("selected");
    }
}
function updateWordInfo() {
    let wordInfo = getNewWord();
    if (wordInfo === null) {
        return false;
    }
    console.log(wordInfo);
}
handleNavSelection();
updateWordInfo();
