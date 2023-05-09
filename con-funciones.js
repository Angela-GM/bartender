// array de bebidas
const bebidas = ["leche", "coke", "cerveza"];
// Separar los valores:
const bebidasSeparadas = bebidas.join(" ");
const ultimoIndice = bebidas.length - 1;
const valoresConComa =
  bebidas.slice(0, ultimoIndice).join(", ") + " o " + bebidas[ultimoIndice];

//   declaracion de variables
let mensaje = "";
let edad = 0;
let bebida = "";
let seHaServidoBebida = false;

// Funcion para pedir y comprobar edad y retorna el valor edad
const edadCorrecta = (edad) => {
  do {
    // Pregunta la edad
    edad = prompt("¿Cuantos años tienes?");
    if (isNaN(edad)) {
      //si la edad no es un numero muestra el mensaje de alerta
      alert("La edad debe ser un numero"); //muestra este mensaje al entrar en el if
    }
  } while (isNaN(edad) == true); //ejecuta el do hasta que se cumpla esta condicion, que edad  no sea un número
  return edad; // cuando edad sea un número, retorna el valor edad para guardarlo luego en una variable que se llamará edad
};

//se ejecuta el do
do {
  bebida = prompt(`Que quieres beber: ${valoresConComa}`); //pide una bebida
  if (bebida === "coke" || bebida === "cerveza") {
    edad = edadCorrecta();
  } else if (
    (bebida === "cerveza" && edad >= 18) ||
    (bebida === "coke" && edad >= 14)
  ) {
    mensaje = "Aqui tiene su bebida";
    seHaServidoBebida = true;
  } else if (bebida === "cerveza" && edad < 18 && edad > 14) {
    mensaje = "Lo siento, solo puedo servirle leche o coke";
  } else if (bebida === "coke" && edad < 14) {
    mensaje = "Lo siento solo puedo servirle leche";
  } else {
    mensaje = "Aqui tiene su bebida";
    seHaServidoBebida = true;
  }
} while (!seHaServidoBebida);

alert(mensaje);
