/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let guessedLetters = [];

let words = ['dog', 'cat', 'raccoon'];

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord, 'random');

let nrOfTries = 5;
let userTries = 0;
let keypressed;


document.onkeydown = function (e) {
    keypressed = e.key;
    console.log(keypressed, 'hej');

    if (randomWord.includes(keypressed)) {
        console.log(`The word contained ${keypressed}`);
        guessedLetters.push(keypressed);
        letters.splice();
    }
    else {
        nrOfTries--;
        guessedLetters.push(keypressed);
        letters.splice();
        console.log(nrOfTries, 'nrOfTries');
    }
};
