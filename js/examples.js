'use strict';
/*
? Напиши скрипт, который, для объекта user, последовательно:
? добавляет поле mood со значением 'happy'
? заменяет значение hobby на 'skydiving'
? заменяет значение premium на false, використовуючи уже наявну властивысть у user
? выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

/*
? У нас есть объект, в котором хранятся зарплаты нашей команды.
? Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
? Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

/*
? Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
? Ф-ция считает и возвращает общую стоимость камней с таким именем или строку 'Такого камня не найдено' когда такого имени нету.
*/

/*
? Напиши скрипт управления личным кабинетом интернет банка.
? Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
?
? Типов транзацкий всего два:
? Можно положить либо снять деньги со счета.
?
? Каждая транзакция это объект со свойствами: id, type и amount
*/

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Текущий баланс счета
  balance: 0,
  // Начальный id для транзакции
  startId: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод createTransaction создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */

  /*
   * Метод deposit отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */

  /*
   * Метод withdraw отвечающий за снятие суммы с баланса.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */

  /*
   * Метод getBalance возвращает текущий баланс
   */

  /*
   * Метод ищет и возвращает объект транзации по id или выводит сообщение 'Такой транзакции не существует'
   * если такой транзакции не было
   */

  /*
   * Метод getTransactionTotal возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   * принимает type (withdraw або deposit)
   */
};
