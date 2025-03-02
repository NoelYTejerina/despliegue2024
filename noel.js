// DOM
let botonColor = document.getElementById("botonColor");
let puntuacion = document.getElementById("puntuacion");

// Variable global para acumular puntos
let puntos = 0;

// Función para generar un color aleatorio
function colorAleatorio() {
    let colores = ["red", "blue", "green", "pink", "white", "black", "orange", "yellow"];

    
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    
    document.body.style.backgroundColor = colorAleatorio;

    
    let colorUsuario = document.getElementById("colorUsuario").value.trim().toLowerCase();
    console.log(colorAleatorio);
    
    if (colorUsuario === colorAleatorio) {
        puntos++;
        puntuacion.textContent = puntos;
        alert("Acierto!!");
    }
}


botonColor.addEventListener("click", colorAleatorio);
