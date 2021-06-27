const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1. Створіть функцію, яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
function getMyTaxes(salary) {
  return this.tax * +salary;
}
const countryTax = getMyTaxes.call(ukraine, "6000");
console.log(
  "Створіть функцію, яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. В Україні: ",
  countryTax
);

//2. Створіть функцію, яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні.
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}
const countryMiddleTaxes = getMiddleTaxes.call(ukraine);
console.log(
  "Створіть функцію, яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні. В Україні: ",
  countryMiddleTaxes
);

//3. Створіть функцію, яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
const countryTotalTaxes = getTotalTaxes.call(ukraine);
console.log(
  "Створіть функцію, яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. В Україні: ",
  countryTotalTaxes
);

//4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000.

function getMySalary(country) {
  const myTax = this.tax;
  setInterval(function () {
    const minNumber = 1500;
    const maxNumber = 2000;
    const mySalary = Math.floor(
      minNumber + Math.random() * (maxNumber + 1 - minNumber)
    );
    const profit = mySalary * (1 - myTax);
    let result = {};
    result.mySalary = mySalary;
    result.tax = myTax;
    result.profit = profit;
    console.log(result);
  }, 1000);
}
console.log(
  "Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. В Україні:"
);
getMySalary.call(ukraine);
