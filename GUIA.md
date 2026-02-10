# Guía Completa del Código de la Calculadora Nocturna 🌙

## Estructura del Proyecto

Este proyecto es una **calculadora simple** con interfaz web que consta de tres archivos principales:

---

## 📄 index.html - Estructura HTML Principal

```html
<!DOCTYPE html>
<html lang="es">
```
- **`<!DOCTYPE html>`**: Declara que es un documento HTML5
- **`lang="es"`**: Idioma del contenido en español

### Head (Cabecera)
```html
<head>
    <meta charset="UTF-8">
    <title>Calculadora Simple</title>
    <link rel="stylesheet" href="style.css">
</head>
```
- **`charset="UTF-8"`**: Soporte para caracteres especiales (ñ, acentos, etc.)
- **`<link rel="stylesheet">`**: Vincula el archivo CSS para los estilos
- **`<title>`**: Título que aparece en la pestaña del navegador

### Body (Cuerpo)
```html
<div class="calculadora">
    <input type="text" id="pantalla" readonly>
```
- **`class="calculadora"`**: Contenedor principal con clase para estilos
- **`input readonly`**: Campo de texto que no se puede editar manualmente (solo con botones)
- **`id="pantalla"`**: Identificador único para JavaScript

### Botones
```html
<button onclick="limpiar()">C</button>
<button onclick="agregar('7')">7</button>
<button onclick="calcular()" class="igual">=</button>
```
- **`onclick`**: Ejecuta una función JavaScript al hacer clic
- **`agregar('valor')`**: Añade números u operadores a la pantalla
- **`limpiar()`**: Borra todo
- **`borrarUno()`**: Borra solo el último carácter
- **`calcular()`**: Realiza la operación matemática

---

## 📜 script.js - Lógica JavaScript

### 1. Selección del elemento
```javascript
const pantalla = document.getElementById('pantalla');
```
- **`document.getElementById()`**: Busca el elemento HTML con `id="pantalla"`
- **`const`**: Variable constante que no cambiará de referencia

### 2. Función agregar()
```javascript
function agregar(valor) {
    pantalla.value += valor;
}
```
- **`+=`**: Operador de concatenación, añade el nuevo valor al final
- Ejemplo: Si pantalla muestra "2" y presionas "5", mostrará "25"

### 3. Función limpiar()
```javascript
function limpiar() {
    pantalla.value = '';
}
```
- Asigna un string vacío `''` para borrar todo

### 4. Función borrarUno()
```javascript
function borrarUno() {
    pantalla.value = pantalla.value.slice(0, -1);
}
```
- **`slice(0, -1)`**: Extrae desde posición 0 hasta el penúltimo carácter
- Ejemplo: "123" → "12"

### 5. Función calcular()
```javascript
function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'Error';
        setTimeout(() => limpiar(), 1500);
    }
}
```
- **`try...catch`**: Maneja errores sin romper el programa
- **`eval()`**: Evalúa una expresión matemática en string
  - Ejemplo: `eval("2+3*4")` devuelve `14`
  - ⚠️ **Nota de seguridad**: `eval()` puede ser peligroso en producción con datos del usuario
- **`setTimeout()`**: Ejecuta una función después de un tiempo (1500 ms = 1.5 segundos)
- **`() =>`**: Función flecha (sintaxis moderna de JavaScript)

---

## 🎨 style.css - Estilos Visuales

### 1. Estilos del Body
```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}
```
- **`display: flex`**: Activa Flexbox para alinear elementos
- **`justify-content: center`**: Centra horizontalmente
- **`align-items: center`**: Centra verticalmente
- **`100vh`**: 100% de la altura de la ventana (viewport height)
- **`#f4f4f4`**: Color gris claro de fondo

### 2. Contenedor de la calculadora
```css
.calculadora {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
}
```
- **`#333`**: Gris oscuro (casi negro)
- **`padding`**: Espacio interno
- **`border-radius`**: Bordes redondeados
- **`box-shadow`**: Sombra suave (offset-x, offset-y, difuminado, color con transparencia)

### 3. Pantalla de visualización
```css
#pantalla {
    width: 100%;
    height: 50px;
    font-size: 24px;
    text-align: right;
    box-sizing: border-box;
}
```
- **`text-align: right`**: Texto alineado a la derecha (como calculadoras reales)
- **`box-sizing: border-box`**: Incluye padding y border en el ancho total

### 4. Grid de botones
```css
.teclas {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}
```
- **`display: grid`**: Sistema de cuadrícula CSS
- **`repeat(4, 1fr)`**: 4 columnas de igual tamaño (1 fracción cada una)
- **`gap: 10px`**: Espacio entre botones

### 5. Estilos de botones
```css
button {
    padding: 20px;
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #ccc;
}
```
- **`cursor: pointer`**: Cambia el cursor a manita al pasar sobre el botón
- **`transition`**: Animación suave del cambio de color (0.2 segundos)
- **`:hover`**: Pseudoclase que se activa al pasar el mouse

### 6. Botones especiales
```css
button.igual {
    background-color: #ff9500;
    grid-row: span 2;
}

button.cero {
    grid-column: span 2;
}
```
- **`grid-row: span 2`**: El botón igual ocupa 2 filas de altura
- **`grid-column: span 2`**: El botón 0 ocupa 2 columnas de ancho
- **`#ff9500`**: Color naranja para el botón igual

---

## 🔄 Flujo de Funcionamiento

1. **Usuario carga la página** → HTML crea la estructura
2. **CSS aplica estilos** → Se ve bonita y centrada
3. **JavaScript se carga** → Listo para interactuar
4. **Usuario presiona "7"** → `agregar('7')` → Pantalla: "7"
5. **Usuario presiona "+"** → `agregar('+')` → Pantalla: "7+"
6. **Usuario presiona "3"** → `agregar('3')` → Pantalla: "7+3"
7. **Usuario presiona "="** → `calcular()` → `eval("7+3")` → Pantalla: "10"

---

## 📁 Archivos del Proyecto

| Archivo | Propósito |
|---------|-----------|
| `index.html` | Estructura HTML principal de la calculadora |
| `indexx.html` | Archivo vacío (posible backup o archivo de prueba) |
| `script.js` | Lógica JavaScript para las operaciones |
| `style.css` | Estilos visuales de la calculadora |

---

## 💡 Mejoras Sugeridas (Opcional)

1. **Soporte de teclado**: Agregar eventos para teclas del teclado físico
2. **Historial**: Guardar y mostrar operaciones anteriores
3. **Temas**: Botón para cambiar entre modo claro/oscuro
4. **Funciones avanzadas**: Raíz cuadrada, porcentaje, paréntesis
5. **Seguridad**: Reemplazar `eval()` por un parser matemático más seguro
6. **Responsive**: Mejorar visualización en dispositivos móviles
7. **Validación**: Prevenir operadores consecutivos (ej: "++")

---

## 🚀 Cómo usar la calculadora

1. Abre el archivo `index.html` en tu navegador
2. Haz clic en los botones numéricos para ingresar números
3. Usa los botones de operadores (+, -, *, /) para operaciones
4. Presiona `=` para ver el resultado
5. Usa `C` para limpiar todo
6. Usa `←` para borrar el último carácter

---

## 📚 Conceptos Web Importantes

### HTML (HyperText Markup Language)
- Lenguaje de marcado que define la **estructura** del contenido
- Usa etiquetas como `<div>`, `<button>`, `<input>` para organizar elementos

### CSS (Cascading Style Sheets)
- Define la **apariencia visual** de los elementos HTML
- Controla colores, tamaños, posiciones, animaciones, etc.

### JavaScript
- Lenguaje de programación que añade **interactividad**
- Permite responder a eventos del usuario (clics, teclas, etc.)
- Manipula el DOM (Document Object Model) para cambiar contenido dinámicamente

---

**Fecha de creación**: 9 de febrero de 2026
**Proyecto**: Calculadora Nocturna 🌙
