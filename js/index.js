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

let words = ['dog', 'cat', 'raccoon', 'rabbit', 'mouse', 'horse', 'donkey', 'squirrel', 'bird', 'wolf', 'fox', 'lynx', 'bear', 'moose', 'deer', 'lion', 'tiger', 'puma'];




let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord, 'random');

//lägger upp tomma rutor
const wordEl = document.querySelector('.word')
function setWordBoxes(){
    wordEl.innerHTML = ''
    for(let i = 0; i<randomWord.length; i++){
        let emptyLetter = document.createElement('li');
        wordEl.appendChild(emptyLetter)
    }
}
setWordBoxes()

//valbar svårighetsgrad
const lowDiff = document.querySelector('.short')
const highDiff = document.querySelector('.long')

lowDiff.addEventListener('click', function(){
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    guessedLetters = []
    document.querySelector('figure').classList.remove('scaffold')
    document.querySelector('figure').classList.remove('head')
    document.querySelector('figure').classList.remove('body')
    document.querySelector('figure').classList.remove('arms')
    document.querySelector('figure').classList.remove('legs')
    document.querySelector('.nomatch').innerHTML = ''
    nrOfTries = 5;
    userTries = 0;
    while(randomWord.length>4){
        randomWord = words[Math.floor(Math.random() * words.length)];
        console.log(randomWord)
        setWordBoxes()
    }
})

highDiff.addEventListener('click', function(){
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    guessedLetters = []
    document.querySelector('figure').classList.remove('scaffold')
    document.querySelector('figure').classList.remove('head')
    document.querySelector('figure').classList.remove('body')
    document.querySelector('figure').classList.remove('arms')
    document.querySelector('figure').classList.remove('legs')
    document.querySelector('.nomatch').innerHTML = ''
    nrOfTries = 5;
    userTries = 0;
    while(randomWord.length<5){
        randomWord = words[Math.floor(Math.random() * words.length)];
        console.log(randomWord)
        setWordBoxes()
    }
})


let noMatchWord = document.createElement('li');


let nrOfTries = 5;
let userTries = 0;
let keypressed;


document.onkeydown = function (e) {
    keypressed = e.key;

    if (randomWord.includes(keypressed)) {
        console.log(`The word contained ${keypressed}`);
        console.log(letters.indexOf(keypressed), 'index');
        
        letters.splice(letters.indexOf(keypressed), 1);

        //skriver bokstäverna i rutorna
        for (let i = 0; i < wordEl.children.length; i++) {
            if (randomWord[i] == keypressed) {
                wordEl.children[i].innerHTML = keypressed
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
        console.log(nrOfTries, 'nrOfTries');
        document.querySelector('figure').classList.add('scaffold');

        if (nrOfTries === 3) {
            document.querySelector('figure').classList.add('head');
        }
        else if (nrOfTries === 2) {
            document.querySelector('figure').classList.add('body');
        }
        else if (nrOfTries === 1) {
            document.querySelector('figure').classList.add('arms');
        }
        else if (nrOfTries === 0) {
            document.querySelector('figure').classList.add('legs');
            document.querySelector('.game-over').classList.add('show');
            document.querySelector('b').innerHTML = randomWord
            let restartBtn = document.querySelector('a');
            restartBtn.addEventListener('click', () => {
                location.reload();
            })
        }
    }
};

