//Hacer lo mismo pero cogiendo las bebidas desde una array de bebidas ['leche', 'coke', 'cerveza']

// Que vuelva a pedir while, do while o recursion (una segunda oportunidad)

const bebidas = ["leche", "coke", "cerveza"];
//const bebida = prompt("Qué quieres beber: leche,coke o cerveza");
// Separar los valores:
const bebidasSeparadas = bebidas.join(" ");
const ultimoIndice = bebidas.length - 1;
const valoresConComa =
  bebidas.slice(0, ultimoIndice).join(", ") + " o " + bebidas[ultimoIndice];

let mensaje = "";
let edad = 0;
let bebida = "";

do {
  bebida = prompt(`Que quieres beber: ${valoresConComa}`);

  if (bebida == "coke" || bebida == "cerveza") {
    edad = +prompt("Cuántos años tienes?");
  }

  if (
    bebida == "leche" ||
    (bebida == "coke" && edad >= 14) ||
    (bebida == "cerveza" && edad >= 18)
  ) {
    mensaje = "Aquí tiene su bebida";
  } else if (bebida == "coke") {
    mensaje = "Lo siento solo puedo servirle leche";
  } else if (bebida == "cerveza") {
    mensaje = "Lo siento solo puedo servirle leche o coke";
  } else {
    mensaje = "No sé de qué me hablas";
  }
} while (!bebidas.includes(bebida));

/*if(bebida == "coke" || bebida == "cerveza"){
  const edad = prompt("Cuántos años tienes?");
  if(edad <14){
    alert("Lo siento solo puedo servirle leche");
  } else if (edad < 18 && bebida == "cerveza"){
    alert("Lo siento solo puedo servirle leche o coke");
  } else{
    alert("Aquí tiene su bebida");    
  }
}
if(bebida =="leche")
   alert("Aquí tiene su bebida");    */
/*if(bebida == "leche"){
alert("Aquí tiene su bebida");
  } else if(bebida =="coke"){
  const edad = prompt("Cuántos años tienes?");
  if(edad <= 14){
    alert("Lo siento solo puedo servirle leche");
  } else{
alert("Aquí tiene su bebida");    
  }
} else if(bebida =="cerveza"){
  const edad = prompt("Cuántos años tienes?");
  if(edad < 18){
    alert("Lo siento solo puedo servirle leche o coke");
  } else {
alert("Aquí tiene su bebida");    
  }
} else{
  alert("no sé de qué me hablas")
}
*/

//console.log(alerta);

alert(mensaje);
