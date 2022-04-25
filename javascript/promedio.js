let nombreAlumno = ''
const btnTotal = document.getElementById('btnTotal')
const miFormulario = document.getElementById('miFormulario')
const btnBorrar = document.getElementById('btnBorrar')
let resultadoNota
let baseDatos = []
let dato 
const divPromedio = document.getElementById("promedio")

//Funcion para sacar el promedio
btnTotal.onclick = function realizarPromedio(){
    const aprobado = 7
    nombreAlumno = document.getElementById('nom').value
    let nota1 = parseInt(document.getElementById('num1').value)
    let nota2 = parseInt(document.getElementById('num2').value)
    let nota3 = parseInt(document.getElementById('num3').value)
    resultadoNota = Math.round((nota1 + nota2 + nota3) / 3)

    if(resultadoNota >= aprobado){
        console.log("Nota final de " + nombreAlumno + " es " + resultadoNota + " esta aprobado" )
        alert (nombreAlumno + " tu nota es " + resultadoNota + ", estas aprobado!")
    }else (resultadoNota < aprobado)
        console.log("Nota final de " + nombreAlumno + " es " + resultadoNota + " esta desaprobado" )
        alert (nombreAlumno + " tu nota es " + resultadoNota + ", estas desaprobado")

do{
    baseDatos.push("Nombre: " + nombreAlumno + ", Promedio: " + resultadoNota )
    console.log(baseDatos)
    dato = prompt("Quieres sacar otros promedios? (S/N)")

    if(dato == "S".toLowerCase()) {
    break
    }else(dato == "N".toLowerCase())
    break

}while(true)
}
//Evento para que no se recargue la página
document.getElementById("btnTotal").addEventListener("click", function(e){
    e.preventDefault()
})
//Evento para borrar lo escrito
miFormulario.btnBorrar.addEventListener('click', function (e) { 
    if (!confirm("Deseas limpiar lo escrito?")
    ) e.preventDefault()
    else console.log('Borrado')
})

//DOM para mostrar los promedios que se van sacando 
for(const promedio of baseDatos){
    const resultado = document.createElement("li")
    resultado.innerHTML = promedio
    divPromedio.appendChild(resultado)
}




/*Evento para usar el input nombre en calculadora.html
document.addEventListener('DOMContentLoaded', () =>{
    mostrarNombre()
})
function mostrarNombre() {
    nombreAlumno.onkeydown = nombreEscrito.value
}
function nombreEscrito(){
    console.log('Escribiendo...')
}

//Evento para asignar input número 1 en calculadora.html
document.addEventListener('DOMContentLoaded', () => {
    mostrarNumero()
});
function mostrarNumero() {
    nota1.onkeydown = numeroEscrito
} 
function numeroEscrito(){
    console.log('Escribiendo numero 1...')
}

//Evento para asignar input número 2 en calculadora.html
document.addEventListener('DOMContentLoaded', () => {
    mostrarNumero2()
});
function mostrarNumero2() {
    nota2.onkeydown = numeroEscrito2
} 
function numeroEscrito2(){
    console.log('Escribiendo numero 2...')
}

//Evento para asignar input número 3 en calculadora.html
document.addEventListener('DOMContentLoaded', () => {
    mostrarNumero3()
});
function mostrarNumero3() {
    nota3.onkeydown = numeroEscrito3
} 
function numeroEscrito3(){
    console.log('Escribiendo numero 3...')
}

//Evento para borrar lo escrito
miFormulario.btnBorrar.addEventListener('click', function (e) { 
    if (!confirm("Deseas limpiar lo escrito?")
    ) e.preventDefault()
    else console.log('Borrado')
})

//Funcion para sacar el promedio
miFormulario.btnTotal.addEventListener('click', function devolucionNota(){
    resultadoNota = Math.round((mostrarNumero + mostrarNumero2 + mostrarNumero3) / 3)
})

if(resultadoNota >= aprobado){
    console.log("Nota final de " + nombreAlumno + " es " + resultadoNota + " esta aprobado" )
    alert (nombreAlumno + " tu nota es " + resultadoNota + ", estas aprobado!")

    }else(resultadoNota < aprobado)
    console.log("Nota final de " + nombreAlumno + " es " + resultadoNota + " esta desaprobado" )
    alert (nombreAlumno + " tu nota es " + resultadoNota + ", estas desaprobado")   

//Bucle para sacar otro promedio y almacenar en el array

let baseDatos = []
do{
    baseDatos.push("Nombre: " + nombreAlumno + ", Promedio: " + resultadoNota )
    console.log(baseDatos)
    dato = prompt("Quieres sacar otros promedios? (S/N)")

    if(dato == "S".toLowerCase()) {
        nombreAlumno = prompt("Escribe tu nombre completo")
        
        devolucionNota()

        continue
    }else(dato == "N".toLowerCase())
    
        break

}while(true)

//DOM para mostrar los promedios que se van sacando 
const divPromedio = document.getElementById("promedio")
for(const promedio of baseDatos){
    const resultado = document.createElement("li")
    resultado.innerHTML = promedio
    divPromedio.appendChild(resultado)
}
*/