const guardoDatos = ()=> {
    debugger
    localStorage.setItem("Alimento", Alimento.value)
    localStorage.setItem("Cantidad", Cantidad.value)
    localStorage.setItem("Precio", Precio.value)
}

const recuperoDatos = ()=> {
    //debugger
    Alimento.value = localStorage.setItem("Alimento")
    Cantidad.value = localStorage.setItem("Cantidad")
    Precio.value = localStorage.setItem("Precio")
}

const limpiarLS = ()=> {
    const resp = confirm("¿Desea borrar todos los datos?")
    if (resp) {
        localStorage.clear()
        console.log("Se han borrado todos los datos.")
    }
}

recuperoDatos()