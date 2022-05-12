let nombreAlumno = ''
const btnTotal = document.getElementById('btnTotal')
const miFormulario = document.getElementById('miFormulario')
const btnBorrar = document.getElementById('btnBorrar')
let resultadoNota
let baseDatos = []
let dato 
const divPromedio = document.getElementById("promedio")
let inputs = document.querySelectorAll('#miFormulario input')
const expresion = {
    numeros: /^[1-9][1-9]{1,9}$/
}
const enviar = document.getElementById('enviar')

//Validar inputs numeros 
const validarFormulario = (e) => {
            if(expresion.numeros.test(e.target.value)){
                document.getElementById('grupo__numero').classList.add('formulario__grupo-incorrecto')
                document.querySelector('#grupo__numero .formulario__input-error').classList.add('formulario__input-error-activo')
            } else { 
                document.getElementById('grupo__numero').classList.remove('formulario__grupo-incorrecto')
                document.querySelector('#grupo__numero .formulario__input-error').classList.remove('formulario__input-error-activo')
            }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})


//Funcion para sacar el promedio
btnTotal.onclick = function realizarPromedio(){
    const aprobado = 7
    const mayor = 11
    nombreAlumno = document.getElementById('nom').value
    let nota1 = parseInt(document.getElementById('num1').value)
    let nota2 = parseInt(document.getElementById('num2').value)
    let nota3 = parseInt(document.getElementById('num3').value)
    resultadoNota = Math.round((nota1 + nota2 + nota3) / 3)
    
    if(resultadoNota >= mayor){ 
        swal({
            title: "Ingrese nuevamente una nota",
            text: "La nota tiene que ser numeros entre el 1 al 10, intentalo nuevamente!",
            icon: "warning",
        })
    } else if(resultadoNota < mayor && resultadoNota >= aprobado){ 
        console.log("Nota final de " + nombreAlumno + " es " + resultadoNota + " esta aprobado" )
        swal({
            title: "Bien hecho!",
            text: nombreAlumno + " tu nota es " + resultadoNota + ", estas aprobado!",
            icon: "success",
        });
        const texto = "Nombre: " + nombreAlumno + ", Promedio: " + resultadoNota
        baseDatos.push(texto)
        const resultado = document.createElement("li")
        resultado.innerHTML = texto
        divPromedio.appendChild(resultado)
        baseDatos.push("Nombre: " + nombreAlumno + ", Promedio: " + resultadoNota )
    } else { 
        console.log("Nota final de " + nombreAlumno + " es " + resultadoNota + " esta desaprobado" )
        swal({
            title: "Sigue Intentando",
            text: nombreAlumno + " tu nota es " + resultadoNota + ", estas desaprobado!",
            icon: "error",
        });
        const texto = "Nombre: " + nombreAlumno + ", Promedio: " + resultadoNota
        baseDatos.push(texto)
        const resultado = document.createElement("li")
        resultado.innerHTML = texto
        divPromedio.appendChild(resultado)
        baseDatos.push("Nombre: " + nombreAlumno + ", Promedio: " + resultadoNota )
    }

    localStorage.setItem("Promedios", JSON.stringify(baseDatos)) 
}
    miFormulario.addEventListener("submit", enviarMail)
    async function enviarMail(event){
        event.preventDefault()
        const form = new FormData(this)
        const response = await fetch(this.action, {
            method:this.method,
            body:form,
            headers:{
                'Accept': 'application/json'
            }
        })
        if(response.ok){
            this.reset()
            swal({
                title: "Enviado",
                text: "Tus promedios fueron enviados con exito",
                icon: "success",
            })
        }
    }

//Evento para que no se recargue la página
document.getElementById("btnTotal").addEventListener("click", function(e){
    e.preventDefault()
})

//Evento para borrar lo escrito
document.getElementById('btnBorrar').addEventListener('click', function (e) { 
    if (!confirm("Deseas limpiar lo escrito?")
    ) e.preventDefault()
    else {
        document.getElementById('grupo__numero').classList.remove('formulario__grupo-incorrecto')
        document.querySelector('#grupo__numero .formulario__input-error').classList.remove('formulario__input-error-activo')
    }
})