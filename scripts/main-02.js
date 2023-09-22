
document.getElementById("BotonAgregarTitulo").onclick = function() {FuncionBotonAgregarTitulo()}
document.getElementById("BotonAgregarParrafo").onclick = function() {FuncionBotonAgregarParrafo()}


// Obtén una lista de todos los elementos con la clase "parrafo"y // Agrega un evento de clic a cada párrafo
var parrafos = document.querySelectorAll("main p")
parrafos.forEach( function(parrafo){ parrafo.addEventListener("click", function() {CambiaContenidoParrafo(parrafo)})})




/*************************************************FUNCIONES***********************************************/

function FuncionBotonAgregarTitulo(){
    const Titulo = document.createElement('h2');
    Titulo.textContent = prompt("Por favor digite el Titulo (h2)");
    document.querySelector("main").appendChild(Titulo);
}

function FuncionBotonAgregarParrafo(){
    const parrafo = document.createElement('p');
    parrafo.textContent = prompt("Por favor digite el contenido del parrafo");
    parrafo.addEventListener("click", function() {CambiaContenidoParrafo(parrafo)})
    document.querySelector("main").appendChild(parrafo);
}

function CambiaContenidoParrafo(parrafo){
    parrafo.textContent = prompt("Por favor digite el contenido del parrafo",parrafo.textContent);
}

