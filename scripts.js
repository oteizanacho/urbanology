const btn = document.getElementById("hamburguesa");
const menu = document.getElementById("navbar");
const cerrar = document.getElementById("cerrar");
const header = document.querySelector("header");
const links = document.querySelectorAll(".nav-opcion");
const secciones = document.querySelectorAll("section, footer");

// Menú hamburguesa
btn.addEventListener("click", () => {
  btn.style.display = "none";
  cerrar.style.display = "block";
  menu.style.display = "flex";
  menu.style.flexDirection = "column";
  menu.style.alignItems = "end";
});

cerrar.addEventListener("click", () => {
  menu.style.display = "none";
  btn.style.display = "block";
});

// Mostrar header al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }

  // Scrollspy
  secciones.forEach(seccion => {
    const top = seccion.offsetTop - 100;
    const bottom = top + seccion.offsetHeight;
    const scroll = window.scrollY;

    if (scroll >= top && scroll < bottom) {
      const id = seccion.getAttribute("id");
      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
