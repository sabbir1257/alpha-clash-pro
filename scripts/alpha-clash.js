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

function handleKeyboardButtiPress(){
     console.log('button press');
};

document.addEventListener('keyup', handleKeyboardButtiPress)

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