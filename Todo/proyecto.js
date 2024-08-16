document.addEventListener("DOMContentLoaded", () => {
    const powerButton = document.getElementById('powerButton');

    powerButton.addEventListener('click', () => {
        powerButton.classList.toggle('on');
    });
});