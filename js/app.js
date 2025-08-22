// Función para verificar edad solo en página de bebidas
function verificarEdad() {
    // Verificar si estamos en la página de bebidas
    if (window.location.pathname.includes('bebidas.html')) {
        const añoNacimiento = prompt("Por favor, ingresa tu año de nacimiento:");
        
        if (añoNacimiento && !isNaN(añoNacimiento)) {
        
            const añoActual = new Date().getFullYear();
            const edad = añoActual - parseInt(añoNacimiento);
            
            // Verificar si es mayor de edad
            if (edad >= 18) {
                alert("Puedes escoger también las bebidas con alcohol 🍻");
            } else {
                alert("No puedes escoger bebidas con alcohol 🚫");
            }
        }
    }
}

// Ejecutar cuando la página cargue
document.addEventListener('DOMContentLoaded', verificarEdad);