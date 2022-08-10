// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    // Set endpoint -> 2023 Start Point - Happy New Year:
    const desiredDate = new Date('Dec 31, 2022 23:59:59').getTime();

    // Start Timer:
    const intervalCounter = setInterval(() => {
        // Calculate the remaining time in milliseconds:
        const timeLeft = desiredDate - new Date().getTime();

        // Calculate timer parts:
        const daysNumber = parseInt(timeLeft / (1000 * 60 * 60 * 24));
        const hoursNumber = parseInt(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutesNumber = parseInt(timeLeft % (1000 * 60 * 60) / (1000 * 60));
        const secondsNumber = parseInt(timeLeft % (1000 * 60) / 1000);

        // Display TWO digits numbers:
        days.textContent = daysNumber < 10 ? `0${daysNumber}` : daysNumber;
        hours.textContent = hoursNumber < 10 ? `0${hoursNumber}` : hoursNumber;
        minutes.textContent = minutesNumber < 10 ? `0${minutesNumber}` : minutesNumber;
        seconds.textContent = secondsNumber < 10 ? `0${secondsNumber}` : secondsNumber;

        // Reset the interval counter, if required:
        if (timeLeft <= 0) {
            clearInterval(intervalCounter);
        }
    }, 1000);
});
