var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};



var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName())
console.log(bob.getLastName())
console.log(bob.getFullName())
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName())
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName())
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFirstName())
console.log(bob.getLastName())
