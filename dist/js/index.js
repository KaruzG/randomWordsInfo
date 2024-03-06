import { getNewWord } from "./fetchWord.js";
// Pointers to DOM
const PTR_WORD = document.getElementById("word");
const PTR_PRONUNCIATION = document.getElementById("pron");
const PTR_DEFINITION = document.getElementById("definition");
const PTR_SYNONYMS = document.getElementById("synonyms");
const PTR_ANTONYMS = document.getElementById("antonyms");
const PTR_RHYMES = document.getElementById("rhymes");
let visiblePage = PTR_DEFINITION;
function handleNavSelection() {
    const nav = document.querySelector("nav");
    const navElements = nav.querySelectorAll("li");
    navElements.forEach((li) => {
        li.addEventListener("click", navLiSelected);
    });
    function navLiSelected(ev) {
        // Page to show
        const LI_CLICKED = this.innerText;
        visiblePage.classList.add("hidden");
        // Unhide page selected
        switch (LI_CLICKED) {
            case "Definition":
                PTR_DEFINITION.classList.remove("hidden");
                visiblePage = PTR_DEFINITION;
                break;
            case "Synonyms":
                PTR_SYNONYMS.classList.remove("hidden");
                visiblePage = PTR_SYNONYMS;
                break;
            case "Antonyms":
                PTR_ANTONYMS.classList.remove("hidden");
                visiblePage = PTR_ANTONYMS;
                break;
            case "Rhymes":
                PTR_RHYMES.classList.remove("hidden");
                visiblePage = PTR_RHYMES;
                break;
            default:
                break;
        }
        navElements.forEach(element => {
            element.classList.remove("selected");
        });
        this.classList.add("selected");
    }
}
async function updateWordInfo() {
    let wordInfo = await getNewWord();
    if (wordInfo === false) {
        return false;
    }
    PTR_WORD.innerText = wordInfo.word;
    if (wordInfo.pronunciation != undefined) {
        PTR_PRONUNCIATION.innerText = wordInfo.pronunciation.all;
    }
    if (wordInfo.results[0].definition != null) {
        PTR_DEFINITION.innerText = wordInfo.results[0].definition;
    }
    if (wordInfo.results[0].synonyms != null) {
        PTR_SYNONYMS.innerText = wordInfo.results[0].synonyms[0];
    }
    if (wordInfo.results[0].antonyms != null) {
        PTR_ANTONYMS.innerText = wordInfo.results[0].antonyms[0];
    }
    if (wordInfo.results[0].rhymes != null) {
        PTR_DEFINITION.innerText = wordInfo.results[0].rhymes[0];
    }
}
handleNavSelection();
updateWordInfo();
