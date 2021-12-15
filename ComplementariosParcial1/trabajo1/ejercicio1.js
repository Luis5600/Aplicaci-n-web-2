// 1.    Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando recursividad.

let contador = 0;
function generarTabla(N) {
    if (contador === 13) {
        contador = 0;
        return;
    } else {
        console.log(`${N} * ${contador} = ${N * contador}`);
        contador++;
        generarTabla(N);
    }
}
generarTabla(3);