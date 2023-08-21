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

  let valorTotalTerreno = 1000;
  let saldo = 0;
  let cantidadDeCuotas = 1;
  let entregaEnEfectivo = 0;
  let tipologiaElegida="";
  let eleccion=[];
  const tipoDeLotesDisponibles = [
    { tipologia: "a", tamano: 250, frente: 10, fondo: 25, ubicacion: "Esquina de manzana" },
    { tipologia: "b", tamano: 360, frente: 12, fondo: 30, ubicacion: "Dentro de manzana" },
    { tipologia: "c", tamano: 450, frente: 15, fondo: 30, ubicacion: "Dentro de manzana" },
    { tipologia: "d", tamano: 560, frente: 16, fondo: 35, ubicacion: "Dentro de manzana" }];

  let elegirOpcion = prompt("Elegí tu opcion\n 1- Valor total del terreno elegido\n 2-De cuanto es la entrega en efectivo que desea realizar? \n 3-¿Cual es el saldo para financiar?\n 4-¿En cuantas cuotas desea financiar el saldo?\n 5-Cómo quedaría el plan de financiación elegido\n 6-mostrar todos los lotes disponibles\n 7-Elegir tipología(a-b-c-d)\nPresione x para salir ");
  while (elegirOpcion != "x") {
    switch (elegirOpcion) {



      case "1":
        alert("Elegiste la opción 1\n  El valor total del terreno es de " + valorTotalTerreno + " pesos");

        break;

      case "2":
        entregaEnEfectivo = parseFloat(prompt("Elegiste la opcion 2\n ¿Cuanto es la entrega en efectivo que desea realizar?"));

        if (entregaEnEfectivo >= 200) {
          saldo = valorTotalTerreno - entregaEnEfectivo;
          alert("Usted desea entregar " + entregaEnEfectivo + " pesos\n Tu entrega está correcta. Supera el monto minimo. ");

          /*alert("entregando " + entregaEnEfectivo + "pesos el saldo queda en " + saldo + " pesos en 12 cuotas te quedaría en " + (saldo / 12));*/

        } else {
          alert(" tu entrega dede ser por lo menos igual o superio a 200 para poder financiar en cuotas")
        }

        break;

      case "3":
        alert("Elegiste la opción 3\n  El saldo que desea financiar es de " + saldo + " pesos");

        break;

      case "4":
        cantidadDeCuotas = parseFloat(prompt("elija una opcion: \n puede elegir de 2 a 30 cuotas"));
        if (cantidadDeCuotas <= 30 && cantidadDeCuotas >= 2) {
          alert("elegiste " + cantidadDeCuotas + "cuotas")
        } else {
          alert(" las cuotas deben ser entre  2 y 30 cuotas");
        }


        break;




      case "5":
        alert("Elegiste la opción 5 \n Valor total del lote es de " + valorTotalTerreno + " pesos. La entrega inicial es de " + entregaEnEfectivo + " y el saldo de " + saldo + " pesos a pagar en " + cantidadDeCuotas + " de cuotas de " + (saldo / cantidadDeCuotas) + " pesos");
        break;

      case "6":
        alert(" Elegiste 6 -Mostrar todos los lotes disponibles por tipología ");
        //alert( "lote 1- lote 2 - lote 3");
        tipoDeLotesDisponibles.forEach(element => {
          alert("Tipología: " + element.tipologia + "\nTamaño de lote: " + element.tamano + "\n Ubicación: " + element.ubicacion + "\n Medidas\n frente: " + element.frente + "\n fondo: " + element.fondo);

          //console.log(element);

        });
        //alert(tipoDeLotesDisponibles);
        break;

      case "7":
        function filtrarPorTipologia(arr,filtro){
          return arr.filter(elem=>elem.tipologia==filtro);
          
        }
        tipologiaElegida=prompt("Elija una tipología");
/*
        function filtrarPorTipologia(arr,filtro){
          return arr.filter(elem=>elem.tipologia==filtro);
          
        }
  */      
        console.log(tipologiaElegida);
        eleccion = filtrarPorTipologia(tipoDeLotesDisponibles,tipologiaElegida);
        console.log();
        
        
        

        alert(" ud eligio la tipología: "+eleccion[0].tipologia);
        console.log(eleccion[0]);

        //---------------------------------------------------
        /*
        const carritofiltrado=carrito.filter((ele)=>{
          return ele.precio<=600
        })
        console.log(carritofiltrado);
        */
        //------------------------------------------------------





        
      //elegir tipología
        /*
        cantidadDeCuotas = parseFloat(prompt("elija una opcion: \n puede elegir de 2 a 30 cuotas"));
        if (cantidadDeCuotas <= 30 && cantidadDeCuotas >= 2) {
          alert("elegiste " + cantidadDeCuotas + "cuotas")
        } else {
          alert(" las cuotas deben ser entre  2 y 30 cuotas");
        }
        */

        break;











      default:
        alert("Esta opcion no válida");

        break;


    }
    elegirOpcion = prompt("Elegí tu opcion\n 1- Valor total del terreno elegido\n 2-De cuanto es la entrega en efectivo que desea realizar? \n 3-¿Cual es el saldo para financiar?\n 4-¿En cuantas cuotas desea financiar el saldo?\n 5-Cómo quedaría el plan de financiación elegido\n 6-mostrar todos los lotes disponibles\n 7-Elegir tipología(a-b-c-d)\nPresione x para salir ");
  }
  alert("gracias por operar con nosotros");

}
else {
  alert("no podras seguir operando. LLama a nuestras oficina para solicitar un nuevo pin.")

}