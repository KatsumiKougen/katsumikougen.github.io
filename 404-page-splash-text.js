const splashTexts = [
    "There is no requested page in Ba Sing Se.",
    "These aren't the pages you're looking for.",
    "I CAN'T SEE SHIT",
    "Behold! My Page-Go-Away-inator!"
];

function setSplashText() {
    const splashElement = document.getElementById("splash-text");
    const randomIndex = Math.floor(Math.random()*splashTexts.length);
    splashElement.textContent = splashTexts[randomIndex];
}

setSplashText();