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



document.onkeydown = function (e) {
 keypressed = e.key;
 console.log(keypressed, 'hej');

 if (randomWord.includes(keypressed)) {
     console.log(`The word contained ${keypressed}`);
     guessedLetters.unshift(keypressed);
     letters.splice();

//        guessedLetters.forEach(letter => {
//            let el1 = document.createElement('li');
//            el1.innerHTML = `${guessedLetters[0]}`;
//            document.querySelector('.word').appendChild(el1);
//        });

//        for(let i = 0; i<randomWord.length; i++){
//            if(randomWord[i] == keypressed){
//                let el1 = document.createElement('li');
//                el1.innerHTML = `${keypressed}`;
//                document.querySelector('.word').insertBefore(el1, document.querySelector('.word').children[randomWord.indexOf(keypressed)])
//            }
//        }


//skriver bokstäverna i rutorna
             for(let i = 0; i<wordEl.children.length; i++){
                 if(randomWord[i]==keypressed){
                     wordEl.children[i].innerHTML = keypressed
                 }
             }

 }
 else {
     nrOfTries--;
     guessedLetters.push(keypressed);
     letters.splice();
     el1.innerHTML = `${guessedLetters[0]}`;
     document.querySelector('.nomatch').appendChild(el1);
     document.querySelector('figure').classList.add('scaffold');
     console.log(nrOfTries, 'nrOfTries');
 }
};

