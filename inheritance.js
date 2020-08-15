function BMW() {
}

function KTM(owner) {
    this.owner = owner;
}

function Vehicle(){
}

Vehicle.prototype.start = function(){
    console.log('Start engine');
}
Vehicle.prototype.speed = function(){
    console.log('Speeding');
}

BMW.prototype = Object.create(Vehicle.prototype);
BMW.prototype.constructor = BMW;

var ktmObj1 = new KTM('Ratnesh');
var ktmObj2 = new KTM('Pragya');
var bmwObj = new BMW();

console.log(BMW.prototype.constructor);