var swiper = new Swiper(".swiper", {
    effect: "cards",
    cardsEffect: {
        perSlideOffset: 1,
        slideShadows: false
    },
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

const openModalButton = document.querySelector("#open-Modal");
const closeModalButton = document.querySelector("#close-Modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};
[openModalButton, closeModalButton, fade].forEach(el => {
    el.addEventListener(
        "click",
        () => console.log("Modal toggled") || toggleModal()
    );
});
