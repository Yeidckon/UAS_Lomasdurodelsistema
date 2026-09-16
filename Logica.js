let n_Alts = 0;
let n_Crits = 0;
let b_Generar = document.getElementById("generar");
document.getElementById("in1").addEventListener("input", validar);
document.getElementById("in2").addEventListener("input", validar);

function validar() {
  let Alts = document.getElementById("in1").value;
  n_Alts = Number(Alts);
  let Crits = document.getElementById("in2").value;
  n_Crits = Number(Crits);

  if (n_Alts > 0 && n_Crits > 0) {
    b_Generar.classList.remove("oculto");
  } else {
    b_Generar.classList.add("oculto");
  }
}

document.getElementById("generar").addEventListener("click", generar_formulario);

function generar_formulario() {
  b_Generar.classList.add("oculto");
  generar_alts();
  generar_crits();
}

function generar_alts() {
  let cont_alt = document.getElementById("alternativas");
  cont_alt.innerHTML = ""; // limpia contenido previo

 cont_alt.innerHTML += `
      <div class="campo">
        <h3 class="campo">Alternativas</h3>
      </div>
    `;

  for (let a = 1; a < n_Alts + 1; a++) {
    cont_alt.innerHTML += `
      <div class="campo">
        <label for="alt_nombre_${a + 1}">Alternativa ${a}:</label>
        <input type="text" name="alt_nombre_${a}" class="campo"/>
      </div>
    `;
  }
  cont_alt.classList.remove("oculto");
}

function generar_crits() {
  let cont_cri = document.getElementById("criterios");
  cont_cri.innerHTML = ""; // limpia contenido previo

 cont_cri.innerHTML += `
      <div class="config">
        <h3 class="campo">Criterios</h3>
      </div>
    `;

  for (let b = 1; b < n_Crits + 1; b++) {
    cont_cri.innerHTML += `
      <div class="config">
        <label for="cri_nombre_${b + 1}"> Criterio ${b}:</label>
        <input type="text" name="cri_nombre_${b}" class="campo"/>
      </div>
    `;
  }
    cont_cri.classList.remove("oculto");
}


// <label for="in2">Numero de criterios</label>
// <input type="number" name="num_crits" id="in2" />