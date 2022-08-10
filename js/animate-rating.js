// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const testimonialCards = document.querySelectorAll('#testimonials .testimonial__card');

    // Did The Increment Started Or Not?
    let isStarted = false;

    // Scrolling Behavior:
    window.addEventListener('scroll', () => {
        testimonialCards.forEach((card) => {
            // Change The Current Testimonial Card Ratings:
            if (card.getBoundingClientRect().top <= 450) {
                isStarted = true;
                card.style.setProperty('--animation-play-state', 'running');
            }
        });
    });
});
