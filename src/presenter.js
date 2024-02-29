
import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");  

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const secondNumber = Number.parseInt(second.value);
  const totalizar = new totalizador(cantidad.value, precio.value, estado.value);
  div.innerHTML = "<p>Cantidad: " + totalizar.get_cantidad() +" | Precio: " + totalizar.get_precio() + " | Estado: " + totalizar.get_estado() +"</p>";
  
  if(totalizar.get_cantidad() != null && totalizar.get_precio() != null){  
    div2.innerHTML = "<p>Precio neto: " + totalizar.get_precio_neto() + "</p>";
  }else
    div2.innerHTML = "<p>ERROR! La cantidad o el precio es negativo.</p>";
  
});
