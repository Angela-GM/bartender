console.log("Hola mundo");
// Tres tipos de bebidas leche, coca-cola y cerveza
// Leche --> no se solicita la edad y se responde con la frase "aquí tiene su bebida"
// Coca-cola --> se solicita la edad. Sí es mayor de 14 se responde con la frase "aquí tiene su bebida. Si es menor de 14 se responde con la frase: "lo siento, solo puedo servirle leche".
// Cerveza --> se solicita la edad. Si es mayor o igual a 18 se responde con la frase "aquí tiene su bebida". Si no lo es, se responde con la frase: "lo siento, solo puedo servirle leche o cocacola".

let bebida = prompt("Seleccione una bebida: leche, coca-cola o cerveza");
let edad;

// version if
// if (bebida === "leche") {
//   alert("Aqui tiene su bebida");
// } else if (bebida === "coca-cola") {
//   let edad = prompt("Necesitamos que nos indique su edad: ");
//   if (edad > 14) {
//     alert("Aqui tiene su bebida");
//   } else {
//     alert("Lo siento, solo puedo servirle leche");
//   }
// } else if (bebida === "cerveza") {
//   let edad = prompt("Necesitamos que nos indique su edad: ");
//   if (edad >= 18) {
//     alert("Aqui tiene su bebida");
//   } else {
//     alert("Lo siento, solo puedo servirle leche o cocacola");
//   }
// }

// version switch

if (bebida === "leche" || bebida === "coca-cola" || bebida === "cerveza") {
  switch (bebida) {
    case "leche":
      alert("Aqui tiene su bebida");
      break;
    case "coca-cola":
      edad = prompt("Necesitamos que nos indique su edad: ");

      if (edad > 14) {
        alert("Aqui tiene su bebida");
      } else {
        alert("Lo siento, solo puedo servirle leche");
      }

      break;
    case "cerveza":
      edad = prompt("Necesitamos que nos indique su edad: ");
      if (edad >= 18) {
        alert("Aqui tiene su bebida");
      } else {
        alert("Lo siento, solo puedo servirle leche o cocacola");
      }
  }
} else {
  alert("Esa bebida no está disponible.");
}
