'use strict';

/*
 * async/await
 * асинхронная(async) функция ВСЕГДА возвращает промис.
 * await заставляет функцию ждать выполнения промиса.
 * await нельзя использовать вне асинхронных функций.
 * try/catch для отлова ошибок
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

//? TASK 01
// Перепиши функцію на async/await

// const loadPosts = url => {
//   return fetch(url).then(postsResponse => {
//     if (!postsResponse.ok) {
//       throw new Error(postsResponse.status);
//     }

//     return postsResponse.json();
//   });
// };

// loadPosts(`${BASE_URL}/posts`)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait();
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

// f();
