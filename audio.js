const audio = new Audio("media/HowDareYouSetFootOnTheseGrounds.mp3");

const pageTitleElement = document.getElementById("audio-HowDareYouSetFootOnTheseGrounds");

pageTitleElement.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
})