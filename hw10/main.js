const toggleButtonActiveState = (button, audio) => {
  button.classList.add('active');

  setTimeout(() => {
    button.classList.remove('active');
  }, audio.duration * 1000);
};

function gammaPlay(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const button = document.querySelector(`.button[data-key="${event.keyCode}"]`);

  toggleButtonActiveState(button, audio);

  audio.play();
}

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.onclick = function () {
    const audio = document.querySelector(
      `audio[data-key="${button.dataset.key}"]`
    );
    toggleButtonActiveState(button, audio);

    audio.play();
  };
});

window.addEventListener('keydown', gammaPlay);
