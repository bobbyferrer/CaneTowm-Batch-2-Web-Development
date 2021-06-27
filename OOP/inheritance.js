// Prototype inheritance
// Person constructor

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}


const person1 = new Person('Ken', 'Hallarces');

// console.log(person1.greeting());


// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// make customer prototype return Customer
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Lee', '333-222-222', 'standard');
const customer2 = new Customer('Ryan', 'Cruz', '555-222-222', 'standard');

console.log(customer1);

// Customer greeting
// Customer.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }


console.log(customer1.greeting());
console.log(customer2.greeting());