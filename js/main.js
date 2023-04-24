const galleryBtn = document.querySelectorAll(".btn--gallery");
const galleryBlock = document.querySelectorAll(".gallery__block2")
const galleryLink = document.querySelectorAll(".gallery__link")
const galleryBlockImg = document.querySelectorAll(".gallery__block-img")
const galleryBlocks = document.querySelectorAll(".gallery__blocks")
const galleryPopup = document.querySelector(".gallery__popup")
const galleryPopupImg = document.querySelector(".gallery__popup-img")
const galleryPopupClose = document.querySelector(".gallery__popup-close")
const menuBurger = document.querySelector(".menu-burger")
const menu = document.querySelector(".menu")
const menuLink = document.querySelectorAll(".menu__link")
const quote = document.querySelector(".quote")
const upBtn = document.querySelector(".up")
const popupContacts = document.querySelector(".contacts__popup")
const popupContactsClose = document.querySelector(".contacts__popup-close")
const btnContacts = document.querySelector(".btn--contacts")
const contactsTextarea = document.querySelector(".contacts__textarea")
const contactsTextareaValueSpan = document.querySelector(".contacts__textarea-value span")

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

        galleryBtn.forEach(function(e) {
            e.classList.remove("active")
            e.innerHTML = "Показать еще"
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
    
    menu.classList.contains("menu--active")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
})

menuLink.forEach(function(event) {
    event.addEventListener("click", function(e) {
        if (!event.classList.contains("menu__link--shop")) {
            e.preventDefault();
        }

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
            case "menu__link menu__link--availability":
                menuLinkFoo(".shop__title-blocks")
                break;
            case "menu__link menu__link--table":
                menuLinkFoo(".shop__title-table")
                break;
            case "menu__link menu__link--serfboard":
                menuLinkFoo(".shop__footer")
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



galleryBlockImg.forEach(function(event) {
    event.addEventListener("click", function() {
        galleryPopup.classList.add("active")
        galleryPopupImg.setAttribute("src", event.getAttribute("src"))
        if (galleryPopup.classList.contains("active")) {
            document.body.style.cssText = `overflow: hidden;`
        }
    })
})

document.addEventListener("click", function(event) {
    if(event.target.closest(".gallery__popup-close")) {
        galleryPopup.classList.remove("active")
        document.body.removeAttribute("style")
    }
    if(event.target.closest(".shop__acc")) {
        document.querySelector(".shop__footer").classList.toggle("active")
        if(document.querySelector(".shop__footer").classList.contains("active")) {
            document.querySelector(".shop__acc-text").textContent = "Скрыть"
        } else if(!document.querySelector(".shop__footer").classList.contains("active")){
            document.querySelector(".shop__acc-text").textContent = "Читать"
        }
    }
})

let maxLengthValue = contactsTextarea.getAttribute("maxlength")
contactsTextareaValueSpan.textContent = maxLengthValue

function keyContacts() {
    contactsTextareaValueSpan.textContent = maxLengthValue - contactsTextarea.value.length
}

contactsTextarea.addEventListener("keyup", keyContacts)

contactsTextarea.addEventListener("keydown", function(event) {
    if(event.repeat) keyContacts()
})

document.addEventListener("scroll", function(event) {
    if(window.scrollY >= 4850 && window.scrollY <= 5200) {
        if(document.querySelector(".quote") != null) {
            quote.classList.remove("active")
        }
    }
    let num = 0
    let num2 = 0
    let num3 = 0
    let num4 = 0
    if(window.scrollY >= 5800 && window.scrollY <= 6500) {
        if(document.querySelector(".static__num-1") != null
        && document.querySelector(".static__num-2") != null
        && document.querySelector(".static__num-3") != null
        && document.querySelector(".static__num-4") != null) {
            setInterval(() => {
                num += 10
                num2 += 25
                num3 += 1
                num4 += 5
                if(document.querySelector(".static__num-1").textContent < 450) {
                    document.querySelector(".static__num-1").textContent = num
                }
                if(document.querySelector(".static__num-2").textContent < 2500) {
                    document.querySelector(".static__num-2").textContent = num2
                }
                if(document.querySelector(".static__num-3").textContent < 10) {
                    document.querySelector(".static__num-3").textContent = num3
                }
                if(document.querySelector(".static__num-4").textContent < 365) {
                    document.querySelector(".static__num-4").textContent = num4
                }
            }, 20);
        }
    }
    if(window.scrollY > 720) {
        upBtn.classList.add("up--active")
    } else {
        upBtn.classList.remove("up--active")
    }
})

upBtn.addEventListener("click", function() {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

function menuLinkFoo(className) {
    document.querySelector(className)
    .scrollIntoView({
        block: "start",
        behavior: "smooth",
    })
}

const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

for(let i = 0; i < 1000; i++) {
    ctx.fillStyle = `hsl(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`
    ctx.beginPath()
    ctx.arc(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 5, 0, Math.PI * 2, true)
    ctx.fill()
}

setInterval(() => {
    ctx.fillStyle = `hsl(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`
    ctx.beginPath()
    ctx.arc(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 5, 0, Math.PI * 2, true)
    ctx.fill()
}, 1);