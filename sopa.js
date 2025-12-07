document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("wordsearch-root");

  // Armamos solo la sopa, sin lista de palabras
  root.innerHTML = `
    <p>Da clic en las letras para marcar las palabras que encuentres en la sopa 🍕</p>

    <div class="wordsearch-wrapper">
      <div>
        <table class="wordsearch-grid">
          <tbody>
            <tr><td>P</td><td>I</td><td>Z</td><td>Z</td><td>A</td><td>R</td><td>E</td><td>B</td><td>A</td><td>N</td></tr>
            <tr><td>Q</td><td>U</td><td>E</td><td>S</td><td>O</td><td>T</td><td>O</td><td>M</td><td>A</td><td>T</td></tr>
            <tr><td>M</td><td>A</td><td>S</td><td>A</td><td>Q</td><td>U</td><td>E</td><td>S</td><td>O</td><td>S</td></tr>
            <tr><td>H</td><td>O</td><td>R</td><td>N</td><td>O</td><td>A</td><td>C</td><td>H</td><td>E</td><td>S</td></tr>
            <tr><td>S</td><td>A</td><td>L</td><td>S</td><td>A</td><td>P</td><td>A</td><td>N</td><td>E</td><td>L</td></tr>
            <tr><td>R</td><td>E</td><td>B</td><td>A</td><td>N</td><td>A</td><td>D</td><td>I</td><td>T</td><td>A</td></tr>
            <tr><td>C</td><td>R</td><td>U</td><td>J</td><td>I</td><td>E</td><td>N</td><td>T</td><td>E</td><td>S</td></tr>
            <tr><td>H</td><td>A</td><td>R</td><td>I</td><td>N</td><td>A</td><td>Q</td><td>U</td><td>E</td><td>S</td></tr>
            <tr><td>L</td><td>E</td><td>N</td><td>A</td><td>P</td><td>E</td><td>P</td><td>P</td><td>E</td><td>R</td></tr>
            <tr><td>F</td><td>E</td><td>L</td><td>I</td><td>C</td><td>I</td><td>D</td><td>A</td><td>D</td><td>E</td></tr>
          </tbody>
        </table>

        <button id="clear-marks" style="margin-top:16px;">Borrar marcas</button>
      </div>
    </div>
  `;

  // Hacemos que cada celda se pueda marcar
  const cells = root.querySelectorAll(".wordsearch-grid td");
  cells.forEach(td => {
    td.addEventListener("click", () => {
      td.classList.toggle("marked");
    });
  });

  // Botón para limpiar todas las marcas
  const clearBtn = root.querySelector("#clear-marks");
  clearBtn.addEventListener("click", () => {
    cells.forEach(td => td.classList.remove("marked"));
  });
});
