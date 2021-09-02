export const students = [" Олександр", " Ігор", " Олена", " Іра", " Олексій", " Світлана"];
export const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
export const marks = [4, 5, 5, 3, 4, 5];

//1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів
export function getStudentsPairs() {
  const studentsPairs = [];
  studentsPairs.push(
    [students[0], students[5]],
    [students[1], students[3]],
    [students[4], students[2]]
  );
  return studentsPairs;
}
