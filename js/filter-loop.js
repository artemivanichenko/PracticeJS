'use strict';
/*
 *  Метод filter()
 */

// массив.filter((element, index, array) => {
// Тело коллбек-функции
// });

/*
? Отфильтруйте массив, что бы остались только чётные
*/

// const numbers = [1, 2, 3, 4, 5, 6];

/*
? Отфильтруем массив, оставив в нем только положительные числа:
*/

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

/*
? Отфильтруйте массив heroes по свойству объекта franchise.
*/

// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

/*
? Пусть функция filterByPrice возвращает массив автомобилей цена которых
? меньше чем значение параметра threshold. Показати два приклади з деструктуризацією в коллбекові і без неї
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

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
? Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.
*/

// console.table(getCarsWithDiscount(cars));

/*
? Пусть функция getCarsWithType возвращает массив автомобилей тип которых
? совпадает со значением параметра type.
*/

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

// ? Оставить только уникальные числа.
// const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

// console.log(filteredNumbers);
