function randomColor(selector){
  return selector.style.backgroundColor = randomColor();
}

function generateBlocks(quantity){

  let box__wrapper = document.querySelector('.box__wrapper');
  function randomColor() {
    const red = Math.floor (Math.random() * (255 + 1 - 0));
    const green = Math.floor (Math.random() * (255 + 1 - 0));
    const blue = Math.floor (Math.random() * (255 + 1 - 0));
    return `rgb(${red}, ${green}, ${blue})`;
  }

  for (i=0; i<quantity; i++){
    const box = document.createElement("div");
    box.style.width = 50 + 'px';
    box.style.height = 50 + 'px';
    setInterval(() =>{
      randomColor (box);
    }, 1000);
    box__wrapper.append(box);
  }
}
generateBlocks(25);
