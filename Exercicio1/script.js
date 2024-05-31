document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("meuBotao").addEventListener("click", function() {
        document.getElementById("meuParagrafo").innerText = "Botão clicado!";
    });
});