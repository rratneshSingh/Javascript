function Car() {
    let noOfTyres = 4;

    this.maxSpeed = 100;

    Object.defineProperty(this, 'noOfTyres', {
        get: function () {
            return noOfTyres;
        },
        set: function (value) {
            if (!value) {
                console.log('Invalid arguments');
                return;
            }
            noOfTyres = value;
        }
    })
}

let bmw = new Car();
let audi = new Car();
audi.noOfTyres = 0;
console.log(audi.noOfTyres);