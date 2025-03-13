// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let misAmigos = [];
let nomAmigo ;
var listaAmigos = document.querySelector('#listaAmigos');
let num;

//Funcion Agregar Amigo
function agregarAmigo(){
//Capturando el valor del input
    nomAmigo = document.getElementById('amigo').value;
    if(nomAmigo == ''){
       alert("Debe ingresar un nombre valido!");
    }else{
        console.log(nomAmigo);
    //Agregando los nombres a la lista
        misAmigos.push(nomAmigo); 
        mostrarAmigos();
        limpiarCaja();        
        return;
    }
    
}

//Funcion mostrar lista de amigos
function mostrarAmigos(){    
    listaAmigos.innerHTML = "";
    misAmigos.forEach((item) => {
       asignarTexto('#listaAmigos',`<li>${item}</li>`);
    });
    console.log(misAmigos);
    return;
}


//Funcion limpiar caja texto
function limpiarCaja(){
    document.querySelector('#amigo').value = '' ;
}


//Funcion obtener el valor random
function valorRandom() {
    let number = Math.floor(Math.random()*misAmigos.length);
    return number;
   }

//Funcion sortear amigos
function sortearAmigo(){
    if (misAmigos.length > 0){
        num = valorRandom();
        let listaAmigosHTML = document.querySelector('#listaAmigos');
        listaAmigosHTML.innerHTML = '';
        asignarTexto('#resultado',`El amigo secreto sorteado es: ${misAmigos[num]}`); 
        misAmigos = [];
    }else{
        alert("Debe agregar amigos a su lista!");
    }
}

//Funcion asignar texto a un elemento
function asignarTexto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML += texto;
    return;

}