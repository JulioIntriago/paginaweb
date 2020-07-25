
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
var database = firebase.database();

almacenar = document.querySelector('#btnalmacenar');

window.addEventListener('load',function(){

    
objetoCahorro={id:'002',año:2020,nombre:'Disco sdd',detalles:'color negro,capacidad 500gb'}

    almacenar.addEventListener('click',function(){
        console.log(objetoCahorro.id)
        database.ref('repuestos/'+ objetoRepuestos.id ).set({
          id:objetoRepuestos.id,
          edad:objetoRepuestos.año,
          nombre:objetoRepuestos.nombre,
          raza:objetoRepuestos.detalles,
            })
            swal("Adopcion completada!", "", "success");
       
    })
    

});
