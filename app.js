const keys = document.querySelectorAll('.key');

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

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
  //skip if it's not a transform event
  if(e.propertyName !== 'transform'){
    return
  }
  this.classList.remove('playing');
};
