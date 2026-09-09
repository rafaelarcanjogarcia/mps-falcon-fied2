// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    // Pega o botão e a caixa de links
    const botao = document.getElementById("btn-abrir-canais");
    const caixaCanais = document.getElementById("caixa-canais");

    // Verifica se os elementos existem antes de continuar
    if (!botao || !caixaCanais) {
        return;
    }

    // Evento de clique no botão
    botao.addEventListener("click", function () {

        // Mostra ou esconde a caixa de links
        caixaCanais.classList.toggle("escondido");

        // Altera o texto do botão
        if (caixaCanais.classList.contains("escondido")) {
            botao.textContent = "Ver Opções";
        } else {
            botao.textContent = "Fechar";
        }

    });

});
