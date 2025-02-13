// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let misAmigos = [];
let nomAmigo ;
var listaAmigos = document.querySelector('#listaAmigos');


//Funcion Agregar Amigo
function agregarAmigo(){
//Capturando el valor del input
    nomAmigo = document.getElementById('amigo').value;
    console.log(nomAmigo);
//Agregando los nombres a la lista
    misAmigos.push(nomAmigo); 
    mostrarAmigos();
    limpiarCaja();
    return;
}

//Funcion mostrar lista de amigos
function mostrarAmigos(){    
    listaAmigos.innerHTML = "";
    misAmigos.forEach((item) => {
        listaAmigos.innerHTML += `<li>${item}</li>`;
    });
    console.log(misAmigos);
    return;
}


//Funcion limpiar caja texto
function limpiarCaja(){
    document.querySelector('#amigo').value = '' ;
}
