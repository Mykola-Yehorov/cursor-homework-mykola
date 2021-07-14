let sumNumber = 1;
let n = +Math.trunc(
  prompt("Введіть число (n) від якого ми будемо складати", 1)
);

while (isNaN(n)) {
  n = +Math.trunc(
    prompt("Введіть CАМЕ ЧИСЛО (n) від якого ми будемо складати", 1)
  );
}

let m = +Math.trunc(
  prompt("Введіть число(m) до якого ми будемо складати (включно)", 2)
);

while (isNaN(m)) {
  m = +Math.trunc(
    prompt("Введіть CАМЕ ЧИСЛО (m) до якого ми будемо складати (включно)", 2)
  );
}
const skippingEvenNumbers = confirm("Чи потрібно пропускати парні числа?");

let maxNumber = Math.max(m, n);
let minNumber = Math.min(m, n);

for (minNumber; minNumber <= maxNumber; minNumber++) {
  if (skippingEvenNumbers) {
    if (minNumber % 2 === 0) {
      continue;
    }
  }
  sumNumber = minNumber + sumNumber;
}

document.writeln(sumNumber);