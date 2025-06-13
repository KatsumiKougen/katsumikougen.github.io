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
    "This world is stagnant. It has expired. Therefore I will ask you, its new god. What is your wish?",
    // Iron Man
    "I had my eyes opened. I came to realise that I had more to offer this world than just making sh*tposts. And that is why, effective immediately, I am shutting down the requested page of Stark Industries.",
    "TONY STARK WAS ABLE TO BUILD THIS [NOW-DELETED PAGE] IN A CAVE! WITH A BOX OF SCRAPS!",
    // Thor
    "Through your arrogance and stupidity, you have opened these peaceful platforms and innocent lives to the horror and desolation of MEMORY LEAK! You are unworthy of these libraries! Unworthy of your header file! You're unworthy! Of the loved ones you have betrayed. I now take from you your power! In the name of my PC and its manufacturer, I, <code>katsumi@bahamut</code>, cast you out!!!",
    "If they take down one page, hundreds more copies will be mirrored! If they cut off one head, two more shall take its place.",
    // The Avengers
    "\"I have an army.\"<br>\"We have a 404 status code.\"",
    // Thor: The Dark World
    "Your requested page was never meant to be. Your world and your user agent will be extinguished!",
    "Darkness returns, Superuser. Have you come to witness the end of your requested page?",
    // Captain America: The Winter Soldier
    "We won, Captain. Your death amounts to the same as your life: a zero sum!",
    "I'm afraid I have been stalling, Captain. Admit it, it's better this way. We are, both of us, out of time.",
    // Guardians of the Galaxy
    "\"You can't do this! Our development teams signed a peace treaty!\"<br>\"My dev team knows no shame. You <a href=\"https://en.wikipedia.org/wiki/4chan\">/g/</a> vermins and your culture are a disease.\"<br>\"You will never delete the requested page!\"<br>\"No, I WILL CURE IT!!!\"",
    "Let's see if you can laugh after five or six good delete commands through your FRICKIN' FACE!",
    "That's exactly why none of you have any friends! Five seconds after you make pages, you're already trying to delete them!",
    // Avengers: Age of Ultron
    "The gates of Hel are filled with the screams of his victims.",
    // Doctor Strange
    "They really should put the warnings before this stuff.",
    "YOU'VE COME TO DIE. YOUR WORLD IS NOW MY WORLD, LIKE ALL WORLDS.",
    // Guardians of the Galaxy Vol. 2
    "\"New plan: we're killing you first!\"<br>\"Well, dying is certainly better than having to live an entire life as a moronic sh\*tbag who thinks <code>taserface@bahamut</code> is a cool name.\"",
    "No offence, but your admins are a bunch of jerks.",
    "\"Who in the hell do you think you are?\"<br>\"YOU DELETED MY REQUESTED PAGE!!!\"",
    // Thor: Ragnarok
    "I have been pinging...FOR 30 MINUTES!",
    "Son of a b\*tch! You're still alive? I thought my father deleted you, like....half a billion cycles ago.",
    // Black Panther
    "You! Your requested page is so full of hatred, you're not fit to be a king!",
    // Avengers: Infinity War
    "Mr. Stark, I don't feel so good. I don't... I don't know what's happening. I don't wanna go. I don't wanna go. Sir, please. Please, I don't wanna go. I don't wanna go. I don't... I'm sorry.",
    "Up, General, up! This is no place to die.",
    "\"Did you do it?\"<br>\"Yes.\"<br>\"What did it cost?\"<br>\"The requested page.\"",
    "Today, I lost more than you can know. But now is no time to mourn. Now is no time at all.",
    // Avengers: Endgame
    "In all my years of conquest, violence, slaughter, it was never personal. But I'll tell you now, what I'm about to do to your stubborn, annoying little requested page... I'm gonna enjoy it. Very, very much.",
    "It nearly killed me, but the deletion is done. It always will be. I am... inevitable.",
    // Doctor Strange in the Multiverse of Madness
    "You break the rules and become a hero. I do it and I become the enemy. That doesn't seem fair.",
    // Guardians of the Galaxy Vol. 3
    "Go to hell, you sick son of a b\*tch. You deleted all those requests pages!"
];

function setSplashText() {
    const splashElement = document.getElementById("splash-text");
    const randomIndex = Math.floor(Math.random()*splashTexts.length);
    splashElement.innerHTML = splashTexts[randomIndex];
}

setSplashText();