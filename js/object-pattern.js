'use strict';

const logFunction = function (userInfo) {
  const { firstName, lastName, age, gender, userEmail, userPhoneNumber } =
    userInfo;

  console.log(firstName, lastName, age, gender, userEmail, userPhoneNumber);
};
