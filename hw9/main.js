function randomColor() {
  const red = Math.floor(Math.random() * (255 + 1 - 0));
  const green = Math.floor(Math.random() * (255 + 1 - 0));
  const blue = Math.floor(Math.random() * (255 + 1 - 0));
  return `rgb(${red}, ${green}, ${blue})`;
}

function changeColor(){  
  const box = document.getElementsByClassName("box");
  Array.from(box).forEach(el => el.style.backgroundColor = randomColor())
}

function generateBlocks(quantity) {
  let box__wrapper = document.querySelector(".box__wrapper");
  
  for (i = 0; i < quantity; i++) {    
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = 50 + "px";
    box.style.height = 50 + "px";
    box__wrapper.append(box);
  }
  setInterval(() => {
    changeColor(); // вызываем смену цвета !после! того как создали !все! элементы
  }, 1000);
}
generateBlocks(25);




/*
function changeColor(){  
  const box = document.querySelector(".box");
  box.forEach(el => el.style.backgroundColor = randomColor())
}

function generateBlocks(quantity) {
  let box__wrapper = document.querySelector(".box__wrapper");
  for (i = 0; i < quantity; i++) {    
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = 50 + "px";
    box.style.height = 50 + "px";
    box__wrapper.append(box);
  }
  changeColor();
}
generateBlocks(25);


function generateBlocksInterval(quantity) {
  const box = generateBlocks(quantity);
  setInterval(() => {
      changeColor();
  }, 1000);
}

generateBlocksInterval(25);
*/