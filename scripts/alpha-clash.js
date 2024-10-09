// function play(){
//      // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//      const homeSection = document.getElementById('home-screem');
//      homeSection.classList.add('hidden');
//      // console.log(homeSection);

//      // show the playground
//      const playgroundSection = document.getElementById('play-ground');
//      playgroundSection.classList.remove('hidden');
//      // console.log(playgroundSection.classList);
// }

function handleKeyboardKeyUpEvent(event){
     const playerPressed = event.key;
     console.log('player pressed' ,playerPressed);

     // get the expected to press
     const currentAlphabetElement = document.getElementById('current-alphabet');
     const currentAlphabet = currentAlphabetElement.innerText;
     const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
     console.log(playerPressed, expectedAlphabet);
     
     // check matched or not 
     if(playerPressed === expectedAlphabet){
          console.log('you get a point');
     }
     else{
          console.log('you missed. you lost a life');
     }
};

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
     // step -1: gnerate a random alphabet
     const alphabet = getARandomAlphabet();

     // set randomly generated alphabet to the screen (show it)
     const currentAlphabetElement = document.getElementById('current-alphabet');
     currentAlphabetElement.innerText = alphabet;

     // set background color
     setBackgroundColorById(alphabet)
}

function play (){
     hiddenElementById('home-screen');
     showElementById('play-ground');
     continueGame();
}