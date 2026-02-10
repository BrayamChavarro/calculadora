// Seleccionamos la pantalla
const pantalla = document.getElementById('pantalla');

// Función para agregar números u operadores a la pantalla
function agregar(valor) {
    pantalla.value += valor;
}

// Función para limpiar toda la pantalla (C)
function limpiar() {
    pantalla.value = '';
}

// Función para borrar solo el último carácter (←)
function borrarUno() {
    pantalla.value = pantalla.value.slice(0, -1);
}

// Función para realizar el cálculo
function calcular() {
    try {
        // eval() toma el texto "2+2" y lo convierte en matemática real
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        // Si el usuario escribe algo inválido (ej: "2++*"), mostramos Error
        pantalla.value = 'Error';
        setTimeout(() => limpiar(), 1500); // Borra el error después de 1.5 seg
    }
}