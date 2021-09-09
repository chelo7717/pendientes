const form = document.querySelector("tareas-form");
const tarea= document.querySelector("#tarea-input");
const genero = document.querySelector("categoria-select");



form.addEventListener("submit",(event) =>{
    event.preventDefault();
    alert(tarea.value)

});