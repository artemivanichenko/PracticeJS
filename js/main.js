'use strict';
/*
 *  Массивы: литерал массива, элементы, индексация, длина
 */

// const array = [1, 2, 3, 4, 5, 404, 32302, 31];

// const string = 'віфвфі';

// console.log(array[0]);

// array[0] = 44920429;

// array[8] = 42424;

// console.log(string[0]);

// string[1] = 'а';

// console.log(array);

// console.log(array.length);

// console.log(typeof array);

/*
 * Передача по ссылке и по значению, різниця між примітивами та об'єктом
 */

// const arr1 = [1, 2, 3];

// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr2[2] = 5;

// console.log(arr1);
// console.log(arr2);

// let string1 = 'Welcome';

// let string2 = string1;

// console.log(string1);
// console.log(string2);

// string2 = 'To the future';

// console.log(string1);
// console.log(string2);

/*
? Создайте переменную a = 10.
? Создайте и присвойте переменной b -> переменную a
? Вывидите в консоль обе этих переменных
? Измените значение переменной a и ещё раз выведете в консоль
*/

// let a = 10;

// let b = a;

// console.log(a);
// console.log(b);

// a = 50;

// console.log(a);
// console.log(b);

/*
? Создайте массив arr1 = [1, 2, 3].
? Создайте и присвойте массиву arr2 -> массив arr1
? Выве дите в консоль оба эти массива
? Добавьте элемент в массив arr1 и ещё раз выведете оба массива в консоль
*/

// const arr1 = [1, 2, 3];

// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr1[3] = 50;

// console.log(arr1);
// console.log(arr2);

/*
 * Перебор массива циклами for и for...of
 */

// const array = [11, true, false, [], 'qeqweqw'];

// for (let index = 0; index < array.length; index += 1) {

//   console.log(array[index]);
// }

// for (let element of array) {
//   console.log(element);
// }

/*
? Напиши скрипт для перебора массива fruits циклом for.
? Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.
? Нумерация элементов должна начинаться с 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let index = 0; index < fruits.length; index += 1) {
//   console.log(`${index + 1}: ${fruits[index]}`);
// }

/*
? Напиши скрипт поиска самого маленького числа в массиве.
? Код должен работать для любого массива чисел.
? Используй цикл for для решения задачи (перший варіант) і for of (другий варіант).
*/

// const numbers = [-100, -5, -7];

// debugger;

// let minNumber = numbers[0];

// 1 variant
// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < minNumber) {
//     minNumber = numbers[index];
//   }
// }

// 2 variant
// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > minNumber) {
//     continue;
//   }

//   minNumber = numbers[index];
// }

// console.log(minNumber);

// 3 variant

// const array = [1, 2, -33, 3, -50];

// // debugger;

// let minNumber = array[0];

// for (let element of array) {
//   if (element < minNumber) {
//     minNumber = element;
//   }
// }

// console.log(minNumber);

/*
? У нас есть массив с зарплатами сотрудников, нужно посчитать общую сумму зарплат.
? Покажи рішення двома варіантами (з циклом for та for of)
*/

// const salaries = [200, 450, 600, 150, 300];

// let total = 0;

// for (let index = 0; index < salaries.length; index += 1) {
//   total += salaries[index];
// }

// for (let salary of salaries) {
//   total += salary;
// }

// console.log(total);

/*
 * Базовые методы: split и join, indexOf и includes, push, pop, shift, unshift, slice и splice, concat
 */

// const string = 'Welcome to the future!';

// const stringArray = string.split(' ');

// console.log(stringArray);

// const stringFromArray = stringArray.join(' ');

// console.log(stringFromArray);

// const array = [1, 2, 3, 4, 5, 99, 5];

// console.log(array.indexOf(5));

// console.log(array.includes(99));

// array.push(true, false, []);

// console.log(array);

// const element = array.pop();

// console.log(element);

// console.log(array);

// array.unshift(0, 1, 5);

// const element = array.shift();

// console.log(element);

// console.log(array);

// const newArray = array.slice();

// console.log(newArray);

// console.log(array === newArray);

// const newArray = array.concat([1, 2, 3]);

// console.log(newArray);

// console.log(array);

// ? Создайте массив genres с элементами «Jazz» и «Blues».
// ? Добавьте «Rock&Roll» в конец.
// ? Выведите в консоль первый элемент массива.
// ? Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// ? Удалите первый и последний элемент и выведите его в консоль.
// ? Вставьте «Country» и «Reggy» в начало массива.
//  */

// const genres = ['Jazz', 'Blues'];

// genres.push('Rock&Roll');

// console.log(genres);

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// console.log(genres.shift());

// console.log(genres.pop());

// genres.unshift('Country', 'Reggy');

// console.log(genres);

/*
? У нас есть несколько массивов с зарплатами сотрудников из разных отделов, нужно посчитать общую сумму зарплат.
? Придумай варіанти рішення через цикли, через push та через concat
*/

// const managerSalaries = [100, 150, 250, 400, 500];

// const developersSalaries = [800, 1500, 4000];

// 1 variant
// const allSalaries = managerSalaries.concat(developersSalaries);

// let total = 0;

// for (let salary of allSalaries) {
//   total += salary;
// }

// console.log(total);

// 2 variant

// const allSalaries = managerSalaries.slice();

// for (let salary of developersSalaries) {
//   allSalaries.push(salary);
// }

// let total = 0;

// for (let salary of allSalaries) {
//   total += salary;
// }

// console.log(total);

/*
? Напиши скрипт для вычисления площади прямоугольника со сторонами,
? значения которых хранятся в переменной values в виде строки.
? Значения гарантированно разделены пробелом.
*/

// const values = '8 11';

// const array = values.split(' ');

// const square = array[0] * array[1];

// console.log(square);

/*
? Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
? В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
? Порядковый номер имен и телефонов в строках указывают на соответствие.
? Количество имен и телефонов гарантированно одинаковое.
*/

// const names = 'Jacob,William,Solomon,Artemis';

// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(',');

// const phonesArray = phones.split(',');

// console.log(namesArray);

// console.log(phonesArray);

// for (let index = 0; index < namesArray.length; index += 1) {
//   // console.log(namesArray[index]);
//   // console.log(phonesArray[index]);

//   console.log(`${namesArray[index]} - ${phonesArray[index]}`);
// }

/*
? Напиши скрипт который «разворачивает» строку (обратный порядок букв)
? и выводит ее в консоль.
? Покажи три варіанти з push + join, цикл, метод reverse
*/

// const string = 'Welcome';

// 1 variant
// const stringArray = string.split('');

// stringArray.reverse();

// const newString = stringArray.join('');

// console.log(stringArray);

// console.log(newString);

// 2 variant

// let newString = '';

// debugger;

// for (let symbol of string) {
//   newString = symbol + newString;
// }

// console.log(newString);

/*
? У нас есть массив сотрудников, отфльтруйте его, чтобы сотрудники не повторялись
? Показати варіанти з indexOf, includes 
*/

// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];

// const filteredEmployees = [];

// 1 variant
// for (let index = 0; index < employees.length; index += 1) {
//   const employee = employees[index];

//   if (employees.indexOf(employee) === index) {
//     filteredEmployees.push(employee);
//   }
// }

// debugger;

// for (let index = 0; index < employees.length; index += 1) {
//   const employee = employees[index];

//   if (!filteredEmployees.includes(employee)) {
//     filteredEmployees.push(employee);
//   }
// }

// console.log(filteredEmployees);

// ? Сотрудник Shaw уволился, удалите его из массива з допомогою splice + indexOf

// //? Добавьте нового сотрудника Thornton, перед Watkins;

// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];

// const shawIndex = employees.indexOf('Shaw');

// employees.splice(shawIndex, 1);

// employees.splice(1, 0, 'Thornton');

// console.log(employees);

// Розділення з допомогою split та join

/*
? slug
? Отримати результат title-about-array-methods зі строки 'Title about array methods', дайте якомога більше варіантів
*/

// const string = 'Title about array methods';

// const slug = string.split(' ').join('-').toLowerCase();

// console.log(slug);
