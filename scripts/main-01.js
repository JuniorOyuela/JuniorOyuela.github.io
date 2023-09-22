//const miTitulo = document.querySelector("h1");
//miTitulo.textContent = "¡ Hola mundo !";





document.querySelector("h1").onclick = function () {funcionElementoClick()}


function funcionElementoClick(){
    alert("Haz hecho Click en el elemento !")

    document.querySelector("h1").textContent= "¡ Hola mundo !"
    document.querySelector("main h1").textContent= "¡ Como estan todos los perrunos !"
    
    
    const elementoh2 = document.querySelector("main h2")
        elementoh2.textContent="Pronto volaran a Marte !"
        elementoh2.setAttribute("style","text-align: center")
        elementoh2.style.textAlign="center"
        elementoh2.style.color="blue"
        elementoh2.style.fontSize="3em"
        elementoh2.style.textShadow = "grey 0.10em 0.10em 0.0em"
    

    
    const parrafos = document.querySelectorAll("main p")
    for (var i=0; i<parrafos.length; i++) {parrafos[i].style.color="yellow"}
    

}