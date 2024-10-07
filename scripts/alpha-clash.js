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

function continueGame(){
     // step-1: generate a random alphabet
     const alphabet = getARandomAlphabet();
     console.log('your random alphabat',alphabet);     
};


function play (){
     hiddenElementById('home-screen');
     showElementById('play-ground');
     continueGame();
}