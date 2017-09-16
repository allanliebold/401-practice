'use strict';

let person = {
  name: 'allan',
  age: 33,
  speak: function() {
    return `${this.name} is ${this.age}.`;
  }
}

console.log(person);
console.log(person.speak());
console.log('new context:', person.speak.call({ name: 'that guy', age: 100 }));
