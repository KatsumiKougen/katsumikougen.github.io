document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".audio");
    
    triggers.forEach((trigger) => {
        const path = trigger.getAttribute("audio_path");
        const audio = new Audio(path);
        
        trigger.addEventListener("click", () => {
            audio.currentTime = 0;
            audio.play();
        });
    });
});