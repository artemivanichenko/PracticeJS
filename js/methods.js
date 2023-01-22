'use strict';

/*
 * Методы объекта и this при обращении к свойствам в методах
 */

/*
 ? Написати наступні методи:
 * - changeTitle(newTitle) - изменяет название фильма
 * - addActor(newActor) - добавляет актёра
 * - updateRating(newRating) - обновляет рейтинг фильма
 * - isAdult - проверяет возрастное ограничение на фильм
 */

const filmDuna = {
  title: 'Duna',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],
  adult: false,
};
