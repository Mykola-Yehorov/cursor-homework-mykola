
function generateBlocks(quantity){

  let box__wrapper = document.querySelector('.box__wrapper');
  function randomColor() {
    const r = Math.floor (Math.random() * (255 + 1 - 0));
    const g = Math.floor (Math.random() * (255 + 1 - 0));
    const b = Math.floor (Math.random() * (255 + 1 - 0));
    return `rgb(${r}, ${g}, ${b})`;
  }

  for (i=0; i<quantity; i++){
    const box = document.createElement("div");
    box.style.width = 50 + 'px';
    box.style.height = 50 + 'px';
    setInterval(() =>{
      box.style.backgroundColor = randomColor();
    }, 1000);
    box__wrapper.append(box);
  }
}

generateBlocks(25);

