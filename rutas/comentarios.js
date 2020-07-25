//definición de constantes
const express = require('express')
var firebase = require('firebase');
const bodyParser=require('body-parser')

//Definición de ruta e indicar que vamos a usar bodyParser para acceder al cuerpo de un mensaje POST
let router=express.Router()
router.use(bodyParser())

//configuración de firebase
var firebaseConfig = {
    apiKey: "AIzaSyD0AKwKGWZe2WUUr05BHugTqESscGekcZ0",
    authDomain: "repuestos-web.firebaseapp.com",
    databaseURL: "https://repuestos-web.firebaseio.com",
    projectId: "repuestos-web",
    storageBucket: "repuestos-web.appspot.com",
    messagingSenderId: "542706205259",
    appId: "1:542706205259:web:4da2a70da811277bf903ce",
    measurementId: "G-DV64X46QGF"
  };
//inicializar aplicación firebase y validar para que sólo se defina una vez
if (!firebase.apps.length)
{
    firebase.initializeApp(config);
}
//definer variable base de datos
let basededatos= firebase.database();
//Agregar la ruta ‘/’ con los métodos GET y POST
router.route('/')
.get(function(request,response){
	//arreglo donde vamos a almacenar los clientes 
    let arreglo=[];
    basededatos.ref('comentarios').once('value').then(datos => {
// es necesario convertir los nodos de firebase e incluirlos en el arreglo
    datos.forEach(nodo=> {
      arreglo.push(nodo.val());
    })
    response.send(arreglo);
    }).catch(q=> {
        console.log(q)
        response.send('Los datos no se pudieron consultar');
    })
})
//define método POST utilizando el cuerpo del mensaje
.post( function(request,response,next){
    console.log(request.body)
    basededatos.ref("comentarios/"+ request.body.telefono).set(request.body).then(p=>{
      response.send('Se almacenó correctamente la información');
    }).catch(q=>{
      response.send(
        {'respuesta':
        'Hubo problemas al intentar guardar la información del cliente'});
    });
  });

//método GET individual para acceder a un solo cliente
router.route('/:cedulax')
.get(function(request,response,next){
basededatos.ref('clientes/'+request.params.cedulax).once('value').then(dato=>{
    response.send(dato.val());
  })
})
//método DELETE se debe enviar identificación
.delete(function(request,response,next){
    basededatos.ref('clientes/'+ request.params.cedulax ).remove().then(p=>{
      response.send('Los datos se eliminaron con éxito');
    }).catch(q=> {
      response.send('No se pudo eliminar el cliente');
    })
  });
  

module.exports.ruta=router
