document.addEventListener("DOMContentLoaded", function() {
    const imagem = document.getElementById("minhaImagem");
    const botaoAumentar = document.getElementById("aumentar");
    const botaoDiminuir = document.getElementById("diminuir");

    botaoAumentar.addEventListener("click", function() {
        const larguraAtual = parseInt(imagem.style.width);
        imagem.style.width = (larguraAtual + 10) + "px";
    });

    botaoDiminuir.addEventListener("click", function() {
        const larguraAtual = parseInt(imagem.style.width);
        if (larguraAtual > 10) { // Prevenir largura negativa
            imagem.style.width = (larguraAtual - 10) + "px";
        }
    });
});