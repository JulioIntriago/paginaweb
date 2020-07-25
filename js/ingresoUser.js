

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



cedula = document.querySelector('#txtcedula');
ingreso = document.querySelector('#btningreso');
password = document.querySelector('#txtpassword');



window.addEventListener('load',function(){
    ingreso.addEventListener('click',function(){
        firebase.database().ref('/clientes/'+cedula.value).once('value',function(resultado){

           if(resultado.val().password == password.value){
              document.form.submit()
            }else
               console.log('error')

           
        })
    })


})


