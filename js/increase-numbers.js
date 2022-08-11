// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const statsContainer = document.querySelector('#statistics');
    const statsNumber = document.querySelectorAll('#statistics .stats__number');

    // Did The Increment Started Or Not?
    let isStarted = false;

    // Desired changing speed:
    const speed = 200;

    // Scrolling Behavior:
    window.addEventListener('scroll', () => {
        // Increase Statistics Numbers:
        if (!isStarted && statsContainer.getBoundingClientRect().top <= 200) {
            isStarted = true;
            statsNumber.forEach((statsNumber, key) => {
                const targetNumber = parseInt(statsNumber.dataset.target);   // desired integer
                let fractions = 0;   // used internally to avoid floating points

                // Increase numbers by a custom value depending on the target number
                const updateNumber = () => {
                    if (parseInt(statsNumber.textContent) < targetNumber) {
                        // UIncrease the value:
                        fractions += (targetNumber / speed);
                        statsNumber.textContent = parseInt(fractions);

                        // Add (K) to the last number value:
                        if (key === 3) { statsNumber.textContent += 'k'; }

                        // Repeat again:
                        setTimeout(updateNumber);
                    } else {
                        // Update final value:
                        statsNumber.textContent = targetNumber;

                        // Add (K) to the last number value:
                        if (key === 3) { statsNumber.textContent += 'k'; }
                    }
                };

                // Actually call the function:
                updateNumber();
            });
        }
    });
});
