
//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
/*
function getMaxDigit(number){    
  stringFromNumbers = Array.from(String(number));
  Array.from(String(number)).map(el =>)   
  } 
  const maxNumber = Math.max(arrayOfNumbers); 
  return maxNumber;
}
console.log (getMaxDigit(987));


*/
//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.
/*
function FirstLetterCapital (text){
  const lowerСase = text.toLowerCase();
  return lowerСase.charAt(0).toUpperCase() + lowerСase.slice(1);
}
console.log (FirstLetterCapital("мАрИнА"));

//4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
const netSalary = (preTaxSalary, tax) => preTaxSalary*(1-tax/100)
console.log (netSalary(1000, 19.5));

//5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M
function getRandomNumber(firstNumber, secondNumber){
  const randomNumber = (Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
  return Math.floor (randomNumber);
}
console.log (getRandomNumber (1,3));

//6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові

function countLetter(searchLetter, word){
  const arrFromWord = Array.from(String(word));
  let letterCounter = 0;
  for (let i = 0; i < arrFromWord.length; i++){
    if (arrFromWord[i] == searchLetter)
      letterCounter++;    
  }
  return letterCounter;
}
console.log (countLetter ('а','мама'));
*/
//7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку
function convertCurrency(money){
  const exchangeRate = 27.1;
  const UpperCaseMoney = money.toUpperCase();
  let amountMoney=0;
  if (UpperCaseMoney.includes('UAH'))
  {
    amountMoney = UpperCaseMoney.replace('UAH', '');
    amountMoney = Number(amountMoney);
  }
  else if (UpperCaseMoney.includes('$'))
  {
    amountMoney = UpperCaseMoney.replace('$', '');
    amountMoney = Number(amountMoney);
  }
  else console.error("Помилка! Зазначена валюта не конвертується даною функцією");

  let convertResultRoundes = 0;
  if (UpperCaseMoney.includes("$")){
    const convertResult =  exchangeRate * amountMoney;
    convertResultRoundes = Math.round(convertResult*100)/100; 
  }
  else if (UpperCaseMoney.includes("UAH"))
  {
    const convertResult =  amountMoney / exchangeRate;
    convertResultRoundes = Math.round((convertResult*100)/100); 
  }
  return convertResultRoundes;
}
console.log (convertCurrency ('100$'));

//8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
//getRandomPassword(4)

function getRandomPassword(len = 8){
  let password = '';
  for (i=0;i<len;i++){
    password = password + Math.round(Math.random()*9);
  }  
  return password ;
}
console.log(getRandomPassword(4));

//9. Створіть функцію, яка видаляє всі букви з речення
function deleteLetters(letterToDelete, word){
  const letterLowerCase = letterToDelete.toLowerCase();
  const letterNumber = word.split(letterToDelete).length-1;
  let WordToChange = word;  
  for (let i = 1; i <= letterNumber; i++) {
    const position = WordToChange.indexOf(letterToDelete);
    WordToChange = WordToChange.slice(0, position) + WordToChange.slice(position + 1);
  }
  return (WordToChange);
}
console.log (deleteLetters("о","молоко"));

//10. Створіть функцію, яка перевіряє, чи є слово паліндромом
function isPalyndrom(word){
  const reverseWord = word.toLowerCase().split('').reverse().join('');
  //const isPalyndromAnswer = "";
  if (word.toLowerCase() == reverseWord)
    return (`Слово ${word} є паліндромом`)
  else
    return (`Слово ${word} не є паліндромом`) 
}
console.log (isPalyndrom("Дід"));



/*
const isPalyndrom = (word) => preTaxSalary*(1-tax/100)
console.log ("дід");
*/

