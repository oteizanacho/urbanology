/*
window.onload = (e) => {
    console.log('hola')
}*/

window.addEventListener("scroll", function (){
    const header = document.querySelector("header")
    if(window.scrollY > 0) {
        header.classList.add("visible")
    } else {
        header.classList.remove("visible")
    }
})
/*
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("visible");
    }
});
*/