

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

window.addEventListener('load',function(){

    nombre= document.querySelector('#txtnombre');
    apellido= document.querySelector('#txtapellido');
    email= document.querySelector('#txtemail');
    telefono= document.querySelector('#txttelefono');
    ciudad= document.querySelector('#txtciudad');
    cedula= document.querySelector('#txtcedula');
    password= document.querySelector('#txtpassword');
    guardar= document.querySelector('#btnguardar');



guardar.addEventListener('click',function(){
    var celular = telefono.value.length;
    var verificacion = cedula.value.length;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (emailRegex.test(email.value) && verificacion == 10 && celular == 10) {
      

        database.ref('clientes/'+ cedula.value ).set({
        email: email.value,
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        ciudad: ciudad.value,
        cedula: cedula.value,
        password: password.value,
        })
        
        alert('registrado!!')
    } else {
        alert('error')
       
      }
    
    
    
});
})



