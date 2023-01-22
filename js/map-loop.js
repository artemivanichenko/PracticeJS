'use strict';
/*
 *  Метод map()
 */

// массив.map((element, index, array) => {
//  Тело коллбек-функции
// });

//? Умножьте все числа на 2
// const numbers = [1, 2, 3, 4, 5];

/*
? Перепишите цикл через map
? Код ниже получает из массива строк новый массив, содержащий их длины:
*/

// const wordsArr = ['Є', 'життя', 'на', 'Марсі'];

// const getElementsLength = function (arrOfStr) {
//   const wordsLengthArr = [];

//   for (let str of arrOfStr) {
//     wordsLengthArr.push(str.length);
//   }

//   return wordsLengthArr;
// };

// console.log(getElementsLength(wordsArr)); // [1, 5, 2, 5]

/*

? Создание массива значений Фаренгейта из массива значений Цельсия
? Для перевод из Цельсий в Фаренгейты нужна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

/*
? Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.
*/

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

/*
? Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price
? в зависимости от переданной скидки.
*/

// const makeCarsWithDiscount = (cars, discount) => {};

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
