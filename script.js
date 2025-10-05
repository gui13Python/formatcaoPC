document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: Rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Você pode adicionar mais JavaScript aqui no futuro, como:
    // - Um contador regressivo para uma oferta especial
    // - Um pop-up de saída (exit-intent popup)
    // - Integração com pixels de rastreamento (Facebook Pixel, Google Analytics, etc.)
});