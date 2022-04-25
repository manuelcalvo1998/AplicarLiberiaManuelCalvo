function calcularH2oPorPeso() {
    //debugger
    peso = parent(prompt("Ingreso su peso exacto"))
    const calculoDeHidratacion = new calculo(peso, agua)
    res = calculoDeHidratacion.calculoH2o()
    console.log(res)
}