function calcularDiasEntreFechas(fecha1, fecha2) {

  // Conversión de las fechas a milisegundos
  const fecha1ms = fecha1.getTime();
  const fecha2ms = fecha2.getTime();

  // Calcular diferencia entre fechas en milisegundos
  const diferenciaMs = fecha2ms - fecha1ms;

  // Convertir diferencia de milisegundos a días
  const dias = Math.round(diferenciaMs / (1000 * 60 * 60 * 24));

  return dias;
}

//Comprobación
const fecha1 = new Date('2023-02-10');
const fecha2 = new Date('2023-03-09');
const diasEntreFechas = calcularDiasEntreFechas(fecha1, fecha2);
console.log(diasEntreFechas); 
