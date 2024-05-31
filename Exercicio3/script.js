document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("adicionarItem").addEventListener("click", function() {
        const novoItem = document.createElement("li");
        novoItem.textContent = "Novo item de lista";
        document.getElementById("minhaLista").appendChild(novoItem);
    });
});