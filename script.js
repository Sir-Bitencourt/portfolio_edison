import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.swiper-container', {
    loop: true,                  // Ativa o loop infinito
    autoplay: {
        delay: 0,                // O carrossel começa imediatamente
        disableOnInteraction: false, // Permite que o carrossel continue mesmo após interação
    },
    slidesPerView: 'auto',       // Ajusta a quantidade de slides visíveis na tela
    spaceBetween: 2,            // Ajusta o espaçamento entre as imagens
    speed: 10000,                // Controla a velocidade do carrossel
    freeMode: true,              // Permite o modo livre de deslizar
});