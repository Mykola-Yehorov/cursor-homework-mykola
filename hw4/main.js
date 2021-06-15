const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

//1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів
function getStudentsPairs() {
  const studentsPairs = [];
  studentsPairs.push(
    [students[0], students[5]],
    [students[1], students[3]],
    [students[4], students[2]]
  );
  return studentsPairs;
}
console.log(
  "1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом: ",
  getStudentsPairs()
);

//2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати
function addStudentsProjects() {
  let studentsProjects = [];
  for (let i = 0; i < themes.length; i++) {
    studentsProjects.push([getStudentsPairs()[i].join(" i "), themes[i]]);
  }
  return studentsProjects;
}
console.log(
  "2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати: ",
  addStudentsProjects()
);

//3. Зіставте оцінки(marks) зі студентом(students):
function addStudentsMarks() {
  let studentsMarks = [];
  for (let i = 0; i < marks.length; i++) {
    studentsMarks.push([students[i], marks[i]]);
  }
  return studentsMarks;
}
console.log("3. Зіставте оцінки зі студентом: ", addStudentsMarks());

//4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
function getRandomMarks() {
  let randomMarks = [];
  for (let i = 0; i < addStudentsProjects().length; i++) {
    const marks = Math.round(Math.random() * (5 - 1 + 1) + 1);
    randomMarks.push([addStudentsProjects()[i].concat(marks)]);
  }
  return randomMarks;
}
console.log(
  "4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт: ",
  getRandomMarks()
);
