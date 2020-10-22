const keys = document.querySelectorAll('.key');
const kick = document.getElementById('kick');
const snare = document.getElementById('snare');
const hiHat = document.getElementById('hi-hat');
const clap = document.getElementById('clap');
const tom1 = document.getElementById('tom1');
const crash = document.getElementById('crash');


window.addEventListener('keydown', function(e){
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

});

kick.addEventListener('click', function(e){
  const kickAudio = document.querySelector(`audio[data-key="65"]`);
  const kickSampleKey = document.querySelector(`.key[data-key="65"]`);

  if(!kickAudio){
    return
  }


  kickSampleKey.classList.add('playing');

  //rewind sample
  kickAudio.currentTime = 0;

  //play sample
  kickAudio.play();

})


// add event listener for each key press to remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
  //skip if it's not a transform event
  if(e.propertyName !== 'transform'){
    return
  }
  this.classList.remove('playing');
};
