const hamburguer = document.querySelector(".menu-hamburguer")

hamburguer.addEventListener("click", function() {
    let mobileMenu = document.querySelector(".mobile-menu")
    
    if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open")
        document.querySelector(".icone").src = "img/icons/hamburguer.svg"
    } else {
        mobileMenu.classList.add("open")
        document.querySelector(".icone").src = "img/icons/fechar.svg"
    }
})