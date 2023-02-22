const add = document.getElementById('add')
const popup_container = document.getElementById('popup-container')
const close = document.getElementById('close')

add.addEventListener('click', function(){
    popup_container.classList.add('show');
})

close.addEventListener('click', function(){
    popup_container.classList.remove('show')
})


let padre = document.getElementById('listado')
let nuevaTarea = document.getElementById('nuevaTarea')

let addBtn = document.getElementById('close').addEventListener('click', function(){
    let tareaIngresada = nuevaTarea.value 
    nuevaTarea.value = ''
    let info = `<li class="list-group-item">${tareaIngresada}</li>`
    
    padre.innerHTML += info         
})
