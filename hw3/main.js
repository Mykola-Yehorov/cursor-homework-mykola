
//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(number){    
  const stringFromNumbers = Array.from(String(number));
  for (let i = 0; i < stringFromNumbers.length; i++){
    stringFromNumbers[i] = Number (stringFromNumbers[i]);    
  }     
  const maxNumber = Math.max(...stringFromNumbers); 
  return maxNumber;
}
console.log (`Максимальна цифра в числі 5830 становить ${getMaxDigit(5830)}`);

//2. Створити функцію, яка визначає ступінь числа
function powerNumber(number, power){
  let powerNumberAnswer = 1;
  for (let i=1; i<=power; i++){
    if (power >= 0)
      powerNumberAnswer = powerNumberAnswer*number;     
    else
      powerNumberAnswer = powerNumberAnswer*(1/number);     
  }
  return powerNumberAnswer;
} 
console.log (`Число 5 в 2 ступені дорівнює ${powerNumber(5, 2)}`);

//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.
function FirstLetterCapital (text){
  const lowerСase = text.toLowerCase();
  return lowerСase.charAt(0).toUpperCase() + lowerСase.slice(1);
}
console.log (`Відформатували слово "мАрИнА" - ${FirstLetterCapital("мАрИнА")}`);

//4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
const netSalary = (preTaxSalary, tax) => Math.round(preTaxSalary*(1-tax/100))
console.log (`Сума, що залишається після оплати податку (19,5%) від зарабітньої плати (1000 грн)  - ${netSalary(1000, 19.5)} грн.`);

//5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M
function getRandomNumber(firstNumber, secondNumber){
  const randomNumber = (Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
  return Math.floor (randomNumber);
}
console.log (`Випадкове ціле число в діапазоні від 1 до 5: ${getRandomNumber (1,5)}`);

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
console.log (`${countLetter ('а','мама')} рази (разiв) буква a повторюється в слові мама`);

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
console.log (`За 100 доларів Ви отримаєте ${convertCurrency ('100$')} грн.`);

//8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
function getRandomPassword(len = 8){
  let password = '';
  for (i=0;i<len;i++){
    password = password + Math.round(Math.random()*9);
  }  
  return password ;
}
console.log (`Сгенерували випадковий пароль (тільки числа), довжина якого становить 4 символи: ${getRandomPassword(4)}`);

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
console.log (`Видалили всі букви 0 з слова "молоко": ${getRandomPassword(4)}`);

//10. Створіть функцію, яка перевіряє, чи є слово паліндромом
function isPalyndrom(word){
  const reverseWord = word.toLowerCase().split('').reverse().join('');
  //const isPalyndromAnswer = "";
  if (word.toLowerCase() == reverseWord)
    return (`${word} є паліндромом`)
  else
    return (`${word} не є паліндромом`) 
}
console.log (`Слово ${isPalyndrom("Дід")}`);


//11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу 
function deleteDuplicateLetter(string){
  let stringWithountDuplicateLetter = '';
  for (let i = 0; i < string.length; i++) {
      const regExp = new RegExp(string[i], 'gi');
      if (string.match(regExp).length <= 1){
        stringWithountDuplicateLetter = stringWithountDuplicateLetter + string[i];   
      }             
  }
  return stringWithountDuplicateLetter;
}
console.log (`Видалили з речення "Бісквіт був дуже ніжним" букви, які зустрічаються більше 1 разу: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`);

