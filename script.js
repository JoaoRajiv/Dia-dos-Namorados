var swiper = new Swiper(".swiper", {
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 15000
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

function criarContador() {
    const dataInicial = new Date("2024-08-04T02:00:00");
    const elementoContador = document.getElementById("contador");

    function atualizarContador() {
        const dataAtual = new Date();
        const diferenca = dataAtual.getTime() - dataInicial.getTime();

        const segundos = Math.floor(diferenca / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);

        const segundosRestantes = segundos % 60;
        const minutosRestantes = minutos % 60;
        const horasRestantes = horas % 24;

        const formatarNumero = num => (num < 10 ? "0" + num : num);

        const contadorHTML = `
            <div class="message">Tempo sendo feliz com você</div>
            <div class="time-unit">
                <span class="number">${dias}</span> <span class="label">dias</span>
            </div>
            <div class="time-unit">
                <span class="number">${formatarNumero(
                    horasRestantes
                )}</span> <span class="label">horas</span>
            </div>
            <div class="time-unit">
                <span class="number">${formatarNumero(
                    minutosRestantes
                )}</span> <span class="label">minutos</span>
            </div>
            <div class="time-unit">
                <span class="number">${formatarNumero(
                    segundosRestantes
                )}</span> <span class="label">segundos</span>
            </div>
        `;

        if (elementoContador) {
            elementoContador.innerHTML = contadorHTML;
        }
    }
    setInterval(atualizarContador, 1000);
    atualizarContador();
}

document.addEventListener("DOMContentLoaded", criarContador);
