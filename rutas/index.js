const express = require('express')
const cors = require('cors')
const clientes = require('./rutas/clientes.js')
const adopciones = require('./rutas/donaciones.js')
const comentarios = require('./rutas/comentarios.js')


// vamos a definir una variable de tipo express
//que pueda utilizar las funciones del framework
let app = express()
// que use cors para poder ser accedido desde
//otros servidores
.use(cors())
// que publique o exponga una carpeta en la web
.use(express.static(__dirname+'/public'))
// que escuche por el puerto 3000
.use('/clientes',clientes.ruta)
.use('/donaciones',donaciones.ruta)
.use('/comentarios',comentarios.ruta)
.listen(3000)

