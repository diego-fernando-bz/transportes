export function servis() {
    return "archivo servicios js en linea"
}

export function validateUser(user, password) {
    // le doy una validacion al usuario de momento
    let nombre = "Diego"
    let contraseña = "12345"

    if (user == nombre && password == contraseña) {
        // si el usuario o contraseña son correctos
        return  window.location.href='../views/Formulario.html'


    } else {
        // si el usuario o contraseña no son correctos
        //return alert("no contraseña")
        window.location.href='../views/Formulario.html'
    }

}

export function redireccion(){
    if(validate == true){
        return window.location.href = '../views/Formulario.html'
    }
}

