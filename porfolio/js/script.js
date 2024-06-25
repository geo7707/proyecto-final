let menuVisible = false;
//funcion que muestra el menu//

function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById('nav').classList ='';
        menuVisible = false
    } 

 else {
    document.getElementById('nav').classList ='responsive';
     menuVisible = true;


 }
}
//oculta el menu o vez que selecionamos una opcion
function selecionar(){
    document.getElementById('nav').classList='';
    menuVisible = false;
}

//funcion para cuandp lleguemos  a la animacion a los skills

//

function efectoHabilidades(){
    var skills = document.getElementById('skills');
    var distanciaSkills =window.innerHeight-skills-getComputedStyle.getBoundingClientRect().top;
    if(distanciaSkills =>300){
        let habilidades=document.getElementsByClassName('progreso');
        habilidades[0].classList.add('html');
        habilidades[1].classList.add('css');
        habilidades[2].classList.add('javascript');
        habilidades[3].classList.add('bootstrap');
        habilidades[4].classList.add('capacidad_resultiva');
        habilidades[5].classList.add('trabajo_en_equipo');
        habilidades[6].classList.add('compromiso');
        habilidades[7].classList.add('proactividad');
       
    }

}

window.onscroll = function(){
    efectoHabilidades();
}
