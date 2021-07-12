function gammaPlay(event) {
  const allButtons = Array.from(document.querySelectorAll('button'));
  allButtons.forEach(button =>
  button.classList.remove('active'));
  
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const button = document.querySelector(`.button[data-key="${event.keyCode}"]`);
  audio.play();
  button.classList.add('active');
}

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.classList.remove('active');
  button.onclick = function () {
    const audio = document.querySelector(
      `audio[data-key="${button.dataset.key}"]`
    );
      audio.play();
      button.classList.add('active');
  };
});

window.addEventListener('keydown', gammaPlay);
