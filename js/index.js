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

let words = ['dog', 'cat', 'raccoon', 'rabbit', 'mouse', 'horse', 'donkey', 'squirrel',
    'bird', 'wolf', 'fox', 'lynx', 'bear', 'moose', 'deer', 'lion', 'tiger', 'puma'];

let randomWord = words[Math.floor(Math.random() * words.length)];

let guessedLetters = [];
let nrOfTries = 5;
let userTries = 0;
let keypressed;

//lägger upp tomma rutor
const wordEl = document.querySelector('.word');
function setWordBoxes() {
    wordEl.innerHTML = '';
    for (let i = 0; i < randomWord.length; i++) {
        let emptyLetter = document.createElement('li');
        wordEl.appendChild(emptyLetter);
    }
}
setWordBoxes()

//valbar svårighetsgrad
const lowDiff = document.querySelector('.short');
const highDiff = document.querySelector('.long');

lowDiff.addEventListener('click', function () {
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    guessedLetters = [];
    document.querySelector('figure').classList.remove('scaffold');
    document.querySelector('figure').classList.remove('head');
    document.querySelector('figure').classList.remove('body');
    document.querySelector('figure').classList.remove('arms');
    document.querySelector('figure').classList.remove('legs');
    document.querySelector('.nomatch').innerHTML = '';
    nrOfTries = 5;
    userTries = 0;
    while (randomWord.length > 4) {
        randomWord = words[Math.floor(Math.random() * words.length)];
        setWordBoxes();
    }
})

highDiff.addEventListener('click', function () {
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    guessedLetters = [];
    document.querySelector('figure').classList.remove('scaffold');
    document.querySelector('figure').classList.remove('head');
    document.querySelector('figure').classList.remove('body');
    document.querySelector('figure').classList.remove('arms');
    document.querySelector('figure').classList.remove('legs');
    document.querySelector('.nomatch').innerHTML = '';
    nrOfTries = 5;
    userTries = 0;
    while (randomWord.length < 5) {
        randomWord = words[Math.floor(Math.random() * words.length)];
        setWordBoxes();
    }
})

function combineLetters() {
    let listItems = document.querySelectorAll('.word li');
    let comparedWord = '';
    for (let i = 0; i < listItems.length; i++) {
        comparedWord += listItems[i].innerHTML;
    }
    if (comparedWord == randomWord) {
        let winViewH1 = document.querySelector('section h1');
        let winViewText = document.querySelector('section p');
        winViewH1.innerHTML = 'You Won!';
        winViewText.innerHTML = '';
        document.querySelector('.game-over').classList.add('show');
    }
}

let restartBtn = document.querySelector('a');
restartBtn.addEventListener('click', () => {
    location.reload();
});

document.onkeydown = function (e) {
    keypressed = e.key;

    if (randomWord.includes(keypressed)) {
        letters.splice(letters.indexOf(keypressed), 1);

        //skriver bokstäverna i rutorna
        for (let i = 0; i < wordEl.children.length; i++) {
            if (randomWord[i] == keypressed) {
                wordEl.children[i].innerHTML = keypressed;
                combineLetters();
            }
        }
    }
    else if (!randomWord.includes(keypressed) && letters.includes(keypressed)) {
        nrOfTries--;
        guessedLetters.unshift(keypressed);

        letters.splice(letters.indexOf(keypressed), 1);

        let noMatchWord = document.createElement('li');
        noMatchWord.innerHTML = `${guessedLetters[0]}`;
        document.querySelector('.nomatch').appendChild(noMatchWord);
        document.querySelector('figure').classList.add('scaffold');

        switch (nrOfTries) {
            case 3:
                document.querySelector('figure').classList.add('head');
                break;
            case 2:
                document.querySelector('figure').classList.add('body');
                break;
            case 1:
                document.querySelector('figure').classList.add('arms');
                break;
            case 0:
                document.querySelector('figure').classList.add('legs');
                document.querySelector('.game-over').classList.add('show');
                document.querySelector('b').innerHTML = randomWord;
                break;
        }
    }
};

