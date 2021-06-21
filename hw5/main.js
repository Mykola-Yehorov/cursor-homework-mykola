//1. Створіть функцію,  яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа
function getRandomArray(length, min, max) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min + min) + min));
  }
  return `Масив випадкових цілих чисел з довжиною: ${length} елементів, мінімальним елементом: ${min}, максимальним елементом ${max} виглядає наступним чином: ${randomArray}`;
}
console.log(getRandomArray(5, 1, 10));

//3. Створіть функцію,  яка рахує середнє арифметичне всіх переданих в неї аргументів.

function getAverage(...numbers) {
  const integers = Array.from(numbers).filter((number) =>
    Number.isInteger(number)
  );
  let numbersSum = 0;
  for (let i = 0; i < integers.length; i++) {
    numbersSum = numbersSum + integers[i];
  }
  const numberAverage = numbersSum / integers.length;
  return `Середнє арифметичне переданих елементів (враховуємо тільки цілі числа): ${numbers} складає: ${numberAverage} `;
}
console.log(getAverage(1, 2, 3, 0.25));

//4. Створіть функцію, яка рахує медіану всіх переданих в неї аргументів.

function getMedian(...numbers) {
  const integers = Array.from(numbers).filter((number) =>
    Number.isInteger(number)
  );
  let median = 0;
  //const elementsHalf = Math.trunc (integers.length / 2);
  integers.sort((a, b) => {
    return a - b;
  });
  if (integers.length % 2 === 0) {
    median = (integers[integers.length / 2 - 1] + integers[integers.length / 2]) / 2;
  } else {
    median = integers[(integers.length - 1) / 2];
  }
  return `З переданих елементів (враховуємо тільки цілі числа): ${numbers} медіаною є: ${median} `;
}
console.log(getMedian(11, 9, 3, 5, 5));

//5. Створіть функцію,  яка фільтрує парні числа передані як аргументи функції.
function filterEvenNumbers(...numbers) {
  const evenNumbers = Array.from(numbers).filter((number) => number % 2 == 1);
  return `Передали елементи: ${numbers} та профільтрували парні числа. Отримали: ${evenNumbers} `;
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

//6. Створіть функцію,  яка порахує кількість чисел більших 0
function countPositiveNumbers(...numbers) {
  const positiveNumbers = Array.from(numbers).filter(
    (number) => number > 0
  ).length;
  return `Передали елементи: ${numbers},  кількість чисел більших 0: ${positiveNumbers} `;
}
console.log(countPositiveNumbers(-1, 1, 2, 0));

//7. Створіть функцію,  яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5.
function getDividedByFive(...numbers) {
  const dividedByFive = Array.from(numbers).filter((number) => number % 5 == 0);
  return `Передали елементи: ${numbers}, відфільтрували елементи в масиві та залишили ті, які діляться на ціло на 5: ${dividedByFive} `;
}
console.log(
  getDividedByFive(6, 2, 30, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);