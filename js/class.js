'use strict';
/*
 * Классы: объявление, конструктор, методы
 * Приватные свойства и методы
 * Статические свойства и методы
 * Геттеры и сеттеры
 */

class User {
  #userEmail;

  static test = 5;

  constructor(params) {
    const { firstName, lastName, age, hairColor, eyesColor, gender, email } =
      params;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.legs = 2;
    this.hands = 2;
    this.eyes = 2;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    this.gender = gender;
    this.#userEmail = email;
  }

  changeHairColor(newColor) {
    this.hairColor = newColor;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get email() {
    return this.#userEmail;
  }

  set email(newEmail) {
    this.#userEmail = newEmail;
  }
}
