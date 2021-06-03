const applePrice = 15.678;
const lycheePrice = 123.965;
const bananaPrice = 90.2345;

console.log(`Яблоки - ${applePrice} грн., 
личи - ${lycheePrice} грн., 
бананчики - ${bananaPrice} грн.`);

//1. Використовуючи вбудований об'єкт Math – виведіть максимальне число
let maxPrice = Math.max(applePrice, lycheePrice, bananaPrice);
console.log (`Максимальное число: ${maxPrice}`);

//2. Використовуючи вбудований об'єкт Math – виведіть мінімальне число
let minPrice = Math.min(applePrice, lycheePrice, bananaPrice);
console.log (`Минимальное число: ${minPrice}`);

//3. Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let fruitPriceSum = applePrice + lycheePrice + bananaPrice;
console.log (`Стоимость всех товаров: ${fruitPriceSum}`);

//4. Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
let applePriceWithoutFractional = Math.floor(applePrice); 
let lycheePriceWithoutFractional = Math.floor(lycheePrice); 
let bananaPriceWithoutFractional = Math.floor(bananaPrice);
let sumPriceWithoutFractional = applePriceWithoutFractional + lycheePriceWithoutFractional + bananaPriceWithoutFractional;
console.log (`Cумма стоимости каждого товара без дробной части: ${sumPriceWithoutFractional}`);

//5. Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let roundToHundredths = Math.round(fruitPriceSum / 100) * 100;
console.log (`Сумма товаров, округленная до сотен: ${roundToHundredths}`);

//6. Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let amountRoundedDown = Math.floor(fruitPriceSum);
let parityValueAnswer = amountRoundedDown % 2 === 0;
console.log (`Четность числа ${amountRoundedDown}: ${parityValueAnswer}`);

//7. Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let restAmount = 500 - fruitPriceSum;
console.log (`Сумма сдачи, при оплате всех товаров с 500 грн: ${restAmount}`);

//8. Виведіть середнє значення цін, округлене до другого знаку після коми
let averageValue = Math.round((fruitPriceSum/3)*100)/100;
console.log (`Среднее значение цен, округленное до второго знака после запятой: ${averageValue}`);

//9. Створіть змінну, в якої збережіть випадкову знижку. Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми. Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
let randomDiscount = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let discountPrice = Math.round(fruitPriceSum*(1 -(randomDiscount*0.01))*100)/100;
let netProfit = discountPrice-(fruitPriceSum/2);
console.log (`Случайная скидка составит: ${randomDiscount} %. Клиент заплатит: ${discountPrice} грн. Чистая прибыль составит: ${netProfit} грн.`);

console.log (`1. Максимальное число: ${maxPrice}
2. Минимальное число: ${minPrice}
3. Стоимость всех товаров: ${fruitPriceSum}
4. Cумма стоимости каждого товара без дробной части: ${sumPriceWithoutFractional}
5. Сумма товаров, округленная до сотен: ${roundToHundredths}
6. Четность числа ${amountRoundedDown}: ${parityValueAnswer}
7. Сумма сдачи, при оплате всех товаров с 500 грн: ${restAmount}
8. Среднее значение цен, округленное до второго знака после запятой: ${averageValue}
9. Случайная скидка составит: ${randomDiscount}%. Клиент заплатит: ${discountPrice} грн. Чистая прибыль составит: ${netProfit} грн.
`);


