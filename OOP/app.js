// Object literal

// const person = {
//   name: 'bob'
// }

// // Person constructor
// function Person() {
//   this.name = 'bob';
// }

// const bob = new Person()

// console.log(bob);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const bob = new Person('bob', 38);
// const ranvil = new Person('ranvil', 24);

// console.log(ranvil);
// console.log(bob);

// Constructor and this. keyword

// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const bob = new Person('Bob', '05-13-83');
const ranvil = new Person('Ranvil', '05-23-97');

console.log(bob.calculateAge());
console.log(ranvil.calculateAge());