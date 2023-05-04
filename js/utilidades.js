var countryCounter = 0

function crearElemento(nombreTag){
    return document.createElement(nombreTag);
}

function crearElementoConTexto(nombreTag, texto){
    var elemento = crearElemento(nombreTag);
    var textoElemento = document.createTextNode(texto);
    elemento.appendChild(textoElemento);
    document.body.appendChild(elemento);
    return elemento;
}

function crearImagen(urlImagen) {
    
    var img = crearElemento("img");
    img.src = urlImagen;
    img.style.height = "100px";
    return img;
}

function adicionarHijo(padre, hijo){
    padre.appendChild(hijo);
}

function adicionarABody(hijo){
    adicionarHijo(document.body,hijo);
}

function crearOption(selectID, name) {
    var newOption = document.createElement('option');
    var insertedText = document.createTextNode(name);
    newOption.value = countryCounter;
    newOption.appendChild(insertedText);
    selectID.appendChild(newOption);
    countryCounter++;
}