
async function getRandomChinese(length) {
  let i = 0;
  let chineseString = "";
  while (i < length){
    const randomChinese = new Promise((resolve, reject) => {
      setTimeout(() => {
        const sign = (Date.now().toString().slice(-5));
        //console.log (sign)
        const string = (String.fromCharCode(sign));
        resolve (string);
        i++;
        }, 50);        
    });
    chineseString = chineseString + await randomChinese;   
  }
  return chineseString;
}
randomChinese.then(alert);
const result = getRandomChinese(length);


/*
setTimeout(() => {
sign = (Date.now().toString().slice(-5));
console.log (sign)
console.log (String.fromCharCode(sign));
}, 50);
//console.log (Date.now().toString().slice(-5));
*/

/*
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
*/