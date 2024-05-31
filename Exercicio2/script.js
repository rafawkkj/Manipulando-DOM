document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("meuBotao").addEventListener("click", function() {
        const texto = document.getElementById("meuCampo").value;
        document.getElementById("meuParagrafo").innerText = texto;
    });
});