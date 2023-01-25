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

//lägger upp tomma rutor
const wordEl = document.querySelector('.word')
for(let i = 0; i<randomWord.length; i++){
 let emptyLetter = document.createElement('li');
 wordEl.appendChild(emptyLetter)
}

let nrOfTries = 5;
let userTries = 0;
let keypressed;


function combineLetters() {
    let listItems = document.querySelectorAll('.word li');
    let comparedWord = '';
    for (let i = 0; i < listItems.length; i++) {
      comparedWord += listItems[i].innerHTML;
    }
    if (comparedWord == randomWord) {
        let win = document.querySelector('main p');
        win.innerHTML = 'You won!';
    }
  }
  

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
            let restartBtn = document.querySelector('a');
            restartBtn.addEventListener('click', () => {
                location.reload();
            })
        }
    }
};

