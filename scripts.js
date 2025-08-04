/*const hamburguesaBtn = document.getElementById("hamburguesa")
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
})*/

/*
const navigation = [ document.getElementById("acerca-de"), document.getElementById("servicios"), document.getElementById("contacto")]

navigation.forEach(nav => {
  nav.addEventListener("click", () => {
    hamburguesaBtn.style.display = "block"
    navBar.style.display = "none"
  })
})*/

const servicios = [
  {
    titulo: "Asesorías.",
    descripcion: "Te ayudamos a tomar decisiones estratégicas en el mundo inmobiliario. Analizamos el valor, el contexto y las oportunidades del sitio para diseñar estrategias de inversión alineadas con tus objetivos. Nuestro enfoque combina conocimiento del mercado, visión urbana y análisis de potencialidades a corto y largo plazo."
  },
  {
    titulo: "Factibilidad.",
    descripcion: "Determinamos qué se puede construir y cómo hacerlo. Estudiamos la normativa vigente, los indicadores urbanísticos y las condiciones del terreno para definir usos posibles y programas arquitectónicos viables. Este diagnóstico técnico y legal es la base para avanzar con seguridad en tu proyecto."
  },
  {
    titulo: "Ante-Proyecto.",
    descripcion: "Damos forma a la idea. Desarrollamos la propuesta arquitectónica inicial, con imágenes conceptuales, una memoria descriptiva y un pre-diseño que incluye aspectos de arquitectura e ingeniería. Este documento es clave para visualizar el proyecto, evaluar su viabilidad y comenzar gestiones técnicas o comerciales."
  },
  {
    titulo: "Activación comercial.",
    descripcion: "Transformamos el proyecto en un acontecimiento. Diseñamos planes de comunicación, estrategias de venta y acciones públicas que visibilicen el desarrollo y convoquen al entorno. Desde eventos urbanos hasta piezas de difusión, buscamos generar interés y valor desde el primer momento."
  }
]

let numServicio = 0

const flechaizq = document.getElementById("izquierda")
const flechader = document.getElementById("derecha")


flechader.addEventListener("click", () => {
  numServicio === (servicios.length - 1) ? numServicio = 0 : numServicio += 1
  tituloServicio.innerText = servicios[numServicio].titulo
  descripcionServicio.innerText = servicios[numServicio].descripcion
})

flechaizq.addEventListener("click", () => {
  numServicio === 0 ? numServicio = (servicios.length - 1) : numServicio -= 1
  tituloServicio.innerText = servicios[numServicio].titulo
  descripcionServicio.innerText = servicios[numServicio].descripcion
})


const posteos = [
  {
    imagen: "acercadesinedit.jpeg",
    titulo: "Arquitectura como herramienta y arte.",
    texto: "¿Sobre qué hablar? ¿Qué preguntarnos? ¿Qué reflexionar juntos? Lo que me importa es la arquitectura. En este campo, abundan arquitectos hablando de sus obras como si fueran amantes: con pasión, orgullo y una dosis de obsesión. Yo la pienso desde otro lugar. Para mí, la arquitectura es, ante todo, una herramienta para mejorar la calidad de vida de las personas. A partir de esa base funcional, se abre la dimensión artística: esa en la que la arquitectura se vuelve una de las artes más grandes en escala, con el poder de conmover, emocionar, hacer sentir. Hay distintos tipos de arquitectura: la proyectada, que es la teoría, lo que se piensa, lo que aún no ha tomado forma, pero ya busca su lugar en el mundo; y la construida, que es la práctica, lo que se dice con hechos. Una obra que habla por sí misma porque encontró el lugar y el momento para realizarse."
  },
  {
    imagen: "blog.jpeg",
    titulo: "El refugio como primer contacto con la arquitectura.",
    texto: "Construir es el punto en que lo pensado y lo dicho se vuelve tangible. Es el instante en que los materiales se combinan para dialogar con el entorno, ya sea urbano o natural. Es ahí donde la arquitectura comienza a tener voz, volumen, presencia. Mi intención con estas columnas es compartir temas que nos inviten a reflexionar. Si creo que la arquitectura es una herramienta para mejorar la vida, entonces quiero explorar cómo esa idea se manifiesta en obras concretas, en proyectos, en los distintos momentos del proceso arquitectónico. Todo esto atravesado por una variable fundamental: el tiempo. Porque el tiempo también construye. Nos cambia la mirada. Nos enseña a observar de otra manera. Por eso, me parece justo comenzar desde el principio: desde el primer momento en que, de chicos, tomamos contacto con lo arquitectónico. La arquitectura, para muchos de nosotros, nació cuando hicimos nuestro primer refugio. Una carpa improvisada, una casita en el árbol, escondernos detrás de un sillón, meternos debajo de la mesa mientras alguien limpiaba, o trepar a un árbol durante un juego de escondidas. Esa necesidad de abrigo, de lugar, de estructura, es quizá la primera experiencia genuina con el espacio creado. Volver a las bases: ¿qué es un refugio? Quizás ahí empiece todo. Y quizás desde ahí podamos seguir construyendo."
  }
]

const blogFlechaIzq = document.getElementById("blog-flecha-izq")
const blogFlechaDer = document.getElementById("blog-flecha-der")
const blogImagen = document.getElementById("blog-img")
const blogTitulo = document.getElementById("blog-titulo")
const blogTexto = document.getElementById("blog-texto")

let numBlog = 0

blogFlechaDer.addEventListener("click", () => {
  numBlog === (posteos.length - 1) ? numBlog = 0 : numBlog += 1
  blogImagen.src = posteos[numBlog].imagen
  blogTitulo.innerText = posteos[numBlog].titulo
  blogTexto.innerText = posteos[numBlog].texto
})

blogFlechaIzq.addEventListener("click", () => {
  numBlog === 0 ? numBlog = (posteos.length - 1) : numBlog -= 1
  blogImagen.src = posteos[numBlog].imagen
  blogTitulo.innerText = posteos[numBlog].titulo
  blogTexto.innerText = posteos[numBlog].texto
})

const asesoriaElem = document.getElementById("asesorias")
const factibilidadElem = document.getElementById("factibilidad")
const anteproyectoElem = document.getElementById("anteproyecto")
const activacionElem = document.getElementById("activacioncomercial")
const tituloServicio = document.getElementById("titulo-servicio")
const descripcionServicio = document.getElementById("desc-servicio")

asesoriaElem.addEventListener("mouseenter", () => {
  tituloServicio.innerText = servicios[0].titulo
  descripcionServicio.innerText = servicios[0].descripcion
})

factibilidadElem.addEventListener("mouseenter", () => {
  tituloServicio.innerText = servicios[1].titulo
  descripcionServicio.innerText = servicios[1].descripcion
})

anteproyectoElem.addEventListener("mouseenter", () => {
  tituloServicio.innerText = servicios[2].titulo
  descripcionServicio.innerText = servicios[2].descripcion
})

activacionElem.addEventListener("mouseenter", () => {
  tituloServicio.innerText = servicios[3].titulo
  descripcionServicio.innerText = servicios[3].descripcion
})
