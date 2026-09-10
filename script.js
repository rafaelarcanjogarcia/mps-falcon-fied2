document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       TOGGLE DOS CANAIS
    ===================================================== */
    const botao = document.getElementById("btn-abrir-canais");
    const caixaCanais = document.getElementById("caixa-canais");

    if (botao && caixaCanais) {
        botao.addEventListener("click", function () {
            caixaCanais.classList.toggle("escondido");

            if (caixaCanais.classList.contains("escondido")) {
                botao.textContent = "Ver Opções";
            } else {
                botao.textContent = "Fechar";
            }
        });
    }

});
