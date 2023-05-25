function encriptar () {
    document.getElementById("texto-salida").innerHTML = ""; // borra el texto que se encuentra en el sector de salida
    var textoIngresado = document.getElementById("textoIngresado").value; //toma el texto que el usuario ingreso en el input

    if (textoIngresado === "") { // si el texto ingresado es una cadena vacia recarga la pagina
        
        location.reload();

        
    } else if (textoIngresado.match(/[A-Z]/)  || textoIngresado.match("á") || textoIngresado.match("é") || textoIngresado.match("í") || textoIngresado.match("ó") || textoIngresado.match("ú") || textoIngresado.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) { 
    // si el texto ingresado contiene alguna letra mayuscula, algun acento o un caracter especial, envia un menaje de advertencia 
        
        document.getElementById("panelsalidaerror").style.visibility = "visible";
    
    } else {

        for (let caracter of textoIngresado) { // recorre el texto ingresado

            var textoEncriptado = []; //crea un arreglo vacio donde ira el el texto encriptado
    
            var ai = "ai";  // define las claves que se usaran para realizar la encriptacion
            var enter = "enter";
            var imes = "imes";
            var ober = "ober";
            var ufat = "ufat";
    
            if (caracter === "a") { // define como sera tratado cada caracter del texto ingresado
                caracter = ai;
                textoEncriptado.push(caracter); 
            } else if (caracter === "e") {
                caracter = enter;
                textoEncriptado.push(caracter); 
            } else if (caracter === "i") {
                caracter = imes;
                textoEncriptado.push(caracter);  
            } else if (caracter === "o") {
                caracter = ober;
                textoEncriptado.push(caracter); 
            } else if (caracter === "u") {
                caracter = ufat;
                textoEncriptado.push(caracter); 
            } else {
                textoEncriptado.push(caracter); 
            }
        
            document.getElementById("panelsintexto").style.visibility = "hidden";
            document.getElementById("panelsalidaerror").style.visibility = "hidden";
            document.getElementById("panelsalidaok").style.visibility = "visible"; // visibiliza el espacio del texto de salida
            document.getElementById("texto-salida").innerHTML += textoEncriptado; // muestra en pantalla el texto encriptado  
        }
    }
}

function desencriptar () {
    document.getElementById("texto-salida").innerHTML = ""; // borra el texto que se encuentra en el sector de salida
    var textoIngresado = document.getElementById("textoIngresado").value; //toma el texto que el usuario ingreso en el input

    if (textoIngresado === "") { // si el texto ingresado es una cadena vacia recarga la pagina

        location.reload();

    } else if (textoIngresado.match(/[A-Z]/)  || textoIngresado.match("á") || textoIngresado.match("é") || textoIngresado.match("í") || textoIngresado.match("ó") || textoIngresado.match("ú") || textoIngresado.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) { // si el texto ingresado contiene alguna letra mayuscula o un acento o un caracter especial, envia un mensaje de advertencia

        document.getElementById("panelsalidaerror").style.visibility = "visible";

    } else {

        var textoDesencriptado = textoIngresado.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u"); // reemplaza dentro del texto ingresado cada expresion indicada por la vocal correspondiente
        
        document.getElementById("panelsintexto").style.visibility = "hidden";
        document.getElementById("panelsalidaerror").style.visibility = "hidden";
        document.getElementById("panelsalidaok").style.visibility = "visible"; // visibiliza el espacio del texto de salida
        document.getElementById("texto-salida").innerHTML += textoDesencriptado; // muestra en pantalla el texto encriptado 
    }
}

function copiar () {
    var textoCopiado = document.getElementById("texto-salida").textContent;

    navigator.clipboard.writeText(textoCopiado)
      .then(() => {
        console.log('Texto copiado al portapapeles')
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
      })
}