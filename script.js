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



    /* =====================================================
       DROPDOWN DO CONTATO
    ===================================================== */

    const linkContato = document.getElementById("link-contato");
    const menuContato = document.getElementById("menu-contato");
    const dropdownContato = document.querySelector(".dropdown-contato");


    if (linkContato && menuContato) {

        linkContato.addEventListener("click", function (event) {

            event.preventDefault();

            menuContato.classList.toggle("escondido-dropdown");

        });

    }



    /* =====================================================
       FECHAR DROPDOWN AO CLICAR FORA
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (
            dropdownContato &&
            menuContato &&
            !dropdownContato.contains(event.target)
        ) {

            menuContato.classList.add("escondido-dropdown");

        }

    });

});
