const splashTexts = [
    "There is no requested page in Ba Sing Se.",
    "I CAN'T SEE SHIT",
    "Behold! My Page-Go-Away-inator!",
    // Dune: Part One
    "I said I would not delete them, and I shall not. But the Internet is the Internet, and the Internet takes the weak. My Internet. My project. My GitHub Pages site.",
    "I am commanded to say nothing. To see nothing.",
    // Dune: Part Two
    "This <a href=\"https://en.wikipedia.org/wiki/HTTP_404\">response code</a> is how they enslave us! How they dominate—",
    "Bring this deleted page to my quarters. My poor darlings are hungry. There was no food for them on the flight.",
    "We're losing pages... to rats.",
    "May thy connection lag and throttle.",
    "\"What is happening, mother?\"<br>\"Your brother deletes the Great Pages. The <a href=\"https://en.wikipedia.org/wiki/Flaming_(Internet)#Flame_war\">Flame War</a> begins.\"",
    // Star Wars: The Phantom Menace
    "Hard to see, the deleted page is.",
    "The Superuser should never have brought them into this! Delete them immediately!",
    "I know nothing of any requested pages. You must be... mistaken.",
    "\"Do you think she suspects a <a href=\"https://web.archive.org/\">backup</a>?\"<br>\"I don't know, but we must move quickly to disrupt HTTP requests down there!\"",
    "The ability to write JavaScript does not make you technologically literate. Now get out of here.",
    // Star Wars: Attack of the Clones
    "The dark side clouds everything. Impossible to see, the requested page is.",
    "You want to go home and rethink your life.",
    // Star Wars: Revenge of the Sith
    "Ironic. The Internet Archive could save others from death... but not itself.",
    "I have waited a long time for this moment, my little green friend. At last, the requested pages are no more!",
    "\"Where is my page? Is it safe? Is it all right?\"<br>\"It seems, in your anger, you... deleted it.\"",
    // Star Wars: A New Hope
    "These aren't the pages you're looking for.",
    "I felt a great disturbance in the Force... as if millions of lines of code suddenly cried out in terror, and were suddenly silenced. I fear something terrible has happened.",
    // Star Wars: The Empire Strikes Back
    "Search your feelings. You will know it to be true. He could delete us.",
    // Star Wars: Return of the Jedi
    "If you will not be turned, you will be destroyed.",
    // Rogue One
    "There is no Death Star. The Senate has been informed that the requested page was destroyed in a mining disaster.",
    // Xenoblade Chronicles
    "Welcome to our banquet hall. Tonight, the main course will be you! And if I've still got room, the requested page will make a tasty dessert.",
    "We lost thirty men and we've lost the fortress. Those men died for nothing!",
    "If you do not kill me now, my cursor will annihilate every last one of your pages. Even then?!",
    "All life that is born from me must be returned to me eventually to complete the cycle. For me to continue my existence as before, then all must be restored to its former order.",
    "This world is stagnant. It has expired. Therefore I will ask you, its new god. What is your wish?"
];

function setSplashText() {
    const splashElement = document.getElementById("splash-text");
    const randomIndex = Math.floor(Math.random()*splashTexts.length);
    splashElement.innerHTML = splashTexts[randomIndex];
}

setSplashText();