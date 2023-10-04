document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].style.transform = "translateX(-100%)";

        // Define um atraso para ocultar o slide anterior antes de mostrar o próximo
        setTimeout(() => {
            slides[currentSlide].style.display = "none";
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.display = "flex";
            slides[currentSlide].style.transform = "translateX(0)";
        }, 500); // Ajuste o valor 500 conforme necessário
    }

    setInterval(nextSlide, 3000); // Altere o valor 3000 para ajustar a velocidade de transição (3 segundos no exemplo)
});
