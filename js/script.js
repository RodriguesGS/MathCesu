// Fazer a troca de icones para o mobile

const hamburguer = document.querySelector(".menu-hamburguer");

hamburguer.addEventListener("click", function() {
    let mobileMenu = document.querySelector(".mobile-menu");
    
    if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        document.querySelector(".icone").src = "/img/icons/hamburguer.svg";
    } else {
        mobileMenu.classList.add("open")
        document.querySelector(".icone").src = "/img/icons/fechar.svg";
    }
});

// Ativar as perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", event => {
        const perguntaClicada = event.currentTarget;
        const controls = perguntaClicada.getAttribute("aria-controls");
        const resposta = document.getElementById(controls);

        document.querySelectorAll('.perguntas dd.ativa').forEach(item => {
            if (item.id !== controls) {
                item.classList.remove("ativa");
                const relatedButton = document.querySelector(`[aria-controls="${item.id}"]`);
                relatedButton.setAttribute("aria-expanded", "false");
            }
        });

        resposta.classList.toggle("ativa");
        const ativa = resposta.classList.contains("ativa");
        perguntaClicada.setAttribute("aria-expanded", ativa); 
    });
});