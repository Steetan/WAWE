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
            galleryBtnFoo(".gallery__block2.gallery-1")
        }
        if(e.classList.contains("gallery-2")) {
            galleryBtnFoo(".gallery__block2.gallery-2")
        }
        if(e.classList.contains("gallery-3")) {
            galleryBtnFoo(".gallery__block2.gallery-3")
        }
        if(e.classList.contains("gallery-4")) {
            galleryBtnFoo(".gallery__block2.gallery-4")
        }
    })
})

function galleryBtnFoo(className) {
    document.querySelector(className)
        .classList.toggle("active")
}

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
                galleryLinkFoo(".gallery__blocks.gallery-1")
                break;
            case "gallery__link gallery-2 active":
                galleryLinkFoo(".gallery__blocks.gallery-2")
                break;
            case "gallery__link gallery-3 active":
                galleryLinkFoo(".gallery__blocks.gallery-3")
                break;
            case "gallery__link gallery-4 active":
                galleryLinkFoo(".gallery__blocks.gallery-4")
                break;
        }
    });
});

function galleryLinkFoo(className) {
    document.querySelector(className)
        .classList.add("active")
}

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
                menuLinkFoo(".surfer")
                break;
            case "menu__link menu__link--services":
                menuLinkFoo(".services")
                break;
            case "menu__link menu__link--blog":
                menuLinkFoo(".blog")
                break;
            case "menu__link menu__link--team":
                menuLinkFoo(".team")
                break;
            case "menu__link menu__link--contacts":
                menuLinkFoo(".contacts")
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

function menuLinkFoo(className) {
    document.querySelector(className)
    .scrollIntoView({
        block: "start",
        behavior: "smooth",
    })
}