// 5.    Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en mayúscula.
const comidasFavoritas = [
    'Encebollado',
    'Ceviche',
    'Apanado'
];

const comidasMayuscula = (comida) => {
    return comida.toUpperCase()
}
console.log(comidasMayuscula(comidasFavoritas[1]));