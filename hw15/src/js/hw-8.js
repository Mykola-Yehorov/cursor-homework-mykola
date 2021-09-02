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
    this.isDismissed = true;
  }

  recover() {
    this.isDismissed = false;
  }
}

export const ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер"
);

const OstapName = ostap.getInfo();
export { OstapName }
