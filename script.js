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

document.addEventListener("DOMContentLoaded", () => {
    const audioSource = document.getElementById("audio-source");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const progressBar = document.getElementById("progress-bar");
    const progressContainer = document.querySelector(".progress-container");
    const albumCover = document.getElementById("album-cover");
    const musicTitle = document.getElementById("music-title");
    const musicArtist = document.getElementById("music-artist");
    const currentTimeSpan = document.getElementById("current-time");
    const durationSpan = document.getElementById("duration");

    let isPlaying = false;

    // --- Configure SUA música aqui ---
    const yourMusic = {
        title: "Lisboa",
        artist: "ANAVITÓRIA, Lenine",
        src: "/musica.mp3", // **Altere para o caminho da sua música!**
        cover: "/images/capa.jpg" // **Altere para o caminho da sua capa!**
    };
    function loadYourMusic() {
        audioSource.src = yourMusic.src;
        albumCover.src = yourMusic.cover;
        musicTitle.textContent = yourMusic.title;
        musicArtist.textContent = yourMusic.artist;
        audioSource.load();
    }

    function playPauseMusic() {
        if (isPlaying) {
            audioSource.pause();
            playPauseBtn.textContent = "▶";
        } else {
            audioSource.play();
            playPauseBtn.textContent = "⏸";
        }
        isPlaying = !isPlaying;
    }

    audioSource.addEventListener("timeupdate", () => {
        const progressPercent =
            (audioSource.currentTime / audioSource.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        const formatTime = time => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        };

        if (!isNaN(audioSource.duration)) {
            currentTimeSpan.textContent = formatTime(audioSource.currentTime);
            durationSpan.textContent = formatTime(audioSource.duration);
        }
    });

    progressContainer.addEventListener("click", e => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audioSource.duration;
        audioSource.currentTime = (clickX / width) * duration;
    });

    audioSource.addEventListener("ended", () => {
        isPlaying = false;
        playPauseBtn.textContent = "▶";
        audioSource.currentTime = 0;
    });

    playPauseBtn.addEventListener("click", playPauseMusic);

    loadYourMusic();
});
