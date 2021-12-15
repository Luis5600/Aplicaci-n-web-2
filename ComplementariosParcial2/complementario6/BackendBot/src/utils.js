function validarCedula(cedula) {
  let suma = 0;
  if (cedula.length < 10) {
    return false;
  }
  for (let x = 0; x < 9; x++) {
    if (x % 2 == 0) {
      let valor = 2 * parseInt(cedula[x]);
      if (valor >= 10) {
        valor -= 9;
      }
      suma += valor;
    } else {
      valor = 1 * parseInt(cedula[x]);
      if (valor >= 10) {
        valor -= 9;
      }
      suma += valor;
    }
  }
  ultimo = (Math.trunc(suma / 10) + 1) * 10 - suma;
  if (ultimo == parseInt(cedula[9])) {
    return true;
  } else {
    return false;
  }
}
module.exports = { validarCedula };
