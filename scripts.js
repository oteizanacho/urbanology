const hamburguesaBtn = document.getElementById("hamburguesa")
const cerrarBtn = document.getElementById("cerrar")
const navBar = document.querySelector("nav")

hamburguesaBtn.addEventListener("click", () => {
  hamburguesaBtn.style.display = "none"
  cerrarBtn.style.display = "block"
  navBar.style.display = "flex"
})

cerrarBtn.addEventListener("click", () => {
  hamburguesaBtn.style.display = "block"
  navBar.style.display = "none"
})