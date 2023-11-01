/*
Pre entrega 1

    SIMULADOR DE RENDIMIENTO ANUAL DE INVERSIÓN 
    - Cantidad disponible del usuario para invertir
    - El programa arroja rendimiento mensual con tres opciones: seguro, moderado, riesgoso
    - insertar si el usuario quiere continuar
      * si continua se confirma la cantidad
      * si no continua el programa finaliza
    - Cuando el usuario continua se da a elegir alguna de las tres opciones de inversión
    - Una vez que confirme se da la información de su rendimiento total mensual y anual
*/

function simuladorDeRendimiento () {
  alert("Bienvenido al simulador de inversión, para empezar ingresaras la cantidad que deseas invertir al mes y se hará un calculo de los rendimientos que ésta generará con tazas anuales del 8%, 11% y 14%")
  let cantidadDeInversion = parseInt(prompt("Ingrese la cantidad a invertir mensualmente, ésta debe ser mayor a $100 (Sólo números)"))
  let anual = 12;
  let inversion;
  let invertir;
  let rendimientoAnual;
  let rendimientoMensual = rendimientoAnual / anual;
  
  alert("Acontinuación aparecerán los rendimientos anuales y mensuales en orden de riesgo 'BAJO (8% anual)', 'MEDIO (11% anual)' y 'ALTO (14% anual)'.")
  for (let i = 0.08; i <= 0.14; i += 0.03) {

    rendimientoAnual = ((cantidadDeInversion * anual) * i)
    rendimientoMensual = rendimientoAnual / anual
    
    alert(`Rendimiento anual: ${rendimientoAnual}`);
    alert(`Rendimiento mensual: ${rendimientoMensual}`);
    
  }
  
  alert("Ya que sabes los rendimientos que generará tu inversión puedes continuar para invertir la cantidad que ingresaste.")
  invertir = prompt("¿Deseas continuar con tu inversión? (Responder 'SI' ó 'NO'").toUpperCase()
  if ((invertir === "SI".toUpperCase())) {
    inversion =prompt("ingresa el modo de inversión que desees: SEGURO, MODERADO ȯ RIESGOSO:").toUpperCase()
  }  else {
    alert("Gracias por tu tiempo, vuelve pronto")
  }

  if (inversion === "SEGURO") {
    alert(`Tu rendimiento anual será:  ${cantidadDeInversion * anual * 0.08}\nTu rendimiento mensual será: ${cantidadDeInversion * 0.08}`)
  } else if (inversion === "MODERADO") {
    alert(`Tu rendimiento anual será:  ${cantidadDeInversion * anual * 0.11}\nTu rendimiento mensual será: ${cantidadDeInversion * 0.11}`)
  } else if (inversion === "RIESGOSO") {
    alert(`tu rendimiento anual será:  ${cantidadDeInversion * anual * 0.14}\nTu rendimiento mensual será: ${cantidadDeInversion * 0.14}`)
  } else {
    alert("Recargue la página e intente de nuevo")
  }
}
simuladorDeRendimiento();