'use strict';
module.exports = function() {
  var randomNumber = ((Math.random() * 1000000) + 1);

  return function () {
    return randomNumber;
  };
};

