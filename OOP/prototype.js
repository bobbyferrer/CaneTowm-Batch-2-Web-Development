// Prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
    // const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
};

// calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '05-13-1820');
// const mary = new Person('Mary', 'Reyes', 'March 20 1978');

console.log(john.calculateAge());
// console.log(john.getFullName());

// console.log(mary);
// console.log(mary.getFullName());

// mary.getsMarried('Johnson');

// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('age'));
// console.log(mary.hasOwnProperty('getFullName'));
