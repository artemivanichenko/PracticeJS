'use strict';

/*
 * Математические операторы (+, -, *, /, %, **)
 */

// const num = 2;
// const num2 = 3;

// const result = num ** num2;

// console.log(result);

/*
 ? Данно два числа 10 и 20.
 ? Проведите над этими числами математические операции (+ - / *).
*/

//? Проверьте четные ли числа 15, 20, 45, 30.

// const number = 15 * (1 + 2);

// console.log(number);

/*
  ? Данно 90 минут, узнайте сколько в данном числе содержиться часов и минут.
  ? Результат выведите в консоль.
*/

// const minutes = 90;

// const hours = Math.floor(minutes / 60);

// const minutesValue = minutes % 60;

// console.log(hours);

// console.log(minutesValue);

/*
 * Number.parseInt() Number.parseFloat(), приведення до числа
 */

// const string = '25.7px';

// const number = Number.parseInt(string);

// console.log(number);

// const num = Number(prompt('Введите первое число'));
// const num2 = Number(prompt('Введите второе число'));

// const result = num + num2;

// console.log(result);

// let number = '102.5km';
// number = Number.parseFloat(number);

// console.log(number);

/* 
  ? Попросите пользователя ввести число.
  ? Выведите результат в консоль.
  ? Приведите строку к числу.
*/

// const number = Number(prompt(`Write your number`));

// const number = +prompt(`Write your number`);

// console.log(number);

//? Данна строка '24px', достаньте с этой строки целое число.

// const string = '24px';

// const number = Number.parseInt(string);

// console.log(number);

//? Данна строка '25.5%', достаньте с этой строки дробное число.

// const string = '25.5%';

// const number = Number.parseFloat(string);

// console.log(number);

//? Попробуйте привести к числу, данную строку 'abc'.

// const string = 'abc';

// const number = Number.parseFloat(string);

// console.log(number);

//? Запросите у пользователя ввести два числа, сложите их и выведите результат в консоль.

// const num1 = +prompt('Введи перше число')
// const num2 = Number(prompt('Введи друге число'));

// const result = num + num2;

// console.log(result);

/*
 * Об'єкт Math, методи Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

// const num = 12.4;

// const number = Math.round(num);
// console.log(number);

// const minNumber = Math.min(100, Infinity, -Infinity);
// const maxNumber = Math.max(100, 5, -Infinity, '200');

// const number2 = 5 ** 2;
// const number2 = Math.pow(5, 2);
// console.log(number2);

// const randomNum = Math.random();

// console.log(randomNum);

// console.log(minNumber);
// console.log(maxNumber);

/*
  ? Данно число 23.5, примените к нему различный методы округления.
  ? Протестируйте на числах, 23.3, 23.9
*/

// const number = 23.5;

// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));

/*
  ? Попросите пользователя ввести число и степень.
  ? Возведите число в степень и выведете результат в консоль.
*/

// const number = Number(prompt('write your number'));
// const exs = Number(prompt('write your exs'));

// const result = number ** exs;

// console.log(result);

/*
  ? Сгенирируйте рандомное число:
  ? от 0 до 1;
  ? от 10 до 50.
*/

// const min = 10;
// const max = 50;

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
// console.log(randomNumber);

// const number = Number((50.567).toFixed(2));

// console.log(Math.floor(50.55 * 10) / 10);

// const randomNumber = Math.random();

// console.log(randomNumber);

//? Сгенирируйте рандомное число. Минимальное и максимально значение, получить от пользователя

// const min = Number(prompt('write your min number'));
// const max = Number(prompt('write your max number'));

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);
