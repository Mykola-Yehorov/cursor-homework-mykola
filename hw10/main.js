function gammaPlay(event) {
  //button.classList.remove('active');
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const button = document.querySelector(`.button[data-key="${event.keyCode}"]`);
  audio.play();
  button.classList.add('active');
}

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.onclick = function () {
    const audio = document.querySelector(
      `audio[data-key="${button.dataset.key}"]`
    );
    if (button.addEventListener('keydown', button.dataset.key) != button.dataset.key){
      audio.stop();
    }
    else{
      audio.play();
      button.classList.add('active');
    }
  };
});

window.addEventListener('keydown', gammaPlay);
