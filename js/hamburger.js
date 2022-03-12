const hamburger = document.querySelector("#hamburger");
const navUl = document.querySelector("#nav-ul");

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
})

let menuOpen = false; 

hamburger.addEventListener("click", () => {
    if(!menuOpen) {
        hamburger.classList.add("open");
        menuOpen = true;
    } else {
        hamburger.classList.remove("open");
        menuOpen = false; 
    }
})