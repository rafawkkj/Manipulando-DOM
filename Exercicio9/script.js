document.addEventListener("DOMContentLoaded", function() {
    const imagem = document.getElementById("minhaImagem");
    const botaoEsconder = document.getElementById("esconderImagem");
    const botaoMostrar = document.getElementById("mostrarImagem");

    botaoEsconder.addEventListener("click", function() {
        imagem.style.display = "none";
    });

    botaoMostrar.addEventListener("click", function() {
        imagem.style.display = "block";
    });
});