//onload function
window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display");
    }, );
};



//MENU FUNCTION
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container, .about-cont").classList.toggle("change");
});



//SCROLL UP FUNCTION
document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});