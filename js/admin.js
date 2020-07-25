
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

/*variables*/ 
let clientes = document.querySelector('#btnclientes');
let ingresopets = document.querySelector('#btningresar');
let tabla = document.querySelector('#tabla');
let listaCachorros = document.querySelector('#listaRepuestos');
let cachorros = document.querySelector('#btnRepuestos');
let comentarios = document.querySelector('#btnComentarios');
let futuradopciones = document.querySelector('#btndonacion');







futuradopciones.addEventListener('click',function(){
    firebase.database().ref('/donaciones').on('value',function(resultador){
        html='<table>' 
        html+='<input placeholder="id" id="txtid"></input>'
        html+='<input placeholder="edad" id="txtedad"></input>'
        html+='<input placeholder="nombre" id="txtnombre"></input>'
        html+='<input placeholder="raza" id="txtraza"></input>'
        html+='<button id="btnboton">Aceptar</button>'
        html+='</table>'
        tabla.innerHTML=html;
        
        id = document.querySelector('#txtid');
        edad = document.querySelector('#txtaño');
        nombre = document.querySelector('#txtnombre');
        raza = document.querySelector('#txtdescripcion');
        
        btncliente = document.querySelector('#btnboton');
        /*funcion del boton para almacenar los datos de los clientes en firebase*/

        btncliente.addEventListener('click',function(){
   
            database.ref('adopciones/'+ id.value).set({
                id:id.value,               
                año:año.value,
                nombre:nombre.value,
                descripcion:descripcion.value,
        
            })
            alert('guardado!')
        })


        html='<table border=1>'

        html+=`<tr>
        <td>id</td><td>nombre</td><td>edad</td><td>raza</td>        
        </tr>`

        resultador.forEach(function(resul) {
            html+= `<tr>
            <td>${resul.val().id} </td>
            <td> ${resul.val().nombre}</td> 
            <td>${resul.val().año} </td>
            <td> ${resul.val().descripcion}</td>
           <td> <button class='accion' value=${resul.val().id} >Editar</button> </td>
            <td> <button class='accion' value=${resul.val().id} >Eliminar</button></td> 
            </tr>` 
            })

        html+='</table>'

        listaCachorros.innerHTML=html

        document.querySelectorAll('.accion').forEach(elemento=>{
            elemento.addEventListener('click',function(){
                accion(elemento.innerHTML, elemento.value)
            })
        });

    })  
    
function accion(tipo, valor) 
{
    if (tipo=='Eliminar')
    {
        firebase.database().ref('/donaciones/'+valor).remove().then(p=>{
            alert('registro eliminado')
        });
    } 
    else
    {
        firebase.database().ref('/donaciones/'+valor).once('value',function(resultadox){
        let objetoRespuesta= resultadox.val() 
        id.value=objetoRespuesta.id;
        nombre.value=objetoRespuesta.nombre; 
        edad.value=objetoRespuesta.edad;
        raza.value=objetoRespuesta.raza;
       
        }) 
    }
}
})













comentarios.addEventListener('click',function(){
    firebase.database().ref('/comentarios').on('value',function(resultador){
        html='<table>' 
        html+='<input placeholder="telefono" id="txttelefono"></input>'
        html+='<input placeholder="nombre" id="txtnombre"></input>'
        html+='<input placeholder="email" id="txtemail"></input>'
        html+='<input placeholder="comentario" id="txtcomentario"></input>'
        html+='<button id="btnboton">Aceptar</button>'
        html+='</table>'
        tabla.innerHTML=html;
        
        nombre = document.querySelector('#txtnombre');
        comentario = document.querySelector('#txtcomentario');
        email = document.querySelector('#txtemail');
        telefono = document.querySelector('#txttelefono');
        
        btncliente = document.querySelector('#btnboton');
        /*funcion del boton para almacenar los datos de los clientes en firebase*/

        btncliente.addEventListener('click',function(){
   
            database.ref('comentarios/'+ telefono.value).set({
                nombre:nombre.value,               
                email:email.value,
                telefono:telefono.value,
                comentario:comentario.value,
        
            })
            alert('guardado!')
        })


        html='<table border=1>'

        html+=`<tr>
        <td>telefono</td><td>nombre</td><td>comentario</td><td>correo</td>        
        </tr>`

        resultador.forEach(function(resul) {
            html+= `<tr>
            <td>${resul.val().telefono} </td>
            <td> ${resul.val().nombre}</td> 
            <td>${resul.val().comentario} </td>
            <td> ${resul.val().email}</td>
           <td> <button class='accion' value=${resul.val().telefono} >Editar</button> </td>
            <td> <button class='accion' value=${resul.val().telefono} >Eliminar</button></td> 
            </tr>` 
            })

        html+='</table>'

        listaRepuestos.innerHTML=html

        document.querySelectorAll('.accion').forEach(elemento=>{
            elemento.addEventListener('click',function(){
                accion(elemento.innerHTML, elemento.value)
            })
        });

    })  
    
function accion(tipo, valor) 
{
    if (tipo=='Eliminar')
    {
        firebase.database().ref('/comentarios/'+valor).remove().then(p=>{
            alert('registro eliminado')
        });
    } 
    else
    {
        firebase.database().ref('/comentarios/'+valor).once('value',function(resultadoi){
        let objetoRespuesta= resultadoi.val() 
        nombre.value=objetoRespuesta.nombre;
        email.value=objetoRespuesta.email; 
        telefono.value=objetoRespuesta.telefono;
        comentario.value=objetoRespuesta.comentario;
       
        }) 
    }
}
})





 /*ingreso de datos del cachorro en el administrador boton ingresoRepuestos*/ 
 
ingresopets.addEventListener('click',function(){ 
    html='<table>' 
    html+='<input placeholder="nRepuesto" id="numeroDeRepuesto"></input>'
    html+='<input placeholder="descripcion" id="descripcion"></input>'
    html+='<input placeholder="año" id="año"></input>'
    html+='<input placeholder="actitud" id="actitud"></input>'
    html+='<button id="boton">Aceptar</button>'
    html+='</table>'
    tabla.innerHTML=html;
     id = document.querySelector('#numeroDeRepuesto');
     boton = document.querySelector('#boton');
     raza = document.querySelector('#descripcion');
     edad = document.querySelector('#año');
     actitud = document.querySelector('#actitud');
    
    /*funcion del boton para almacenar los datos de los cachorros en firebase*/
    boton.addEventListener('click',function(){
       
       database.ref('repuestos/'+ id.value).set({
           id:id.value,
           descripcion:descripcion.value,
           año:año.value,
           actitud:actitud.value,

           
       })
       alert('guardado!')
    })
    
})

/*accede al firebase y  trae los datos de mascotas con sus repectivos datos*/

cachorros.addEventListener('click',function(){
    html='<table>' 
    html+='<input placeholder="nRepuesto" id="numeroDeRepuesto"></input>'
    html+='<input placeholder="descripcion" id="descripcion"></input>'
    html+='<input placeholder="año" id="año"></input>'
    html+='<input placeholder="actitud" id="actitud"></input>'
    html+='<button id="boton">Aceptar</button>'
    html+='</table>'
    tabla.innerHTML=html;
    id = document.querySelector('#numeroDeRepuesto');
    boton = document.querySelector('#boton');
    raza = document.querySelector('#descripcion');
    edad = document.querySelector('#año');
    actitud = document.querySelector('#actitud');
   
   /*funcion del boton para almacenar los datos de los cachorros en firebase*/
   boton.addEventListener('click',function(){
      
      database.ref('repuestos/'+ id.value).set({
          id:id.value,
          descripcion:descripcion.value,
          año:año.value,
          actitud:actitud.value,

          
      })
      alert('guardado!')
   })
  
   
    firebase.database().ref('/repuestos').on('value',function(resultado){
       
        html='<table border=1>'
        html+=`<tr>
        <td>Codigo</td><td>Raza</td><td>Descripcion</td><td>edad</td>
        </tr>`

            resultado.forEach(function(resul) {
               
                html+= `<tr>
                <td>${resul.val().id} </td>
                <td> ${resul.val().raza}</td> 
                <td>${resul.val().actitud} </td>
                <td> ${resul.val().edad}</td>
                <td> <button class='accion' value=${resul.val().id} >Editar</button> </td>
                <td> <button class='accion' value=${resul.val().id} >Eliminar</button></td> 
                </tr>` 
                })
            html+='</table>'
            
            listaCachorros.innerHTML=html;

            document.querySelectorAll('.accion').forEach(elemento=>{
                elemento.addEventListener('click',function(){
                    accion(elemento.innerHTML, elemento.value)
                })
            });
    })
})
function accion(tipo, valor){
    if (tipo=='Eliminar'){
        firebase.database().ref('/repuestos/'+valor).remove().then(p=>{
           
        });
    }else
    {
        firebase.database().ref('/repuestos/'+valor).once('value',function(resultadoi){
        let objetoRespuesta= resultadoi.val() 
        id.value=objetoRespuesta.id;
        raza.value=objetoRespuesta.raza;
        edad.value=objetoRespuesta.edad;
        actitud.value=objetoRespuesta.actitud;
        
        }) 
    }


}



/*-------------------------------------------------*/


window.addEventListener('load',function(){
    clientes.addEventListener('click',function(){
        listaClientes = document.querySelector('#listaClientes');

        firebase.database().ref('/clientes').on('value',function(resultado){

            html='<table>' 
            html+='<input placeholder="cedula" id="txtcedula"></input>'
            html+='<input placeholder="nombre" id="txtnombre"></input>'
            html+='<input placeholder="apellido" id="txtapellido"></input>'
            html+='<input placeholder="email" id="txtemail"></input>'
            html+='<input placeholder="telefono" id="txttelefono"></input>'
            html+='<input placeholder="ciudad" id="txtciudad"></input>'
            html+='<button id="btnboton">Aceptar</button>'
            html+='</table>'
            tabla.innerHTML=html;

            cedula = document.querySelector('#txtcedula');
            nombre = document.querySelector('#txtnombre');
            apellido = document.querySelector('#txtapellido');
            email = document.querySelector('#txtemail');
            telefono = document.querySelector('#txttelefono');
            ciudad = document.querySelector('#txtciudad');
            btncliente = document.querySelector('#btnboton');
            /*funcion del boton para almacenar los datos de los clientes en firebase*/
    
            btncliente.addEventListener('click',function(){
       
                database.ref('clientes/'+ cedula.value).set({
                    cedula:cedula.value,
                    nombre:nombre.value,
                    apellido:apellido.value,
                    email:email.value,
                    telefono:telefono.value,
                    ciudad:ciudad.value,
            
                })
                alert('guardado!')
            })

            /*mostrar por pantalla la informacin de los clientes */

            html='<table border=1>'
            html+=`<tr>
            <td>cedula</td><td>nombre</td><td>apellido</td><td>correo</td>
            <td>Telefono</td><td>Ciudad</td>
            </tr>`
    
            resultado.forEach(function(resul) {
                html+= `<tr>

                <td>${resul.val().cedula} </td>
                <td> ${resul.val().nombre}</td> 
                <td>${resul.val().apellido} </td>
                <td> ${resul.val().email}</td>
                <td>${resul.val().telefono} </td>
                <td>${resul.val().ciudad} </td>
                <td> <button class='accion' value=${resul.val().cedula} >Editar</button> </td>
                <td> <button class='accion' value=${resul.val().cedula} >Eliminar</button></td> 
                </tr>` 
                })

            html+='</table>'

            listaCachorros.innerHTML=html
            
            document.querySelectorAll('.accion').forEach(elemento=>{
                elemento.addEventListener('click',function(){
                    accion(elemento.innerHTML, elemento.value)
                })
            });
        });
    });
    function accion(tipo, valor) 
    {
        if (tipo=='Eliminar')
        {
            firebase.database().ref('/clientes/'+valor).remove().then(p=>{
                alert('registro eliminado')
            });
        } 
        else
        {
            firebase.database().ref('/clientes/'+valor).once('value',function(resultadoi){
            let objetoRespuesta= resultadoi.val() 
            cedula.value=objetoRespuesta.cedula; 
            nombre.value=objetoRespuesta.nombre;
            apellido.value= objetoRespuesta.apellido;
            email.value=objetoRespuesta.email; 
            telefono.value=objetoRespuesta.telefono;
            ciudad.value= objetoRespuesta.ciudad;
            }) 
        }
    }

})

