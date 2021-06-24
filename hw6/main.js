const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

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

//1. Створіть функцію, яка повертає список предметів для конкретного студента
function getSubjects(students) {
  let subjectsArr = [];
  subjectsArr = Object.keys(students.subjects);
  subjectsArr = subjectsArr.map(
    (item) => item[0].toUpperCase() + item.slice(1).toLowerCase()
  );
  subjectsArr = subjectsArr.map((item) => item.replace("_", " "));
  return subjectsArr;
}
console.log(
  "Створіть функцію, яка повертає список предметів для конкретного студента. Студент №1:",
  getSubjects(students[0])
);

//2. Створіть функцію, яка поверне середню оцінку по усім предметам для переданого студента
let averageAllMarks = [];
function getAverageMark(student) {
  let subjectsMarks = Object.values(student.subjects);
  averageAllMarks = subjectsMarks.map((item) => getAverage(...item));
  return getAverage(...averageAllMarks);
}
console.log(
  "Створіть функцію, яка поверне середню оцінку по усім предметам для переданого студента. Студент №2:",
  getAverageMark(students[1])
);
console.log(averageAllMarks);

//3. Створіть функцію, яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). повинна бути виведена інформація: курс, ім'я, середня оцінка.
function getStudentInfo(student) {
  const studentInfo = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  };
  return studentInfo;
}
console.log(
  "Створіть функцію, яка поверне середню оцінку по усім предметам для переданого студента. Студент №2:",
  getStudentInfo(students[1])
);

//4. Створіть функцію, яка повертає імена студентів у алфавітному порядку.
function getStudentsNames(students) {
  let namesArr = [];
  students.forEach((students) => {
    let stusentName = students.name;
    namesArr.push(stusentName);
  });
  const sortedNames = namesArr.sort();
  return sortedNames;
}
console.log(
  "Створіть функцію, яка повертає імена студентів у алфавітному порядку:",
  getStudentsNames(students)
);

//5. Створіть функцію, яка повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent(array) {
  const allAverageMarks = [];
  array.forEach((student) => {
    allAverageMarks.push(getAverageMark(student));
  });
  const maxAverageMark = Math.max(...allAverageMarks);
  let bestStudents = [];
  array.forEach((student) => {
    if (getAverageMark(student) === maxAverageMark) {
      bestStudents.push(student.name);
    }
  });
  return bestStudents;
}
console.log(
  "Створіть функцію, яка повертає кращого студента зі списку по показнику середньої оцінки:",
  getBestStudent(students)
);

6; //Створіть функцію, яка повертає об'єкт, в якому ключі це букви у слові, а значення – кількість їх повторень
function calculateWordLetters(word) {
  const lettersArr = word.split("");
  const lettersResult = lettersArr.reduce((letterСount, letter) => {
    if (letterСount[letter]) letterСount[letter] = letterСount[letter] + 1;
    else letterСount[letter] = 1;
    return letterСount;
  }, {});
  return lettersResult;
}
console.log(
  "Створіть функцію, яка повертає об'єкт, в якому ключі це букви у слові, а значення – кількість їх повторень. Слово 'молоко':",
  calculateWordLetters("молоко")
);
