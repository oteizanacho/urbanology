window.onload = (e) => {
    console.log('hola')
}

window.addEventListener("scroll", function (){
    const header = this.document.querySelector("header")
    if(window.scrollY > 100) {
        header.classList.add("visible")
    } else {
        header.classList.remove("visible")
    }
})