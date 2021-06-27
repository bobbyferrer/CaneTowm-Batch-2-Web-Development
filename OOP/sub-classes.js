// Sub Classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
   super(firstName, lastName);
   this.phone = phone;
   this.membership = membership;
  }

  static getMemberShipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Reyes', '222-111-222', 'standard');
const ken = new Customer('Ken', 'Hallarces', '000-111-88', 'standard');

console.log(john.greeting());
console.log(ken);

console.log(Customer.getMemberShipCost());