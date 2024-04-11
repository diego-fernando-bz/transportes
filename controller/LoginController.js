import { servis,validateUser,redireccion} from '../models/servicios.js'

const btnIngresar = document.getElementById('btninisiar')
const inputUser = document.getElementById('inputUser').value
const inputPass = document.getElementById('passUser').value

btnIngresar.addEventListener('click', function (e) {
    redireccion()
})
    

    





console.log(servis())
