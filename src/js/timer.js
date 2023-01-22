'use strict';

const TIMER_DEADLINE = new Date(2022, 12, 7);
const timerEl = document.querySelector('.timer__items');

// const timer = {
//   getTimeComponents(diff) {
//     const days = Math.floor(diff / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(diff / 1000 / 60) % 60;
//     const seconds = Math.floor(diff / 1000) % 60;

//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   },

//   declensionNum(num, words) {
//     return words[
//       num % 100 > 4 && num % 100 < 20
//         ? 2
//         : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//     ];
//   },
// };

// timer.start(timerEl, TIMER_DEADLINE);
