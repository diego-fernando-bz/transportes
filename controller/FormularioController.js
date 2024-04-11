
// Función para contar checkboxes marcados y mostrar en un alert
function contarCheckboxes() {
    // Obtener todos los elementos de tipo checkbox en el DOM
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Variable para contar la cantidad de checkboxes marcados
    var cantidadMarcados = 0;
    
    // Iterar sobre cada checkbox
    checkboxes.forEach(function(checkbox) {
        // Verificar si el checkbox actual está marcado
        if (checkbox.checked) {
            cantidadMarcados++;
        }
        
    });
    alert(  "a marcado dos check "+cantidadMarcados)
    // Mostrar la cantidad de checkboxes marcados en un alert
   // window.location.href = '../Login.html'
    
}

// Obtener referencia al botón de verificación y agregar un evento clic
document.getElementById("verificarCheck").addEventListener("click", contarCheckboxes);
