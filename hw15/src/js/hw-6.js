export const students = [
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
export function getSubjects(students) {
  const subjectsArr = Object.keys(students.subjects);
  const newArr = subjectsArr.map(
    (item) => item[0].toUpperCase() + item.slice(1).toLowerCase()
  );
  const resultArr = newArr.map((item) => item.replace("_", " "));
  return resultArr;
}
