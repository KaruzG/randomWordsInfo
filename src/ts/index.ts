import { getNewWord } from "./fetchWord.js";

function handleNavSelection() {
    const nav :HTMLElement = document.querySelector("nav")!
    const navElements :NodeListOf<HTMLElement> = nav.querySelectorAll("li")!

    navElements.forEach( (li) => {
        li.addEventListener("click", navLiSelected)
    })


    function navLiSelected(this: HTMLElement, ev:Event) {
        navElements.forEach(element => {
            element.classList.remove("selected")
        });

        this.classList.add("selected")
    }
}


function updateWordInfo() {
    let wordInfo: object | null = getNewWord()

    if (wordInfo === null) { return false}

    console.log(wordInfo)
}

handleNavSelection()
updateWordInfo()