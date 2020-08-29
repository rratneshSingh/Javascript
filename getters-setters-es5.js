function Car() {
    let _noOfTyres = 4;

    this.maxSpeed = 100;

    Object.defineProperty(this, 'noOfTyres', {
        get: function () {
            return _noOfTyres;
        },
        set: function (value) {
            if (!value) {
                console.log('Invalid arguments');
                return;
            }
            _noOfTyres = value;
        }
    })
}

let bmw = new Car();
let audi = new Car();
audi.noOfTyres = 0;
console.log(audi.noOfTyres);