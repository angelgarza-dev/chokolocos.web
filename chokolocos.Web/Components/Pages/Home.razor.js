window.inicializarCatalogo = () => {
    // 1. Animación de Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // 2. Lógica de Carrusel para cada tarjeta
    document.querySelectorAll(".carrusel").forEach(carrusel => {
        const slides = carrusel.querySelectorAll(".slide");
        if (slides.length > 0) {
            slides[0].classList.add("active");
            let index = 0;
            setInterval(() => {
                slides[index].classList.remove("active");
                index = (index + 1) % slides.length;
                slides[index].classList.add("active");
            }, 4000); // Cambio cada 4 segundos
        }
    });
};