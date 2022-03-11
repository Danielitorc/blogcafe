// //Declaro que etiqueta se va a crear
// const nuevoEnlace = document.createElement('A');

// //le agrego un enlace de a donde lo va a dirigir
// nuevoEnlace.href= 'http://youtube.com';

// //Le agrego el texto que debe contener el nuevo enlace creado
// nuevoEnlace.textContent = 'YouTube';

// //Agrego una clase existente con estilos ya definidos y que le esta dando estilos a los enlaces que estan de origen
// nuevoEnlace.classList.add('navegacion__enlace');

// //Agrego el elmento creado al cuerpo HTML
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);



//Leer datos desde el teclado
//Creo un objeto de tipo datos para almacenar lo que se ingresara en cada campo
const datos = {
    nombre: '',//Los valores iran vacios pues se almacenaran cuando el usuario escriba algo 
    email: '',
    mensaje: ''
}

//Hago referencia a los id declarados en el HTML
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


//Agrego el evento para que escuche a traves de los inputs
//Y le digo que funcion sera la que tenga que procesar
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


//Creo una funcion que extraera los datos escritos en los inputs del HTML
function leerTexto(e){
    datos[e.target.id] = e.target.value;
}

/* Evento para el boton submit */
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //aplico destructuting para acceder a los valores individualmente
    const {nombre, email, mensaje } = datos;

    if(nombre == '' || email == '' || mensaje == ''){
        mostrarError('Todos los campos son obligatorios');
    }else{
        mostrarCorrecto('Sus datos fueron enviados correctamente');
    }
});

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    setTimeout(() =>{
        error.remove();
    },4000)
}

function mostrarCorrecto(mensaje){
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');

    formulario.appendChild(correcto);

    setTimeout(() =>{
        correcto.remove();
    },4000)
}