let nombreAlumno = ''
const btnTotal = document.getElementById('btnTotal')
const miFormulario = document.getElementById('miFormulario')
const btnBorrar = document.getElementById('btnBorrar')
let resultadoNota
let baseDatos = []
let dato 
const divPromedio = document.getElementById("promedio")
let num4 = document.getElementById('num1')


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
        swal({
            title: "Bien hecho!",
            text: nombreAlumno + " tu nota es " + resultadoNota + ", estas aprobado!",
            icon: "success",
        });
        baseDatos.push("Nombre: " + nombreAlumno + ", Promedio: " + resultadoNota )
    }else {
        console.log("Nota final de " + nombreAlumno + " es " + resultadoNota + " esta desaprobado" )
        //alert (nombreAlumno + " tu nota es " + resultadoNota + ", estas desaprobado")
        swal({
            title: "Sigue Intentando",
            text: nombreAlumno + " tu nota es " + resultadoNota + ", estas desaprobado!",
            icon: "error",
        });
        baseDatos.push("Nombre: " + nombreAlumno + ", Promedio: " + resultadoNota )
        }

for(const promedio of baseDatos){
    const resultado = document.createElement("li")
    resultado.innerHTML = promedio
    divPromedio.appendChild(resultado)

    let total = []
    total.push(baseDatos)
    localStorage.setItem("Promedios", JSON.stringify(total)) }
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


