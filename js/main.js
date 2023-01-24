'use strict';
/*
 * Ветвления if
 */

// if (условие) {
// тело if
// }

// const number = 30;

// if (number <= 5) {
//   console.log(`Hi from if!`);
// } else if (number >= 10 && number <= 20) {
//   console.log(`Hi from else if!`);
// } else {
//   console.log(`Hi from else!`);
// }

// const num = 3;

// if (num > 5) {
//   console.log('Hello!');
// }

/*
? Дана строка, состоящая из символов, например, 'abcde'.
? Проверьте, что первым символом этой строки является буква 'a'.
? Если это так - выведите 'да', в противном случае выведите 'нет'.
*/

const string = 'abcde';

// if (string.startsWith('a')) {
//   console.log(`Так!`);
// } else {
//   console.log('Ні!');
// }

// if (string[0] === 'a') {
//   console.log(`Так!`);
// } else {
//   console.log('Ні!');
// }

/*
? Запросить у пользователя число, если число равно 10,
? то выведите 'Верно', иначе выведите 'Неверно'.
*/

// const number = Number(prompt('Write your number'));

// if (number === 10) {
//   console.log(`Вірно`);
// } else {
//   console.log(`Невірно`);
// }

/*
? В переменной min лежит число от 0 до 59.
? Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
? [0 до 15) - первая четверть часа
? [15 до 30) - вторая четверть часа
? [30 до 45) - третья четверть часа
? [45 до 60) - четвёртая четверть часа
*/

// const min = 33;

// if (min >= 0 && min < 15) {
//   console.log('first quarter');
// } else if (min >= 15 && min < 30) {
//   console.log('second quarter');
// } else if (min >= 30 && min < 45) {
//   console.log('third quarter');
// } else if (min >= 45 && min < 60) {
//   console.log(`fourth quarter`);
// } else {
//   console.log(`Write correct minutes count`);
// }

/*
? Напишите код, который будет спрашивать:
? 'Какое «официальное» название JavaScript?'
? Если пользователь вводит «ECMAScript»,
? то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

// const message = prompt('What is official JavaScript name?') || '';

// if (message.toLowerCase().includes('ECMAScript'.toLowerCase())) {
//   console.log('Corrent!');
// } else {
//   console.log('Dont you know? It is ECMAScript');
// }

/*
? Напишите код, который получает число через prompt, а затем выводит в console.log:
? 1, если значение больше нуля,
? -1, если значение меньше нуля,
? 0, если значение равно нулю.
? Предполагается, что пользователь вводит только числа.
*/

// const number = Number(prompt('Write your number'));

// if (number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
? Проверьте с помощью объекта navigator и свойства userAgent
? какой браузер у пользователя, результат вывести в консоль
*/

// const userBrowser = navigator.userAgent;

// console.log(userBrowser);

// if (
//   userBrowser.includes('Chrome') ||
//   userBrowser.includes('Mozilla') ||
//   userBrowser.includes('Safari')
// ) {
//   console.log('You are using webkit browser');
// }

/*
 * Switch case
 */

// switch (значение) {
//   case значение: {
//     инструкции;
//     break;
// }

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }

// const number = '5';

// switch (number) {
//   case 1: {
//     console.log(`Your number is 1`);
//     break;
//   }

//   case 5: {
//     console.log(`Your number is 5`);
//     break;
//   }

//   default: {
//     console.log(`Your number is out of range`);
//     break;
//   }
// }

/*
?  Перепишите код с использованием одной конструкции switch:
*/

// const number = Number(prompt('Введите число между 0 и 3'));

// if (number === 0) {
//   alert('Вы ввели число 0');
// } else if (number === 1) {
//   alert('Вы ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// } else {
//   alert('Вы ввели какое-то другое число');
// }

// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;

//   case 1:
//     alert('Вы ввели число 1');
//     break;

//   case 2: {
//   }

//   case 3:
//     {
//     }

//     alert('Вы ввели число 2, а может и 3');
//     break;

//   default:
//     alert('Вы ввели какое-то другое число');
//     break;
// }

/*
 * Тернарный оператор
 */

//<условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно>

/*
? Перепишите конструкцию if с использованием условного оператора '?':
*/
// const a = 2;
// const b = 1;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// const result = a + b < 4 ? 'Мало' : 'Багато';

// console.log(result);

/*
?  Перепишите if..else с использованием нескольких тернарных операторов '?'.
*/

// const login = '';

// const message =
//   login === 'Працівник'
//     ? 'Привіт'
//     : login === 'Директор'
//     ? 'Доброго дня'
//     : login === ''
//     ? 'Немає логіну'
//     : '';

// if (login === 'Сотрудник') {
//   message = 'Привет';
// } else if (login === 'Директор') {
//   message = 'Здравствуйте';
// } else if (login === '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// console.log(message);
