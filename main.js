let pin = "1234";
let ingresar = false;

function ingreso() {
  console.log(ingresar);

  // alert("Bienvenido a la calculadora de cuotas para acceder a tu lote");
  for (let i = 0; i <= 2; i++) {
    let intento = prompt("ingrese numero de pin para acceder a al sistema");
    if (intento == pin) {
      alert("ingresaste correctamente, Bienvenido a sistema para calcular cuota");
      ingresar = "true";

      break;
    } else {
      alert("Lo siento, este pin no es correcto. Usaste tu intento N°" + (i + 1))
    }
  }
}

ingreso();
console.log(ingresar);


if (ingresar) {

  //let valorTotalTerreno = 1000;
  let valorTotalTerreno = 0;
  let saldo = 0;
  let cantidadDeCuotas = 1;
  let entregaEnEfectivo = 0;
  let tipologiaElegida = "";
  let eleccion = [];

  const tipoDeLotesDisponibles = [
    { tipologia: "a", tamano: 250, frente: 10, fondo: 25, ubicacion: "Esquina de manzana" },
    { tipologia: "b", tamano: 360, frente: 12, fondo: 30, ubicacion: "Dentro de manzana" },
    { tipologia: "c", tamano: 450, frente: 15, fondo: 30, ubicacion: "Dentro de manzana" },
    { tipologia: "d", tamano: 560, frente: 16, fondo: 35, ubicacion: "Dentro de manzana" }];

  let elegirOpcion = prompt("Elegí tu opcion\n 1-Mostrar todos los tipos de lotes disponibles\n 2-Elegir tipología(a-b-c-d)\n 3-Valor total del terreno elegido\n 4-De cuanto es la entrega en efectivo que desea realizar? \n 5-¿Cual es el saldo para financiar?\n 6-¿En cuantas cuotas desea financiar el saldo?\n 7-Cómo quedaría el plan de financiación elegido\n Presione x para salir ");
  while (elegirOpcion != "x") {
    switch (elegirOpcion) {

      case "1":
        alert(" Elegiste 1- Mostrar todos los lotes disponibles por tipología ");
        //alert( "lote 1- lote 2 - lote 3");
        tipoDeLotesDisponibles.forEach(element => {
          alert("Tipología: " + element.tipologia + "\nTamaño de lote: " + element.tamano + "\n Ubicación: " + element.ubicacion + "\n Medidas\n frente: " + element.frente + "\n fondo: " + element.fondo);

          //console.log(element);

        });
        //alert(tipoDeLotesDisponibles);
        break;

      case "2":
        function filtrarPorTipologia(arr, filtro) {
          return arr.filter(elem => elem.tipologia == filtro);

        }
        tipologiaElegida = prompt("Elejiste opción 2.\n Elija una tipología (a,b,c,d)");
        
        console.log(tipologiaElegida);
        eleccion = filtrarPorTipologia(tipoDeLotesDisponibles, tipologiaElegida);
        console.log();




        alert(" Ud eligió la tipología: " + eleccion[0].tipologia);
        console.log(eleccion[0]);
        
        valorTotalTerreno = eleccion[0].tamano * 1000;
        //nota el valor del metro cuadrado es de 1000 pesos
        console.log(valorTotalTerreno)


        break;






      case "3":
        
        if (valorTotalTerreno != 0) {
          alert("Elegiste la opción 3\n  El valor total del terreno es de " + valorTotalTerreno + " pesos");

       
          console.log(eleccion[0].tamano)
        } else {
          alert("Debe elegir una tipología")


        }

        break;


      case "4":
        entregaEnEfectivo = parseFloat(prompt("Elegiste la opcion 4\n ¿Cuanto es la entrega en efectivo que desea realizar?"));
4
        if (entregaEnEfectivo >= 200) {
          saldo = valorTotalTerreno - entregaEnEfectivo;
          alert("Usted desea entregar " + entregaEnEfectivo + " pesos\n Tu entrega está correcta. Supera el monto minimo. ");

          /*alert("entregando " + entregaEnEfectivo + "pesos el saldo queda en " + saldo + " pesos en 12 cuotas te quedaría en " + (saldo / 12));*/

        } else {
          alert(" tu entrega dede ser por lo menos igual o superio a 200 para poder financiar en cuotas")
        }

        break;

      case "5":
        alert("Elegiste la opción 5\n  El saldo que desea financiar es de " + saldo + " pesos");

        break;

      case "6":
        cantidadDeCuotas = parseFloat(prompt("Elija una opcion : \n puede elegir de 2 a 30 cuotas"));
        if (cantidadDeCuotas <= 30 && cantidadDeCuotas >= 2) {
          alert("elegiste " + cantidadDeCuotas + "cuotas")
        } else {
          alert(" las cuotas deben ser entre  2 y 30 cuotas");
        }


        break;




      case "7":
        alert("Elegiste la opción 7 \n Valor total del lote es de " + valorTotalTerreno + " pesos. La entrega inicial es de " + entregaEnEfectivo + " y el saldo de " + saldo + " pesos a pagar en " + cantidadDeCuotas + " de cuotas de " + (saldo / cantidadDeCuotas) + " pesos");
        break;







      default:
        alert("Esta opcion no válida");

        break;


    }
    elegirOpcion = prompt("Elegí tu opcion\n 1-Mostrar todos los tipos de lotes disponibles\n 2-Elegir tipología(a-b-c-d)\n 3-Valor total del terreno elegido\n 4-De cuanto es la entrega en efectivo que desea realizar? \n 5-¿Cual es el saldo para financiar?\n 6-¿En cuantas cuotas desea financiar el saldo?\n 7-Cómo quedaría el plan de financiación elegido \n Presione x para salir ");
  }
  alert("gracias por operar con nosotros");

}
else {
  alert("no podras seguir operando. LLama a nuestras oficina para solicitar un nuevo pin.")

}