'use strict';
/*
 *  Методы функции call и apply
 */

//* Функции это объекты со своими свойствами и методами

// const greet = function () {
//   console.log('Hello');
// };

// greet.test = 5;

// console.dir(greet);

//* call и apply

//? Вызовите функцию showFullName в контексте объекта user двома способами

// const showFullName = function (message, num) {
//   console.log(`${message} ${this.firstName} ${this.lastName}, ${num}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

//? Вызовите функцию showFullName в контексте объекта anotherUser
// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

//* Одалживание метода

// const createCurrentDate = function () {
//   return [].join.call(arguments, '/');
// };

// console.log(createCurrentDate(2022, 08, 10));

//* bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

//* Метод объекта в роли колбэка

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   // let callback = user.showName;

//   callback();
// };

// const showUserName = user.showName.bind(user);

// someFunction(showUserName);

/*
? Что выведет этот код?
*/

// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const copyFunc = f.bind(user).bind(anotherUser);

// copyFunc();

/*
? Вызов checkPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
? Однако, его вызов приводит к ошибке. Почему?
 */

// const checkPassword = function (ok, fail) {
//   const password = 'rockstar';

//   if (password === 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk, user.loginFail);
