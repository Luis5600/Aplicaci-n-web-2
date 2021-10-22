// 4.    Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while
const comidasFavoritas = [
    'Encebollado',
    'Ceviche',
    'Apanado'
];

let i = 0;

do {
    console.log(comidasFavoritas[i])
    i++;
} while (comidasFavoritas.length != i);

