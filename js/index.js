

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

telefono = document.querySelector('#txttelefono');
nombre = document.querySelector('#txtnombre');
comentario = document.querySelector('#txtcomentario');
email = document.querySelector('#txtemail');
envio = document.querySelector('#btnenvio');

var celular = telefono.value.length;
window.addEventListener('load',function(){

        envio.addEventListener('click',function(){
            
            if(celular == 10){
              
            database.ref('comentarios/'+ telefono.value).set({
                telefono:telefono.value,
                nombre:nombre.value,
                comentario:comentario.value,
                email:email.value,
      
                
            })
            swal("comentario enviado", "", "success");
            

            }else{
                swal("complete la informacion", "", "error");
    
            }
            
        })
    
})