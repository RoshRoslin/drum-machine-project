const keys = document.querySelectorAll('.key');
const kick = document.getElementById('kick');
const snare = document.getElementById('snare');
const hiHat = document.getElementById('hi-hat');
const clap = document.getElementById('clap');
const tom1 = document.getElementById('tom1');
const crash = document.getElementById('crash');


//add event listeners

kick.addEventListener('click', playAudioOnClick);
snare.addEventListener('click', playAudioOnClick);
hiHat.addEventListener('click', playAudioOnClick);
clap.addEventListener('click', playAudioOnClick);
tom1.addEventListener('click', playAudioOnClick);
crash.addEventListener('click', playAudioOnClick);
window.addEventListener('keydown', playAudioOnKeyEvent);


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


  sampleKey.classList.add('playing');

  //rewind sample
  audio.currentTime = 0;

  //play sample
  audio.play();

}


// add event listener for each key press to remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
  //skip if it's not a transform event
  if(e.propertyName !== 'transform'){
    return
  }
  this.classList.remove('playing');
}
