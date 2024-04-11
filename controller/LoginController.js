import { servis, validateUser, redireccion } from '../models/servicios.js'

const btnIngresar = document.getElementById('btninisiar')

var a = document.getElementById('link');

btnIngresar.addEventListener('click', function (e) {
  //por el momento us y pw son el usuario y la contraseña establecidos
  
  let us = "diego"
  let pw = "123"

  const inputUser = document.getElementById('inputUser').value.trim();
  const inputPass = document.getElementById('passUser').value.trim();

  if (us == inputUser && pw == inputPass) {
    a.href = "../Formulario.html"
  } else {
    alert("contraseña es incorrecta")
  }

})








console.log(servis())
