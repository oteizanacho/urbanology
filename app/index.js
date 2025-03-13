
import ejs from 'ejs'
import express from 'express'
import { fileURLToPath } from 'url'

import path from 'path'


const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuración de vistas: lee los archivos .ejs de la carpeta views
app.set('views', path.join(__dirname, '..', 'views'))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

// Middleware para parsear el body de las peticiones: permite poder recibir datos en formato JSON
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware para servir archivos estáticos: permite servir archivos estáticos como imágenes, CSS, JS, etc.
app.use(express.static(path.join(__dirname, '..', 'public')))

/*
 * Configuración de rutas: importa las rutas
 * Si querés agregar nuevas rutas, acá tenes que importarlas y configurarlas
 */

app.get('/', (req, res) =>{
    res.render('index.html')
})

// Inicialización del servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
