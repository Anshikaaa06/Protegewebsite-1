document.addEventListener('DOMContentLoaded', function() {
    // Add animation delay to each card
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Intersection Observer for better animation timing
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
        card.style.animationPlayState = 'paused';
    });
});
