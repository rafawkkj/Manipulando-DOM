document.addEventListener("DOMContentLoaded", function() {
    const lista = document.getElementById("minhaLista");
    const botaoReverter = document.getElementById("reverterOrdem");

    botaoReverter.addEventListener("click", function() {
        const itensLista = Array.from(lista.getElementsByTagName("li"));
        itensLista.reverse();
        lista.innerHTML = "";
        itensLista.forEach(function(item) {
            lista.appendChild(item);
        });
    });
});