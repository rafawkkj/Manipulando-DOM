document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("meuCheckbox");
    const paragrafo = document.getElementById("estadoCheckbox");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            paragrafo.textContent = "Checkbox marcada";
        } else {
            paragrafo.textContent = "Checkbox desmarcada";
        }
    });
});