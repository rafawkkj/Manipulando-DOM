document.addEventListener("DOMContentLoaded", function() {
    let contador = 0;
    const elementoContador = document.getElementById("contador");
    const botaoIncrementar = document.getElementById("incrementar");

    botaoIncrementar.addEventListener("click", function() {
        contador++;
        elementoContador.textContent = contador;
    });
});