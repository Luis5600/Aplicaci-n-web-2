let prueba="5";

const persona = {
    nombre:"Luis",
    apellido:"Rodas",
    esEstudiante: true, 
    prueba:prueba,
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    },
    geolocalizacion:{
        lat:123.34,
        lng:54.22
    }
}

// const estudiante = { ...persona, nombre:"Netsar" };
// //estudiante.nombre = "Netsar"
// console.log(estudiante)
// console.log(persona)

function mostrarDatos({ nombre, geolocalizacion:{lat,lng} })
{
    console.log(nombre)
    console.log(lat)
    console.log(lng)
}
mostrarDatos(persona)