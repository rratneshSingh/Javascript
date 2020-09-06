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

    name = 'Ratnes';

    constructor( radius ){
        this.radius = radius;
        this.move = function(){
            console.log('move');
        }
        // on created object
    }
    draw(){
        console.log('draw');
        this.name = 'jkk'
    }
    // On prototype
}

const c1 = new Circle(1);
// new operator is neccessary - else it will give error
const c2 = new Circle(2);

console.log(c1);
c1.draw();
console.log(typeof Circle);