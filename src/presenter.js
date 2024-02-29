
import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
//const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const secondNumber = Number.parseInt(second.value);
  const totalizar = new totalizador(cantidad.value);
  div.innerHTML = "<p>" + totalizar.get_cantidad() + "</p>";
});
