// Using object.create

const personPrototypes = {
   greeting: function() {
     return  `Hello there ${this.firstName} ${this.lastName}`;
   },
   getsmarried: function(newLastName) {
     this.lastName = newLastName;
   }
};

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsmarried('Thompson');

console.log(mary.greeting());

const bob = Object.create(personPrototypes, {
  firstName: {value: 'Bobby'},
  lastName: {value: 'Ferrer'},
  age: {value: 38}
});

console.log(bob);

