var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    keyboard: true
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
