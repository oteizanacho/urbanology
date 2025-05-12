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

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navbar a");

  function updateActiveLink() {
    let index = sections.length;

    while (--index >= 0 && window.scrollY + 100 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove("active"));
    if (index >= 0) {
      const id = sections[index].id;
      const activeLink = document.querySelector(`#navbar a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  }

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("load", updateActiveLink);
