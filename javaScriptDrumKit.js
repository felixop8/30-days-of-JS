function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return; // Stops function from running.

  audio.currentTime = 0; // Rewind to the start.
  audio.play();
  key.classList.add('playing');

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

function removeTransition(event) {
  if(event.propertyName !== 'transform') return; // Skip if it's not a transform;
  this.classList.remove('playing');
}


window.addEventListener('keydown', playSound);