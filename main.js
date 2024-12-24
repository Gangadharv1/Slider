let  currentSlide = 0;

function setSliderHeight() {
    const slides = document.querySelectorAll('.testimonial');
    const maxHeight = Math.max(...Array.from(slides, slide => {
        slide.style.display = 'block';
        const height = slide.offsetHeight;
        slide.style.display = 'none';
        return height;
    }));
    document.querySelector('.testimonial-slider').style.height = `${maxHeight}px`;
}

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial');
    currentSlide = (index + slides.length) % slides.length; // Wrap around

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
        slide.style.opacity = i === currentSlide ? '1' : '0';
        slide.classList.toggle('active', i === currentSlide);
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.testimonial');
    slides[currentSlide].style.opacity = '0';
    setTimeout(() => showSlide(currentSlide + direction), 500);
}

setSliderHeight();
showSlide(currentSlide);