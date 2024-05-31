document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("removerItens").addEventListener("click", function() {
        const lista = document.getElementById("minhaLista");
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    });
});