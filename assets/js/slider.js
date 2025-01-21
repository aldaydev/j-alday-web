// Selección de elementos
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.arrow.left');
const nextButton = document.querySelector('.arrow.right');

let isAutoSliding = true;
let autoSlideInterval;

// Función para mover al siguiente slide
function nextSlide() {
    const firstSlide = slider.firstElementChild; // Primer slide
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-100%)`;

    // Esperar la transición antes de reordenar
    setTimeout(() => {
        slider.style.transition = 'none'; // Desactivar transición
        slider.appendChild(firstSlide); // Mover primer slide al final
        slider.style.transform = `translateX(0)`; // Reajustar posición
    }, 500); // Duración de la transición
}

// Función para mover al slide anterior
function prevSlide() {
    const lastSlide = slider.lastElementChild; // Último slide
    slider.style.transition = 'none';
    slider.insertBefore(lastSlide, slider.firstElementChild); // Mover último slide al inicio
    slider.style.transform = `translateX(-100%)`; // Mostrar el último slide reordenado

    // Añadir transición para regresar al slide central
    setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(0)`;
    }, 0); // Sin delay
}

// Función para iniciar el auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (isAutoSliding) {
            nextSlide();
        }
    }, 7000); // Cambiar cada 7 segundos
}

// Función para detener el auto-slide
function stopAutoSlide() {
    isAutoSliding = false;
    clearInterval(autoSlideInterval);
}

// Event listeners para las flechas
nextButton.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
});

prevButton.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
});

// Inicia el auto-slide
startAutoSlide();

//FUNCIONALIDAD DE ARRASTRAR

// Variables para capturar los eventos touch
let startX = 0;
let endX = 0;

// Detectar el inicio del toque
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Guardar la posición inicial del toque
});

// Detectar el movimiento del toque
slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Guardar la posición actual mientras se mueve
});

// Detectar el final del toque y calcular la dirección
slider.addEventListener('touchend', () => {
    const threshold = 50; // Umbral mínimo de desplazamiento para considerar como swipe
    if (startX - endX > threshold) {
        // Swipe hacia la izquierda
        stopAutoSlide(); // Detener el auto-slide
        nextSlide(); // Mover al siguiente slide
    } else if (endX - startX > threshold) {
        // Swipe hacia la derecha
        stopAutoSlide(); // Detener el auto-slide
        prevSlide(); // Mover al slide anterior
    }
});

