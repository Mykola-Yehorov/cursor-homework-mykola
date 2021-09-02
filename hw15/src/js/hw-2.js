let sumNumber = 0;

export function returnSumNumber (minNumber, maxNumber, skippingEvenNumbers) {
   for (minNumber; minNumber <= maxNumber; minNumber++) {
        if (skippingEvenNumbers) {
          if (minNumber % 2 === 0) {
            continue;
          }
        }
        sumNumber = minNumber + sumNumber;        
      }
      return sumNumber
}