const toggleButton = document.getElementById("toggle-mode");

function updateButtonText() {
    if (document.body.classList.contains("dark-mode"))
        toggleButton.textContent = "Nah, too dark...";
    else
        toggleButton.textContent = "AAAH MY EYES! IT BURNS!!!";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    updateButtonText();
});

updateButtonText();