'use strict';

/*
 *  Контекст вызова this
 */

/*
 * this существует только фнутри функций.
 * На контекст не влияет то где функция была //!ОБЪЯВЛЕНА.
 * На контекст влияет то где функция //!ВЫЗЫВАЕТСЯ.
 */

//TODO: Расмотрим как this ведёт себя в методах

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showThis();
// user.showName();

// anotherUser.showThis();
// anotherUser.showName();

//TODO: Расмотрим как this ведёт себя в обычных функциях (строгий, не строгий режим)

//? Function expression

//? Function declaration

//? Arrow function

//TODO: Присвоение функции как метода объекта

// const showThis = function () {
//   // this = user;
//   console.log(`this ----> `, this);
// };

// const showThisName = function () {
//   // this = user;
//   console.log(`this name is: ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showThis = showThis;
// user.showThisName = showThisName;

// user.showThis();
// user.showThisName();

//TODO: Вызов метода объекта без контекста. Передача реалізації
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

// const showUserThis = user.showThis;
// const showUserName = user.showName;

// showUserThis();
// showUserName();

//TODO: This в callback функциях

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
//   // let callback = user.showThis;

//   callback();
// };

// someFunction(user.showThis);

//TODO: This в стрелочных функциях. Стрелочные функции не имеют своего this, this в стрелках всегда ссылается на родительский this.

/*
? Напишіть метод changeAge який змінюватиме вік користувача через стрілочну функцію? що відбудеться? зробіть, щоб все працювало вірно
*/

// const user = {
//   name: 'Luis',
//   age: 30,

// };

// user.changeAge(40);

/*
? Каким будет результат выполнения этого кода?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const goFn = user.go;

// goFn();

/*
? Здесь функция makeUser возвращает объект.
? Каким будет результат при обращении к свойству объекта ref? Почему?
*/

// const makeUser = function () {
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user);
// console.log(user.ref.name);

/*
? Каким будет результат console.log
*/

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user);
// console.log(user.ref().name);

/*
? Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
? Напишіть методи об'єкта ladder: up - піднятись на сходинку вище, down - опуститись на сходинку нижче, showStep - показати сходинку
*/

// const ladder = {
//   step: 0,
// };

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep();
