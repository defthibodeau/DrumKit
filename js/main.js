(() => {
  console.log('drumkit file loaded!');

  function removeHighlight(e) {
    console.log(e);
    if (e.propertyName !== 'transform'){
      return;
    } else {
      e.target.classList.remove('playing');
    }
  }

  function playSound(e) {
    //debugger;
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    // add highlight
    key.classList.add('playing');

    if (!audio) { return; }

    audio.currentTime= 0;
    audio.play();
    //debugger;
  }

  window.addEventListener('keydown', playSound);

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeHighlight));
})();
