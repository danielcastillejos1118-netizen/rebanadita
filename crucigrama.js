document.addEventListener('DOMContentLoaded', () => {

const container = document.getElementById('cruci');

container.innerHTML = `
<h2>Completa el crucigrama</h2>

<table class="cross">
  <tr>
    <td><input data-s="P"></td>
    <td><input data-s="I"></td>
    <td><input data-s="Z"></td>
    <td><input data-s="Z"></td>
    <td><input data-s="A"></td>
    <td><input data-s="M"></td>
  </tr>

  <tr>
    <td></td><td></td><td></td><td></td><td></td>
    <td><input data-s="A"></td>
    <td><input data-s="A"></td>
  </tr>

  <tr>
    <td><input data-s="Q"></td>
    <td><input data-s="U"></td>
    <td><input data-s="E"></td>
    <td><input data-s="S"></td>
    <td><input data-s="O"></td>
    <td><input data-s="S"></td>
    <td><input data-s="M"></td>
  </tr>

  <tr>
    <td></td><td></td><td></td><td></td><td></td>
    <td><input data-s="A"></td>
    <td><input data-s="O"></td>
  </tr>

  <tr>
    <td><input data-s="H"></td>
    <td><input data-s="O"></td>
    <td><input data-s="R"></td>
    <td><input data-s="N"></td>
    <td><input data-s="O"></td>
    <td></td>
    <td><input data-s="R"></td>
  </tr>
</table>

<button id="revisar">Revisar respuestas</button>
<p id="mensaje"></p>

<h3>Horizontales</h3>
<ul>
  <li><b>1.</b> Comida italiana que vende Rebanadita.</li>
  <li><b>2.</b> Producto lácteo que se derrite encima de la pizza.</li>
  <li><b>3.</b> Lugar donde se hornea la pizza.</li>
</ul>

<h3>Verticales</h3>
<ul>
  <li><b>4.</b> Mezcla de harina y agua para la masa.</li>
</ul>
`;

document.getElementById("revisar").onclick = () => {
  let ok = true;

  document.querySelectorAll("input[data-s]").forEach(i => {
    if (i.value.toUpperCase() === i.dataset.s) {
      i.style.background = "#b2fab4";  // verde
    } else {
      i.style.background = "#ffab91";  // rojo pastel
      ok = false;
    }
  });

  document.getElementById("mensaje").textContent = ok
    ? "¡Excelente! Todo correcto 😊🍕"
    : "Algunas respuestas necesitan corregirse.";
};

});
