import { servis,validateUser,redireccion} from '../models/servicios.js'

const btnIngresar = document.getElementById('btninisiar')
const inputUser = document.getElementById('inputUser').value
const inputPass = document.getElementById('passUser').value

btnIngresar.addEventListener('click', function (e) {
    
validateUser(inputUser,inputPass)
//window.location.href='../views/Formulario.html'

    



})
    

    





console.log(servis())