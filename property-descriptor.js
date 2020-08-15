Object.prototype.hello = function(){
    console.log('hello');
}

let obj = {
    name: 'Ratnesh'
}

// console.log(obj.toString());
console.log(obj.__proto__);
// console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'hello'));
