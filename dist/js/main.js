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

for (const i of galleryBtn) {
    i.addEventListener("click", function(event) {
        i.classList.toggle("active")

        if(i.classList.contains("active")) {
            i.innerHTML = "скрыть"
        } else {
            i.innerHTML = "показать еще"
        }
        if(i.classList.contains("gallery-1")) {
            document.querySelector(".gallery__block2.gallery-1").classList.toggle("active")
        }
        if(i.classList.contains("gallery-2")) {
            document.querySelector(".gallery__block2.gallery-2").classList.toggle("active")
        }
        if(i.classList.contains("gallery-3")) {
            document.querySelector(".gallery__block2.gallery-3").classList.toggle("active")
        }
        if(i.classList.contains("gallery-4")) {
            document.querySelector(".gallery__block2.gallery-4").classList.toggle("active")
        }
    })
}

galleryLink.forEach(function(choiceItem) {
    choiceItem.addEventListener('click', function(event) {
        galleryBlock.forEach(function() {
            i.classList.remove("active")
        })
        galleryLink.forEach(function(i) {
            i.classList.remove("active")
        })
        choiceItem.classList.toggle("active");

        galleryBlocks.forEach(function(i) {
            i.classList.remove("active")
        })
        if(choiceItem.classList.contains("gallery-1")) {
            document.querySelector(".gallery__blocks.gallery-1").classList.add("active")
        }
        if(choiceItem.classList.contains("gallery-2")) {
            document.querySelector(".gallery__blocks.gallery-2").classList.add("active")
        }
        if(choiceItem.classList.contains("gallery-3")) {
            document.querySelector(".gallery__blocks.gallery-3").classList.add("active")
        }
        if(choiceItem.classList.contains("gallery-4")) {
            document.querySelector(".gallery__blocks.gallery-4").classList.add("active")
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

for (const link of menuLink) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        if(link.classList.contains("menu__link--surfer")) {
            document.querySelector(".surfer")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
        }
        if(link.classList.contains("menu__link--services")) {
            document.querySelector(".services")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
        }
        if(link.classList.contains("menu__link--blog")) {
            document.querySelector(".blog")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
        }
        if(link.classList.contains("menu__link--team")) {
            document.querySelector(".team")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
        }
        if(link.classList.contains("menu__link--contacts")) {
            document.querySelector(".contacts")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                })
        }
        document.body.style.overflow = "auto";
        document.querySelector(".menu--active")
            .classList.remove("menu--active")
        document.querySelector(".menu__list--active")
            .classList.remove("menu__list--active")
        document.querySelector(".menu-burger--open")
            .classList.remove("menu-burger--open")
    })
}

