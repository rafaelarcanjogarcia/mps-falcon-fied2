// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    // ================= TOGGLE CANAIS ================= 
    
    // Pega o botão e a caixa de links
    const botao = document.getElementById("btn-abrir-canais");
    const caixaCanais = document.getElementById("caixa-canais");

    // Verifica se os elementos existem antes de continuar
    if (botao && caixaCanais) {
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
    }


    // ================= TOGGLE DROPDOWN CONTATO ================= 
    
    const linkContato = document.querySelector('.dropdown-contato a');
    const menuContato = document.getElementById('menu-contato');

    if (linkContato && menuContato) {
        linkContato.addEventListener('click', function(event) {
            event.preventDefault();
            menuContato.classList.toggle('escondido-dropdown');
        });
    }

    // Fechar o dropdown ao clicar fora dele
    document.addEventListener('click', function(event) {
        const dropdownContato = document.querySelector('.dropdown-contato');
        
        if (dropdownContato && menuContato && !dropdownContato.contains(event.target)) {
            menuContato.classList.add('escondido-dropdown');
        }
    });

});
