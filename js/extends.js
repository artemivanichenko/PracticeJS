'use strict';
/*
 * Наследование с extends и super
 */

// class User {
//   #login;
//   #email;

//   constructor({ firstName, lastName, age, login, email } = {}) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.userAge = age;
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   getFullName() {
//     return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
//   }

//   #trimStr(str) {
//     return str.trim();
//   }
// }

// const user = new User({
//   firstName: 'Mable',
//   lastName: 'Cohen',
//   age: 30,
//   login: 'testLogin',
//   email: 'weni@owva.ai',
// });

// class Manager extends User {
//   constructor({ numberOfSales, ...otherProps } = {}) {
//     super(otherProps);
//     this.numberOfSales = numberOfSales;
//   }

//   doManagerWork() {
//     console.log('Занимаюсь продажами');
//   }
// }

// const manager = new Manager({
//   firstName: 'Addie',
//   lastName: 'Burgess',
//   age: 20,
//   login: 'someLogin',
//   email: 'uhmop@balninih.sd',
//   numberOfSales: 20,
// });

// class Developer extends User {
//   constructor({ completedProjects, ...otherProps } = {}) {
//     super(otherProps);
//     this.completedProjects = completedProjects;
//   }

//   doDeveloperWork() {
//     console.log('Пишу проект');
//   }
// }

// const developer = new Developer({
//   firstName: 'Bertha',
//   lastName: 'Byrd',
//   age: 22,
//   login: 'myLogin',
//   email: 'tudeoh@ede.fm',
//   completedProjects: 45,
// });
