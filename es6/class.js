// function Circle( radius ){

//     this.radius = radius;

//     this.move = function(){
//         console.log('move');
//     }
// }
// Circle.prototype.draw = function(){
//    console.log('draw');
// }

class Circle{

    constructor( radius ){
        this.radius = radius;
        this.move = function(){
            console.log('move');
        }
        // on created object
    }
    draw(){
        console.log('draw');
    }
    // On prototype
}

const c1 = new Circle(1);
// new operator is neccessary - else it will give error
const c2 = new Circle(2);

console.log(c1);
console.log(typeof Circle);
c1.draw();