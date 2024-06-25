// ((1)) ====== Funcionalidad botones seccion preguntas --> contacto.html =====
const btnPregunta = document.querySelectorAll('.btn-pregunta');
const mostrarRespuesta = document.querySelectorAll('.ocultar-respuesta');

btnPregunta.forEach(function(elemento,indice){
    elemento.addEventListener('click', function(){
        mostrarRespuesta[indice].classList.toggle('mostrar_respuesta')
    })
})


//((3)) ====== Funcionalidad boton menu responsive --> todos los html =====
const btnmenu = document.querySelectorAll('.btn-menuHeader');
const menu = document.querySelectorAll('.menu-header');

btnmenu.forEach(function(elemento,indice){
    elemento.addEventListener('click', function(){
        menu[indice].classList.toggle('menu-header-show');
    })
})


// ((4)) ====== Funcionalidad formulario inscripcion torneos --> primer_torneo.html a cuarto_torneo.html =====
const btnInscripcion = document.getElementById('btnIns');
console.log(btnInscripcion)

// =====funcion de envio=====
btnInscripcion.addEventListener('click', function(e) {
    e.preventDefault();
    const nombreInscripcion = document.getElementById('nameIns').value;
    const apellidosInscripcion = document.getElementById('apellidosIns').value;
    const mailInscripcion = document.getElementById('emailIns').value;
    const mensajeInscripcion = document.getElementById('textIns').value;
    window.location.href=`mailto:geo77077@gmail.com.to?subject=Inscripcion-Torneo&body=Nombre_Participante-->${nombreInscripcion}%0AApellidos_Participante-->${apellidosInscripcion}%0ACorreo_electronico-->${mailInscripcion}%0APruebas_Torneo-->${mensajeInscripcion}`;
});


// ((5)) ====== Funcionalidad formulario contacto --> contacto.html =====
// const btn = document.getElementById('btnContacto');
// console.log(btn)
btnInscripcion.addEventListener('click', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('textArea').value;
    window.location.href=`mailto:geo77077@gmail.com.to?subject=Pagina-Pozuelo&body=Nombre-->${nombre}%0ACorreo-->${email}%0AMensaje-->${mensaje}`;
});



// / ((2)) ====== Funcionalidad Slider --> index.html=====
let slider = document.querySelector('.slider');
const btnDer = document.querySelector('.arrow-right')
const btnIzq = document.querySelector('.arrow-left');
let imagenes = document.querySelectorAll('.img-slider').length;
let textSlider = document.querySelectorAll('.text-slider').length;
let sliderTexto = document.querySelector('.slider-texto');
let contador = 0;
console.log(btnDer)
console.log(btnIzq)
btnDer.addEventListener('click', moverDerecha);
function moverDerecha(){
    contador++;
    if(contador > imagenes - 1){
        contador = 0;
    }
    slider.style.transition = "all 1s ease";
    slider.style.marginLeft = `-${contador * 100}%`;
    sliderTexto.style.transition = "all 1s ease";
    sliderTexto.style.marginLeft = `-${contador * 100}%`;
}

btnIzq.addEventListener('click', moverIzquierda);
function moverIzquierda(){
    contador--;
    if(contador = 0){
        contador = imagenes - 1;
    }
    slider.style.transition = "all 1s ease";
    slider.style.marginLeft = `-${contador * 100}%`;
    sliderTexto.style.transition = "all 1s ease";
    sliderTexto.style.marginLeft = `-${contador * 100}%`;
}
