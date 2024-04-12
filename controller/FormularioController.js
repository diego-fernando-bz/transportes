
// Función para contar checkboxes marcados y mostrar en un alert
function contarCheckboxes() {
    // Obtener todos los elementos de tipo checkbox en el DOM
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Variable para contar la cantidad de checkboxes marcados
    var cantidadMarcados = 0;

    // Iterar sobre cada checkbox
    checkboxes.forEach(function (checkbox) {
        // Verificar si el checkbox actual está marcado
        if (checkbox.checked) {
            cantidadMarcados++;
        }
    });
    alert("a marcado dos check " + cantidadMarcados)
}
function ocultarCheck() {
    var _formulario = document.getElementsByClassName("formulario")[0];
    _formulario.style.display = "none";

    var _salida = document.getElementsByClassName("salida")[0];
    _salida.style.display = "block";



}
//var check = document.getElementsByClassName('checkImportant');

function mostrarTransitar() {
    document.getElementById("transitar").style.display = "block";
    document.getElementById("notransitar").style.display = "none";
}

function noMostrarTransitar() {
    document.getElementById("notransitar").style.display = "block";
    document.getElementById("transitar").style.display = "none";
}

// funcion salir
var link = document.getElementById('exit');
function salir() {
    link.href = "../Login.html"
}

// Obtener referencia al botón de verificación y agregar un evento clic



var checkboxes = document.querySelectorAll('.noImportant');
var botonContinuar = document.getElementById('enviar');

function alMenosUnoSeleccionado() {
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }
    return false;
}
function actualizarBotonContinuar() {
    botonContinuar.disabled = !alMenosUnoSeleccionado();
}
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        actualizarBotonContinuar();
    });
});

actualizarBotonContinuar();
//-----------------------------------------------------------------------------------
var btn = document.getElementById("enviar").addEventListener("click", function () {
    var checkboxes = document.querySelectorAll(".checkImportant");
    var algunNoSeleccionado = false;

    checkboxes.forEach(function (checkbox) {
        if (!checkbox.checked) {
            algunNoSeleccionado = true;
        }
    });

    //-------------------
    if (algunNoSeleccionado) {
        //alert("Por favor, selecciona todos los checkboxes importantes antes de enviar.");
        // Devuelve true o realiza alguna acción adicional
        var boton = document.getElementById("enviar").addEventListener("click", ocultarCheck);
        noMostrarTransitar()

        return true;
    } else {
        var boton = document.getElementById("enviar").addEventListener("click", ocultarCheck);
        mostrarTransitar()
        // alert("¡Todos los checkboxes importantes están seleccionados!");
        return false;
    }
});
var botonSalir = document.getElementById("exit").addEventListener("click", salir);
var check = document.getElementsByClassName('checkImportant');
