'use strict'
const Circle = function(){
    this.draw = function() {
        console.log(this);
    }
}

const c = new Circle();
c.draw();
const draw = c.draw;
draw();

// If not is strict mode this inside draw will refer to global when draw called as a standalone function.
// But if in strict mode this -> undefined => this happens because strict mode does more error checking and prevents
// accidental modification of the global/window object.