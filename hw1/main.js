const apple = 15.678, lychee = 123.965, banana = 90.2345;

console.log(`Яблоки - ${apple} грн., личи - ${lychee} грн., бананчики - ${banana}грн.`);

//1. Використовуючи вбудований об'єкт Math – виведіть максимальне число
console.log (`Максимальное число: ${Math.max(apple, lychee, banana)}`);

//2. Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log (`Минимальное число: ${Math.min(apple, lychee, banana)}`);

//3. Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let fruitPriceSum = apple + lychee + banana;
console.log (`Стоимость всех товаров: ${fruitPriceSum}`);

//4. Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
//let= appleWithoutFractional = Math.trunc(apple), lycheeWithoutFractional = Math.trunc(lychee), nutsWithoutFractional = Math.trunc(banana);
let = appleWithoutFractional = Math.floor(apple), lycheeWithoutFractional = Math.floor(lychee), nutsWithoutFractional = Math.floor(banana);
console.log (`Cумма стоимости каждого товара без дробной части: ${appleWithoutFractional + lycheeWithoutFractional + nutsWithoutFractional}`);

//5. Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let roundToHundredths = Math.round(fruitPriceSum / 100) * 100;
console.log (`Сумма товаров, округленная до сотен: ${roundToHundredths}`);

//6. Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let amountRoundedDown = Math.floor(fruitPriceSum);
let parityValue = (amountRoundedDown % 2 == 0) ? `Сумма товаров является четным числом: ${amountRoundedDown}` : `Сумма товаров является нечетным числом: ${amountRoundedDown}`;
console.log (parityValue);

/*if(amountRoundedDown % 2 == 0)
console.log('Сумма товаров является четной - ',  amountRoundedDown);
else
console.log('Сумма товаров является нечетной -',  amountRoundedDown);*/


//7. Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
console.log (`Сумма сдачи, при оплате всех товаров с 500 грн: ${500 - fruitPriceSum}`);

//8. Виведіть середнє значення цін, округлене до другого знаку після коми
let averageValue = Math.round((fruitPriceSum/3)*100)/100;
console.log (`Среднее значение цен, округленное до второго знака после запятой: ${averageValue}`);

//9. Створіть змінну, в якої збережіть випадкову знижку. Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми. Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
let randomDiscount = Math.round(Math.random (100)*100);
let discountPrice = Math.round(fruitPriceSum*(1 -(randomDiscount*0.01))*100)/100;
let netProfit = discountPrice-(fruitPriceSum/2);
console.log (`Случайная скидка составит: ${randomDiscount} %. Клиент заплатит: ${discountPrice} грн. Чистая прибыль составит: ${netProfit} грн.`);

console.log (`1. Максимальная цена: ${Math.max(apple, lychee, banana)}
2. Минимальная цена: ${Math.min(apple, lychee, banana)}
3. Стоимость всех товаров: ${fruitPriceSum}
4. Cумма стоимости каждого товара без дробной части: ${appleWithoutFractional + lycheeWithoutFractional + nutsWithoutFractional}
5. Сумма товаров, округленная до сотен: ${roundToHundredths}
6. ${parityValue}
7. Сумма сдачи, при оплате всех товаров с 500 грн: ${500 - fruitPriceSum}
8. Среднее значение цен, округленное до второго знака после запятой: ${averageValue}
9. Случайная скидка составит: ${randomDiscount} %. Клиент заплатит: ${discountPrice} грн. Чистая прибыль составит: ${netProfit} грн.
`);


