'use strict';
/*
 * Циклы (while, do...while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тело цикла (statement)
// }

// let number = 11;

// while (number <= 10) {
//   console.log(number);

//   number += 1;
// }

/*
? Выведите числа от 1 до 50
*/

// let number = 1;

// while (number <= 50) {
//   console.log(number);

//   number += 1;
// }

/*
? Найдите сумму чисел от 1 до 100
 */

// let sum = 0;

// let number = 1;

// while (number <= 100) {
//   sum += number;

//   number += 1;
// }

// console.log(sum);

/*
? Дано число n=1000.
? Делите его на 2 столько раз, пока результат деления не станет меньше 50.
? Какое число получится?
? Посчитайте количество итераций, необходимых для этого, и запишите его в переменную counter.
*/

// let n = 1000;
// let counter = 0;

// while (n > 50) {
//   counter += 1;
//   n /= 2;
// }

// console.log(counter);
// console.log(n);

/*
 * Do While
 */

// let number = 1;

// do {
//   console.log(number);
//   number += 1;
// } while (number <= 3);

/*
? Напишите цикл, который предлагает prompt ввести число, большее 100.
? Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
? Цикл должен спрашивать число пока посетитель не введёт число, большее 100.
? Предполагается, что посетитель вводит только числа;
*/

// let number;

// do {
//   number = Number(prompt('Write your number, bigger than 100'));
// } while (number < 100);

// console.log(number);

/*
 * For
 */

// for (инициализация; условие; пост-выражение) {
// тело цикла
// }

// let index = 1;

// for (;;) {
//   if (index === 4) {
//     break;
//   }

//   console.log(index);
//   index += 1;
// }

/*
? При помощи цикла for выведите чётные числа от 2 до 10. Используйте дериктиву continue
*/

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 === 1) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

/*
? При помощи цикла for найдите число 3 и при нахождении выведите 'Мы нашли 3'. Используйте дериктиву break
*/

// debugger;

// for (let index = 1; index <= 100; index += 1) {
//   console.log(index);

//   if (index === 3) {
//     console.log('Мы нашли 3');
//     break;
//   }
// }

/*
? Напишите программу, которая выводит через console.log все числа от 1 до 100, с тремя исключениями. 
? Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
? а для чисел, делящихся на 5 – ‘Buzz’.
? Для чисел которые кратны 3 и 5 = 'FizzBuzz'
*/

// for (let index = 1; index <= 100; index += 1) {
//   if (index % 3 === 0 && index % 5 === 0) {
//     console.log(index);
//     console.log('FizzBuzz');
//   } else if (index % 5 === 0) {
//     console.log('Buzz');
//   } else if (index % 3 === 0) {
//     console.log('Fizz');
//   }
// }

/*
 ? Выведите методом console.log() звездочки от 1 до 7 штук в виде  треугольника таким образом:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

// let string = '';
// let space = 3;

// for (let i = 1; i <= 7; i += 1) {
//   string += '*';

//   console.log(string);
// }

// Область бачення:

// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

// const number = 20; // 20

// if (true) {
//   const number = 10; // 10

//   console.log(number); // 10
// }

// console.log(number); // 20

// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

// const i = 618;

// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }

// let number = 5;

// if (true) {
//   let number = 10;

//   if (true) {
//     let number = 7;

//     console.log(number);
//   }
// }

// console.log(number);

// for (let i = 1; i <= 5; i += 1) {
//   let i = 5;

//   console.log(i);
// }

// {

// }
