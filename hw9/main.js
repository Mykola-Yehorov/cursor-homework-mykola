function randomColor() {
  const red = Math.floor(Math.random() * (255 + 1 - 0));
  const green = Math.floor(Math.random() * (255 + 1 - 0));
  const blue = Math.floor(Math.random() * (255 + 1 - 0));
  return `rgb(${red}, ${green}, ${blue})`;
}

function changeColor(box){  
  let box__wrapper = document.querySelector(".box__wrapper");
  box.style.backgroundColor = randomColor();
}

function generateBlocks(quantity) {
  let box__wrapper = document.querySelector(".box__wrapper");
  for (i = 0; i < quantity; i++) {    
    const box = document.createElement("div");
    box.style.width = 50 + "px";
    box.style.height = 50 + "px";
    box.style.backgroundColor = randomColor();
    box__wrapper.append(box);
  }
}
generateBlocks(25);

function generateBlocksInterval(quantity) {
  const box = generateBlocks(quantity);
  setInterval(() => {
      changeColor(box);
  }, 1000);
}

generateBlocksInterval(25);
