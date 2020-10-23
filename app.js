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
const roshTom1 = document.getElementById('rosh__tom1');
const roshTom2 = document.getElementById('rosh__tom2');
const roshCrash = document.getElementById('rosh__crash');
let whichDrummer;



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

// select drummer
whichDrummer = '808';

});



rosh.addEventListener('click', function(e){
pickYourDrummerHandler();

window.removeEventListener('keydown', playAudioOnKeyEvent);

//add event listeners
roshDrummer.style.display = 'block';

window.addEventListener('keydown', playAudioOnKeyEvent);


roshKick.addEventListener('click', playAudioOnClick);
roshSnare.addEventListener('click', playAudioOnClick);
roshHiHat.addEventListener('click', playAudioOnClick);
roshTom1.addEventListener('click', playAudioOnClick);
roshTom2.addEventListener('click', playAudioOnClick);
roshCrash.addEventListener('click', playAudioOnClick);

//select drummer
whichDrummer = 'Rosh';

});





//play Audio on Key Event
function playAudioOnKeyEvent(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const dataKey = parseInt(audio.getAttribute('data-key'));

  if(!audio){
    //stop function if key is incorrect
    return
  }



  if(whichDrummer === '808'){

    if (dataKey === 65 ||
        dataKey === 83 ||
        dataKey === 68 ||
        dataKey === 70 ||
        dataKey === 71 ||
        dataKey === 72
    ) {
      key.classList.add('playing');

      //rewind sample
      audio.currentTime = 0;

      //play sample
      audio.play();
      return
    }
  }

    else if(whichDrummer === 'Rosh'){


        if (dataKey === 90 ||
            dataKey === 88 ||
            dataKey === 67 ||
            dataKey === 86 ||
            dataKey === 66 ||
            dataKey === 78
        ) {
          key.classList.add('playing');

          //rewind sample
          audio.currentTime = 0;

          //play sample
          audio.play();
          return
        }
    }

    else {
      return
    }

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
