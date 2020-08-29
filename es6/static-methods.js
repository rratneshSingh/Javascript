//We create static method to craete utility function that does not gets tied to a particular object.


class Circle{

    constructor( radius ){
        this.radius = radius;
        this.move = function(){
            console.log('move');
        }
        // on created object
    }

    draw(){
        console.log('move');
    }
    // On prototype

    //Static Method
    static sayHelloStatic(){
        console.log('sayHelloStatic');
    }
    // On Circle constructor function
}

const c = new Circle();
//console.log(c.sayHelloStatic()); Invalid
Circle.sayHelloStatic();
// c.sayHelloStatic();
