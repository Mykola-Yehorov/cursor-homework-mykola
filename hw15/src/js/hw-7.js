export const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };


export function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}


