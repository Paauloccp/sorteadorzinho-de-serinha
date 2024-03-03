let lista = [

]
function Add() {
    const input = document.getElementById("input")
    const texto = input.value
    lista.push(texto)
    localStorage.setItem("listaserie", JSON.stringify(lista))
    input.value = ""
    // alert(JSON.stringify(lista))
}
document.addEventListener("DOMContentLoaded", function () {
    const listasalva = localStorage.getItem("listaserie")
    if (listasalva !== null) {
        const nando = JSON.parse(listasalva)
        nando.forEach(element => {
            lista.push(element)
        });
        // alert(JSON.stringify(lista))
    }
})
function Random() {
    const miguel = Math.floor(Math.random() * lista.length)
    const selectedTVSHOW = lista[miguel]
    alert(selectedTVSHOW)
}
function Apagao() {
    lista = []
    localStorage.setItem("listaserie", JSON.stringify(lista))
}
