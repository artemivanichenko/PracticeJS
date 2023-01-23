'use strict';
/*
 * Конкатенация строк, шаблонные строки
 */

// const string1 = `GoIt`;

// const string2 = `Academy`;

// // const result = string1 + ' ' + string2;

// // console.log(result);

// const result = `${string1} ${Math.random()} 100 + 400`;

// console.log(result);

/*
  ? Запросите у пользователя имя с возрастом и выведете в консоль сообщение:
  ? Hello имя_пользователя, your age is возраст_пользователя .
*/

// const age = prompt(`Write your age`);
// const name = prompt(`Write your name`);

// const message = `Hello ${name.toUpperCase()}, your age is ${age}.`;

// console.log(message);

//? Выполните задачу выше, используя шаблонные строки

/*
 * Свойства и Методы строк endsWith, slice, includes, indexOf, toLowerCase, toUpperCase, replace,
 * replaceAll властивість length, індексування
 */

// const string = 'Welcome! to the to future!';

// // console.log(string[string.length - 1]);

// const modifiedString = string.replaceAll('!', '?').toLowerCase();

// // console.log(string);
// console.log(modifiedString);

//? Запросите у пользователя имя и узнайте из скольких символов, состоит имя.

// const name = prompt('Write your name');

// console.log(name.length);

//? Попросите пользователя ввести email и переведите в нижний регистр.

// const email = prompt('Write your email');

// console.log(email.toLowerCase());

//? Попросите пользователя ввести email и переведите в верхний регистр

// const email = prompt('Write your email');

// console.log(email.toUpperCase());

/*
  ? Есть строка 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Узнайте есть ли в этой строке язык: 'JavaScript', или 'JS'?.
  ? Если есть, узнайте позицию на которой находиться данная подстрока
*/

// const string = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';

// const isIncludes = string.includes('JS') || string.includes('JavaScript');

// const index = string.indexOf('JdasdsaS');

// console.log(index);

//? У нас есть строка '24px', узнайте на что заканчивается данная строка, на %, rem, em или px;

// const string = '24px';

// console.log(string.endsWith('%'));

//? У нас есть строка '23,4', замените запятую на точку

// const string = '23,4';

// const resultString = string.replace(',', '.');

// console.log(resultString);

/*
  ? У нас есть строка:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замените все вхожденя dog на monkey.
*/

// const string =
//   'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(string.replaceAll('dog', 'monkey'));

//? У нас есть дата в формате '12:05:21', замените (:) на (.)

// const string = '12:05:21';

// console.log(string.replaceAll(':', '.'));

/*
  ? Данна строка 'Vasyl Pupkin is 24 years old'.
  ? Скопируйте с этой строки отдельно имя с фамилией и отдельно возраст.
*/

// const string = 'Vasyl Pupkin is 24 years old';

// console.log(string.slice(0, 12));

// console.log(string.slice(16, 18));
