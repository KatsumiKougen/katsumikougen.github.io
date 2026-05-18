document.querySelectorAll(".spoiler").forEach(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("unblurred");
    });
});