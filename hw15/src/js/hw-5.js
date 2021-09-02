export function getAverage(numbers) {
    const integers = Array.from(numbers).filter((number) =>
      Number.isInteger(number)
    );
    let numbersSum = 0;
    for (let i = 0; i < integers.length; i++) {
      numbersSum = numbersSum + integers[i];
    }
    const numberAverage = numbersSum / integers.length;
    return numberAverage;
  }