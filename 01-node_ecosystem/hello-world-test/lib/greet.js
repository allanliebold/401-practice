'use strict';

module.exports = exports = {};

exports.sayHey = function(name) {
  if (arguments.length === 0)
    throw new Error('name not provided');
  return `Hey, ${name}!`;
}

exports.sayBye = function() {
  return 'Bye!';
}
