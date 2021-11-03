
/* Con la consulta del id de un prestamo, mostrar el usuario_accion que lo haya realizado
 y también se muestre el nombre del libro prestado.
 */
const prestamos = [
    {
        id: 1,
        id_usuario_accion: 2,
        id_libro: 1
    },
    {
        id: 2,
        id_usuario_accion: 3,
        id_libro: 3
    },
    {
        id: 3,
        id_usuario_accion: 1,
        id_libro: 1
    }, 
]

const usuarios_accion = [
    {
        id: 1,
        nombre: 'Alberto',
        apellido: 'Bolaños'    
    },
    {
        id: 2,
        nombre: 'Carlos',
        apellido: 'Gomez'    
    },
    {
        id: 3,
        nombre: 'Gabi',
        apellido: 'Braun'   
    },
]

const libros = [
    {
        id: 1,
        nombre: 'El Alquimista'
    },
    {
        id: 2,
        nombre: 'El Código da Vinci '
    },
    {
        id: 3,
        nombre: 'Piense y hágase rico'
    }, 
]

async function buscarPrestamoPorId(id)
{
    const prestamo = prestamos.find((prestamo)=> prestamo.id===id );
    if (!prestamo)
    {
        const error =  new Error();
        error.message="No existe el prestamo";
        throw error;
    }
    return prestamo;
}

async function buscarUsuarioaccionPorId(id)
{
    const usuario_accion = usuarios_accion.find((usuario_accion)=> usuario_accion.id===id );
    if (!usuario_accion)
    {
        const error =  new Error();
        error.message="No existe el usuario accion";
        throw error;
    }
    return usuario_accion;
}

function buscarLibroPorId(id)
{
    return new Promise((resolve, reject)=>{
        const libro = libros.find((libro)=> libro.id===id);
        if (!libro)
        {
            const error= new Error();
            error.message="El libro no encontrado";
            reject(error);
        }
        resolve(libro);
    })
}

async function main (){
    try {
        const prestamo = await buscarPrestamoPorId(1);
        const usuario_accion = await buscarUsuarioaccionPorId(prestamo.id_usuario_accion);
        buscarLibroPorId(prestamo.id_libro).then((libro)=>{
            console.log(`El prestamo: ${prestamo.id}`);
            console.log(`Con el libro: ${libro.nombre}`);
            console.log(`Fue realizado por el usuario: ${usuario_accion.nombre} ${usuario_accion.apellido}`);
        }).catch(error => console.log(error.message))
    } catch (error) {
        console.log(error.message);
    }
} 

main();