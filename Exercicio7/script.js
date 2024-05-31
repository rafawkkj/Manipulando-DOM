document.addEventListener("DOMContentLoaded", function() {
    const campoTexto = document.getElementById("campoTexto");
    const botaoAdicionar = document.getElementById("adicionarTexto");
    const listaTextos = document.getElementById("listaTextos");

    botaoAdicionar.addEventListener("click", function() {
        const texto = campoTexto.value;
        if (texto.trim() !== "") {
            const novoItem = document.createElement("li");
            novoItem.textContent = texto;
            listaTextos.appendChild(novoItem);
            campoTexto.value = "";
        }
    });
});