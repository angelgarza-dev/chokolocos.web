window.inicializarCatalogo = () => {
    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Unobserve to free resources once anim is done
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before element enters viewport
    });

    document.querySelectorAll(".reveal:not(.visible)").forEach(el => {
        observer.observe(el);
    });
};