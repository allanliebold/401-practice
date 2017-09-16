'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('should return hey Allan!', function() {
      let result = greet.sayHey('Allan');
      assert.ok(result === 'Hey, Allan!', 'not equal to hey Allan!');
    });

    it('should throw missing name error', function() {
      assert.throws(function() {
        greet.sayHey();
      }, 'error not thrown');
    });
  });

  describe('#sayBye', function() {
    it('should return Bye!', function() {
      let bye = greet.sayBye();
      assert.ok(bye === 'Bye!', 'not equal to Bye!');
    });
  });
});
