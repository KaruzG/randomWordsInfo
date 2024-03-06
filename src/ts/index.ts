// NAV BAR
const nav :HTMLElement = document.querySelector("nav")!
const navElements :NodeListOf<HTMLElement> = nav.querySelectorAll("li")!

navElements.forEach( (li) => {
    li.addEventListener("click", navLiSelected)
})


function navLiSelected(this: HTMLElement, ev:Event) {
    // Remove all selecteds
    navElements.forEach(element => {
        element.classList.remove("selected")
    });

    this.classList.add("selected")
}
