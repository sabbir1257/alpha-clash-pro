function handleKeyboardKeyUpEvent(event) {
     const playerPressed = event.key;
     console.log('player pressed',playerPressed);
     // stop the game if pressed 'Esc'
     if(playerPressed === 'Escape'){
          gameOver();
     };

     // get the expected to press
     const currentAlphabetElement = document.getElementById('current-alphabet');
     const currentAlphabet = currentAlphabetElement.innerText;
     const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

     // check matched or not 
     if (playerPressed === expectedAlphabet) {
          const currentScore = getTextElementValueById('current-score');
          const updatedScore = currentScore + 1;
          setTextElementValueById('current-score', updatedScore);
          removeBackgroundColorById(expectedAlphabet);
          continueGame();
     }
     else {
          console.log('you missed. you lost a life');
          const currentLife = getTextElementValueById('current-life');
          const updateLife = currentLife - 1;
          setTextElementValueById('current-life', updateLife);
          if (updateLife === 0) {
               gameOver();
          };
     }
};

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
     // step -1: gnerate a random alphabet
     const alphabet = getARandomAlphabet();
     // set randomly generated alphabet to the screen (show it)
     const currentAlphabetElement = document.getElementById('current-alphabet');
     currentAlphabetElement.innerText = alphabet;
     // set background color
     setBackgroundColorById(alphabet)
}

function play() {
     // hide everything show only the playground
     hiddenElementById('home-screen');
     hiddenElementById('final-score');
     showElementById('play-ground');
     // reset score and life 
     setTextElementValueById('current-life', 5);
     setTextElementValueById('current-score', 0);
     continueGame();
}

function gameOver() {
     hiddenElementById('play-ground');
     showElementById('final-score');
     // update final score
     // 1. get the final score
     const lastScore = getTextElementValueById('current-score');
     setTextElementValueById('last-score', lastScore)
     // clear the last selected alphabet highlight 
     const currentAlphabet = getElementTextById('current-alphabet');
     // console.log(currentAlphabet);
     removeBackgroundColorById(currentAlphabet);
}