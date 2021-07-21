//Функція, яка рахує середнє арифметичне всіх переданих в неї аргументів та округлює значення до сотих
function getAverage(...numbers) {
  let numbersSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbersSum = numbersSum + numbers[i];
  }
  const numberAverage = numbersSum / numbers.length;
  const roundNumberAverage = Math.round(numberAverage * 100) / 100;
  return roundNumberAverage;
}

class Student {
  constructor(university, course, fullName) {
    const marks = [5, 4, 4, 5];
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.isDismissed = false;
  }
  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get getMarks() {
    if (this.isDismissed) return null;
    else return this.marks;
  }

  set setMarks(newMark) {
    if (this.isDismissed) return null;
    else return this.marks.push(newMark);
  }

  getAverageMark() {
    return getAverage(...this.marks);
  }

  dismiss() {
    return (this.isDismissed = true);
  }

  recover() {
    return (this.isDismissed = false);
  }
}
console.log(
  "2. Створіть метод this.getInfo(), метод повертає сукупну інформацію про курс, учбовий заклад та імені студента:"
);
const ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер"
);
console.log(ostap.getInfo());

console.log(
  "3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента:"
);
console.log(ostap.getMarks);

console.log(
  "4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив:"
);
ostap.setMarks = 5;
console.log(ostap.getMarks);

console.log("5. Створіть метод отримання середнього балу:");
console.log(ostap.getAverageMark());

console.log(
  '6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок):'
);
ostap.dismiss();
ostap.setMarks = 2;
console.log(ostap.getMarks);

console.log(
  "7. Створіть метод this.recover, який дозволить поновити студента:"
);
ostap.recover();
console.log(ostap.getMarks);