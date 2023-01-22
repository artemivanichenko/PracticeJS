'use strict';
/*
 * Деструктуризация объектов, які проблеми вирішує
 */

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

/*
? Напишите деструктурирующее присваивание, которое:
? свойство firstName присвоит в переменную firstName.
? свойство age присвоит в переменную userAge.
? свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Shevchuk',
//   age: 30,
// };

/*
 * Глубокая деструктуризация объектов, дістати також original та secondary
 */

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

/*
 * Деструктуризация массивов
 */

/*
? Дістати перший та третій елементи масиву, всі інші після третього занести в окремий масив
*/

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

/*
? Дістати значення кольорів та властивість alpha
*/

// const rgb = [0, 255, 34];

/*
? У нас есть объект salaries с зарплатами:
? Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
?
? Если объект salaries пустой, то нужно вернуть null.
? Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
? P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
