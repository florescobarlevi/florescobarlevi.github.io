const add = document.getElementById('add')
const popup_container = document.getElementById('popup-container')
const close = document.getElementById('close')
const cancel = document.getElementById('cancel')

add.addEventListener('click', function(){
    popup_container.classList.add('show');
})

close.addEventListener('click', function(){
    popup_container.classList.remove('show')
})
/*BOTON CANCELAR */
cancel.addEventListener('click', function(){
    let tareaIngresada = nuevaTarea.value 
    nuevaTarea.value = ''
    let descripcionIngresada = descripcion.value
    descripcion.value = ''
    let info = `<ol class="list-group list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">${tareaIngresada}</div>
                            ${descripcionIngresada}
                        </div>
                    </li>
                </ol>`     
    popup_container.classList.remove('show')
})

/*BOTON AGREGAR*/ 
let padre = document.getElementById('listado')
let nuevaTarea = document.getElementById('nuevaTarea')
let descripcion = document.getElementById('descripcion')

let addBtn = document.getElementById('close').addEventListener('click', function(){
    let tareaIngresada = nuevaTarea.value 
    nuevaTarea.value = ''
    let descripcionIngresada = descripcion.value
    descripcion.value = ''
    let info = `<ol class="list-group list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">${tareaIngresada}</div>
                            ${descripcionIngresada}
                        </div>
                    </li>
                </ol>`    
    padre.innerHTML += info       
})
