function Car(){
    let noOfTyres = 4;

    this.maxSpeed = 100;

    this.getTyres = function(){
        return noOfTyres;
    }

    // this.setTyres = function( tyres ){
    //     noOfTyres = tyres;
    // }
}

let bmw = new Car();
let audi = new Car();

audi.setTyres(8);
console.log(bmw.getTyres());


//bmw - Car scopeObj1 // noOftypres = 4, gettyres, settyres.

// bmw - getTyres, setTyres.


// audi - Car scopeObj2 , noOftyre = 8, getTyres, setTyres.

// audi - getTyres, setTyres

// audi - setTyres(8)