const alturaCentimetros = 187;

const alturaMetros = alturaCentimetros / 100;

const pesoKilogramos = 90.5;

const alturaMetrosRedondeada = Math.ceil(alturaMetros);

const pesoKilogramosRedondeado = Math.floor(pesoKilogramos);

const maximoValor = Number.MAX_SAFE_INTEGER;
const esIgual = maximoValor + 1 === maximoValor;

// Imprimir resultados en la consola
console.log("Altura en centímetros:", alturaCentimetros);
console.log("Altura en metros:", alturaMetros);
console.log("Peso en kilogramos:", pesoKilogramos);
console.log(
  "Altura en metros redondeada hacia arriba:",
  alturaMetrosRedondeada
);
console.log(
  "Peso en kilogramos redondeado hacia abajo:",
  pesoKilogramosRedondeado
);
console.log("¿El máximo valor + 1 es igual al máximo valor?", esIgual);
