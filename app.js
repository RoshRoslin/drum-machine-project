const keys = document.querySelectorAll('.key');
const kick = document.getElementById('kick');
const snare = document.getElementById('snare');
const hiHat = document.getElementById('hi-hat');
const clap = document.getElementById('clap');
const tom1 = document.getElementById('tom1');
const crash = document.getElementById('crash');
const eightOhEight = document.getElementById('eight-oh-eight');
const eightOhEightDrummer = document.getElementById('eight-oh-eight-drummer');
const rosh = document.getElementById('rosh');
const roshDrummer= document.getElementById('rosh__drummer');
const pickYourDrummer = document.querySelectorAll('.drummer');
const roshKick = document.getElementById('rosh__kick');
const roshSnare = document.getElementById('rosh__snare');
const roshHiHat = document.getElementById('rosh__hi-hat');
const roshClap = document.getElementById('rosh__clap');
const roshTom1 = document.getElementById('rosh__tom1');
const roshCrash = document.getElementById('rosh__crash');



// select which drummer from menu
eightOhEight.addEventListener('click', function(e){
pickYourDrummerHandler();
window.removeEventListener('keydown', playAudioOnKeyEvent);
eightOhEightDrummer.style.display = 'block';

//add event listeners
window.addEventListener('keydown', playAudioOnKeyEvent);
kick.addEventListener('click', playAudioOnClick);
snare.addEventListener('click', playAudioOnClick);
hiHat.addEventListener('click', playAudioOnClick);
clap.addEventListener('click', playAudioOnClick);
tom1.addEventListener('click', playAudioOnClick);
crash.addEventListener('click', playAudioOnClick);
});



rosh.addEventListener('click', function(e){
pickYourDrummerHandler();

//add event listeners
roshDrummer.style.display = 'block';
window.removeEventListener('keydown', playAudioOnKeyEvent);

window.addEventListener('keydown', playAudioOnKeyEvent);
roshKick.addEventListener('click', playAudioOnClick);
roshSnare.addEventListener('click', playAudioOnClick);
roshHiHat.addEventListener('click', playAudioOnClick);
roshClap.addEventListener('click', playAudioOnClick);
roshTom1.addEventListener('click', playAudioOnClick);
roshCrash.addEventListener('click', playAudioOnClick);
});





//play Audio on Key Event
function playAudioOnKeyEvent(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio){
    //stop function if key is incorrect
    return
  }

  key.classList.add('playing');

  //rewind sample
  audio.currentTime = 0;

  //play sample
  audio.play();
}



//Play Audio On Click event
function playAudioOnClick(e){
  let dataId = e.target.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${dataId}"]`);
  const sampleKey = document.querySelector(`.key[data-key="${dataId}"]`);


  if(!audio){
    return
  }

  //rewind sample
  audio.currentTime = 0;

  //play sample
  audio.play();
}


// // add event listener for each key press to remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
  //skip if it's not a transform event
  if(e.propertyName !== 'transform'){
    return
  }

  this.classList.remove('playing');

}

//pick your drummer pickYourDrummerHandler
function pickYourDrummerHandler(){
  pickYourDrummer.forEach(function(element){
    element.style.display = 'none';
  });
}
