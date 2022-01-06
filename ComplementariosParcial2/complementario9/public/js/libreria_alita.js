//Definición de variables

const url = 'http://localhost:5050/api/v2/alitas/';
const contenedor = document.querySelector('tbody');
let resultados = '';

const formArticulo = document.querySelector('form');
const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const cantidad = document.getElementById('cantidad');

var opcion = '';

btnCrear.addEventListener('click', () => {
    nombre.value = '';
    precio.value = '';
    cantidad.value = '';
    opcion = 'crear'
});

//funcion para mostrar los resultados
const mostrar = (articulos) => {
    articulos.forEach(articulo => {
        resultados += `<tr>
                            <td>${articulo._id}</td>
                            <td class="text-center">${articulo.nombre}</td>
                            <td class="text-center">${articulo.precio}</td>
                            <td class="text-center">${articulo.cantidad}</td>
                            <td class="text-center">
                                <a class="btnEditar btn btn-primary">Editar</a>
                                <a class="btnBorrar btn btn-danger">Borrar</a></td>
                       </tr>
                    `
    })
    contenedor.innerHTML = resultados;
}

//Procedimiento Mostrar
fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error));


const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    });
}

//Procedimiento Borrar
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    fetch(url + id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(() => location.reload())
});

//Procedimiento Editar
let idForm = 0
console.log(idForm);
on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    idForm = fila.children[0].innerHTML;
    const nombreForm = fila.children[1].innerHTML;
    const precioForm = fila.children[2].innerHTML;
    const cantidadForm = fila.children[3].innerHTML;
    nombre.value = nombreForm;
    precio.value = precioForm;
    cantidad.value = cantidadForm;
    opcion = 'editar'
});

//Procedimiento para Crear y Editar
formArticulo.addEventListener('submit', (e) => {
    e.preventDefault()
    if(opcion=='crear'){
        
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nombre:nombre.value,
                precio:precio.value,
                cantidad:cantidad.value
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevoArticulo = [];
            nuevoArticulo.push(data);
            mostrar(nuevoArticulo);
        });
    }

    if (opcion == 'editar') {
    
        fetch(url + idForm, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre.value,
                precio: precio.value,
                cantidad: cantidad.value
            })
        })
        .then(response => response.json())
        .then(response => location.reload())
    }
});