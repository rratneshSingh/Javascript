// When we put a new keyword in front of any function call
// it magically turns that function call into a constructor call.

// 4 things happen when new keyword is placed in front of a function call.
// 1. Brand new object is created.
// 2. This object gets linked to a different object(prototype).
// 3. Brand new object gets bound as the this keyword.
// 4. This brand new object is returned from the constructor function.

function foo(){
    this.name = 'Ratnesh';
    this.city = 'Allahabad';
}

var bar = "bar";
var baz = new foo();
// foo();
console.log(baz.constructor);

var a = {
    name: 'jkjk'
}

console.log(a.constructor);



