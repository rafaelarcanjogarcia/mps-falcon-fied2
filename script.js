// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    // Pega o botão e a caixa de links
    const botao = document.getElementById("btn-abrir-links");
    const caixaLinks = document.getElementById("caixa-links");

    // Verifica se os elementos existem antes de continuar
    if (!botao || !caixaLinks) {
        return;
    }

    // Evento de clique no botão
    botao.addEventListener("click", function () {

        // Mostra ou esconde a caixa de links
        caixaLinks.classList.toggle("escondido");

        // Altera o texto do botão
        if (caixaLinks.classList.contains("escondido")) {
            botao.textContent = "Ver Opções";
        } else {
            botao.textContent = "Fechar";
        }

    });

});