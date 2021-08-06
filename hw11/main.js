let lengthString = prompt ("Введите количество китайских символов", 1)

while (isNaN(lengthString)) {
  lengthString = +Math.trunc(
    prompt ("Ошибка! Введите количество китайских символов", 1)
  );
  }

async function getRandomChinese(length) {
  let i = 0;
  let chineseString = "";
  while (i < length){
    const randomChinese = new Promise((resolve, reject) => {
      setTimeout(() => {
        const sign = (Date.now().toString().slice(-5));
        const string = (String.fromCharCode(sign));
        resolve (string);
        i++;
        }, i*50);        
    });
    chineseString = chineseString + await randomChinese;   
  }
  return chineseString;
}

getRandomChinese(lengthString).then(console.log);