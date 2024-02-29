
import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const secondNumber = Number.parseInt(second.value);
  const totalizar = new totalizador(cantidad.value, precio.value);
  div.innerHTML = "<p>Cantidad: " + totalizar.get_cantidad() +" | Precio: " + totalizar.get_precio() +"</p>";
});
