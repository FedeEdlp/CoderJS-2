// const info = [];
// const nombre = document.getElementById('nombreApellido')
// const sala = document.getElementById('salaSeleccionada')
// const horas= document.getElementById('horasSeleccionadas');
// const matricula = 7000;

//Ultima pre entrega


document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector('form'); 
    const nombreApellidoInput = document.getElementById('nombreApellido');
    const salaSeleccionadaInput = document.getElementById('salaSeleccionada');
    const horasSeleccionadasInput = document.getElementById('horasSeleccionadas');
    let salaSeleccionadaValue = "";

    fetch('js/salas.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(sala => {
                const option = document.createElement('option');
                option.value = sala.valor;
                option.textContent = sala.nombre;
                salaSeleccionadaInput.appendChild(option);
            });
        })
        
    salaSeleccionadaInput.addEventListener('change', function(){
        salaSeleccionadaValue = salaSeleccionadaInput.value; 

        if (salaSeleccionadaValue === "8000"){
            formulario.style.backgroundColor = '#D1B5E5';
        } else if (salaSeleccionadaValue === "7500"){
            formulario.style.backgroundColor = "#FFF36E";
        } 
        else if (salaSeleccionadaValue === "6500"){
            formulario.style.backgroundColor = "#A2D3BC";
        }
        else {
            formulario.style.backgroundColor = ""; 
        }
    });

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nombreApellidoValue = nombreApellidoInput.value;
        const horasSeleccionadasValue = horasSeleccionadasInput.value;

        if (!/^[a-zA-Z ]+$/.test(nombreApellidoValue) || nombreApellidoValue.length <= 3) {
            Swal.fire({
                icon: "error",
                title: "Un pequeño error...",
                text: "Por favor introduzca correctamente su Nombre y/o Apellido.",
            });
            return; 
        }

        function cotizador(salaSeleccionada, horasSeleccionadas){
            return salaSeleccionada * horasSeleccionadas;
        }

        const cotizacion = cotizador(parseInt(salaSeleccionadaValue), parseInt(horasSeleccionadasValue));

        const datosUsuario = {
            nombreApellido: nombreApellidoValue,
            salaSeleccionada: salaSeleccionadaValue,
            horasSeleccionadas: horasSeleccionadasValue,
            cotizacion: cotizacion
        };

        localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));

        console.log(datosUsuario);

        function pasarSalaTexto(valorSala) {
            if (valorSala === "8000") {
                return "De 45 días a 1 año, Sala Violeta";
            } else if (valorSala === "7500") {
                return "De 1 a 2 años, Sala Amarilla";
            } else if (valorSala === "6500") {
                return "De 2 a 3 años, Sala Verde";
            } else {
                return "No se selecciono correctamente la sala";
            }
        } 

        const infoIngresadaDiv = document.getElementById('infoIngresada');

        infoIngresadaDiv.innerHTML = `
            <p class="Res1">Nombre y/o Apellido ingresado:</p> <p class="Res2">${datosUsuario.nombreApellido}</p>
            <p class="Res1">La sala seleccioanda fue:</p> <p class="Res2">${pasarSalaTexto(datosUsuario.salaSeleccionada)}</p>
            <p class="Res1">Cantidad de horas seleccionada:</p> <p class="Res2">${datosUsuario.horasSeleccionadas}</p>
            <p class="Res1">Valor de la cuota mensual:</p> <p class="Res2">$${datosUsuario.cotizacion}</p>
            <p class="Res3">Cualquier duda o consulta, puede acercarse al jardín!</p>
        `;
    });
});





//Segunda Pre entrega
// do {
//     nombre = prompt("Bienvenida/o a nuestro cotizador de cuota para el maternal Abracadabra, la magía de los primeros años.\n Para iniciar la consulta le vamos a pedir su nombre por favor ");
// }while(nombre === "" || nombre.length <= 2);

// info.push("Nombre: " + nombre)

// while(true) {
//     sala = prompt("A continuación podrá ver la salas, según la edad por la que quiera consultar, dependiendo la edad de su hija/o \nPor favor escriba solamente el color de la sala por la que quiere consultar:\n\nDe 45 días a 1 año: Sala Violeta\n\nDe 1 a 2 años: Sala Amarilla\n\nDe 2 a 3 años: Sala Verde")

//     if (sala.toLowerCase() === "violeta" || sala.toLowerCase() === "amarilla" || sala.toLowerCase() === "verde"){
//         break;
//     } else{
//         alert("Por favor, seleccione una opción correcta")
//     }
// }
// console.log(sala)
// info.push("Sala seleccionada: " + sala);

// while(true) {
//     horas = parseInt(prompt("Coloque la cantidad de horas que asistira su hijo/a al establecimiento\nEl mínimo de horas permitidas son 3 horas y el máximo 7 horas\n\nPor ejemplo, en caso de asisitir 4 horas, ingrese: 4, en caso de asisitir 6 horas ingrese: 6"))

//     if (horas >= 3 && horas <= 7){
//         break;
//     } else {
//         alert("Por favor, selecciones una opción correcta")
//     }
// };

// console.log(horas);
// info.push("Cantidad de horas: " + horas);


// function cotizador(sala, horas){
//     if (sala.toLowerCase() == "violeta") {
//         return 8000 * horas
//     }

//     else if(sala.toLowerCase() == "amarilla"){
//         return 6500 * horas
//     }

//     else{
//         return 7000 * horas
//     }
// };

// alert("Datos ingresado\n" + info.join("\n") + "\n\nGracias " + nombre + " por su consulta. \n\nSu cuota mensual es de $" + cotizador(sala, horas) + " y el costo de la matrícula anual $" + matricula + ". \n\nEn caso de seguir con interes en conocer las intalaciones, a continuación deje los datos de contacto y a la brevedad nos comunicaremos para coordinar una reunión. En caso contrario aprete la opción 'cancelar. \n\nSaludos Abracadabra");

// let telefono;
// let dia;

// while(true) {
//     telefono = prompt("En caso de querer que nos contactemos, ingrese su numero celular sin 0 ni 15")

//     if (!isNaN(telefono) && telefono.length <= 11 || telefono.length >=9) {
//         break;
//     } else {
//         alert("Por favor, ingrese un número válido")
//     }
// };

// while(true) {
//     dia = prompt("En caso de querer coordinar una visita selecione en que día de la semana cuenta con disponibilidad:\n\n-Lunes.\n\n-Martes.\n\n-Miercoles.\n\n-Jueves.\n\n-Viernes")

//     if (dia.toLowerCase() == "lunes" || dia.toLowerCase() == "martes" || dia.toLowerCase() == "miercoles" || dia.toLowerCase() == "jueves" || dia.toLowerCase() == "viernes" ) {
//         break;
//     } else {
//         alert("Por favor, ingrese un día válido")
//     }
// };

// let consulta = {
//     nombreConsulta : nombre,
//     telefonoConsulta : telefono,
//     diaVisita : dia};

// console.log(consulta);

// alert("Gracias! Nos pondremos en contacto lo antes posible.\nSaludos Abracadabra!")

