const galleryBtn = document.querySelectorAll(".btn--gallery");
const galleryBlock = document.querySelectorAll(".gallery__block2")
const galleryLink = document.querySelectorAll(".gallery__link")
const galleryBlocks = document.querySelectorAll(".gallery__blocks")
const menuBurger = document.querySelector(".menu-burger")
const menu = document.querySelector(".menu")
const menuLink = document.querySelectorAll(".menu__link")

var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

galleryBtn.forEach(function(e) {
    e.addEventListener("click", function(event) {
        e.classList.toggle("active")

        e.classList.contains("active")
        ? (e.innerHTML = "скрыть")
        : (e.innerHTML = "показать еще");

        if(e.classList.contains("gallery-1")) {
            document.querySelector(".gallery__block2.gallery-1").classList.toggle("active")
        }
        if(e.classList.contains("gallery-2")) {
            document.querySelector(".gallery__block2.gallery-2").classList.toggle("active")
        }
        if(e.classList.contains("gallery-3")) {
            document.querySelector(".gallery__block2.gallery-3").classList.toggle("active")
        }
        if(e.classList.contains("gallery-4")) {
            document.querySelector(".gallery__block2.gallery-4").classList.toggle("active")
        }
    })
})

galleryLink.forEach(function(choiceItem) {
    choiceItem.addEventListener('click', function(event) {
        galleryBlock.forEach(function(e) {
            e.classList.remove("active")
        })
        galleryLink.forEach(function(e) {
            e.classList.remove("active")
        })
        choiceItem.classList.toggle("active");

        galleryBlocks.forEach(function(e) {
            e.classList.remove("active")
        })

        switch (choiceItem.className) {
            case "gallery__link gallery-1 active":
                document.querySelector(".gallery__blocks.gallery-1")
                    .classList.add("active")
                break;
            case "gallery__link gallery-2 active":
                document.querySelector(".gallery__blocks.gallery-2")
                    .classList.add("active")
                break;
            case "gallery__link gallery-3 active":
                document.querySelector(".gallery__blocks.gallery-3")
                    .classList.add("active")
                break;
            case "gallery__link gallery-4 active":
                document.querySelector(".gallery__blocks.gallery-4")
                    .classList.add("active")
                break;
        }
    });
});

menuBurger.addEventListener("click", function(e) {
    document.querySelector(".menu")
        .classList.toggle("menu--active")

    document.querySelector(".menu__list")
        .classList.toggle("menu__list--active")

    menuBurger.classList.toggle("menu-burger--open");
    
    menu.className === "menu menu--active"
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
})

menuLink.forEach(function(event) {
    event.addEventListener("click", function(e) {
        e.preventDefault();

        switch (event.className) {
            case "menu__link menu__link--surfer":
                document.querySelector(".surfer")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
                break;
            case "menu__link menu__link--services":
                document.querySelector(".services")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
                break;
            case "menu__link menu__link--blog":
                document.querySelector(".blog")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
                break;
            case "menu__link menu__link--team":
                document.querySelector(".team")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
                break;
            case "menu__link menu__link--contacts":
                document.querySelector(".contacts")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
                break;
        
        }

        document.body.style.overflow = "auto";
        document.querySelector(".menu")
            .classList.remove("menu--active")
        document.querySelector(".menu__list")
            .classList.remove("menu__list--active")
        document.querySelector(".menu-burger")
            .classList.remove("menu-burger--open")
     })
})