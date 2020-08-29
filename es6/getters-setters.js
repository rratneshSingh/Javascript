class Circle {

    _radius = 9;

    get radius() {
        return this._radius;
    }

    set radius(value) {
        debugger;
        if ((typeof value) !== 'number' || value < 0) {
            // throw new Error('Invalid value');
            console.log('Invalid Value');
            return;
        }
        this._radius = value;
    }
}

const c = new Circle();
c.radius = 'jkjk';
console.log(c.radius)