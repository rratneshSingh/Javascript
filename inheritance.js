function BMW() {
    Vehicle.call(this);
}

function KTM(owner) {
    this.owner = owner;
}

function Vehicle(){
    this.tyres = 4;
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
