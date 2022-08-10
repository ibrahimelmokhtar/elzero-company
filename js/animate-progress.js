// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const skillsContainer = document.querySelector('#our__skills .skills');
    const skillBars = document.querySelectorAll('#our__skills .actual__progress');

    // Did The Increment Started Or Not?
    let isStarted = false;

    // Scrolling Behavior:
    window.addEventListener('scroll', () => {
        // Update Skill Bars:
        if (!isStarted && skillsContainer.getBoundingClientRect().top <= 400) {
            isStarted = true;
            skillBars.forEach((skillBar) => {
                skillBar.style.width = skillBar.dataset.progress;
            });

        }
    });
});
