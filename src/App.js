const tarea= document.querySelector("#tarea-input");
const form = document.querySelector("tareas-form");
const edad= document.querySelector("#edad-input");;
const genero = document.querySelector("genero-select");
const p = document.querySelector("#respuesta");
const idioma= document.querySelector("#idioma-select");


form.addEventListener("submit",(event) =>{
    event.preventDefault();
    alert(tarea.value)

});