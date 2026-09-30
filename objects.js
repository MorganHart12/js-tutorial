//object literals
const car = {
    brand: "Chevrolet",
    model: "Corvette",
    year: 2001,
    owner: {
        name: "Morgan",
    },
    // es6 shorthand function (prefered)
    age() {
        this.value = 2026 - this.year;
        return this.value;
    },
    // traditional
    increment() {
        this.value2 = this.year += 1;
        return this.value2;
    },
    // arrow (avoid)
    decrement() {
        this.value3 = this.year + - 1;
    }
};

console.log(car.model);
console.log(car["model"]);
const key = "brand";
console.log(car[brand]);

console.log(car.age());

// this binding
let c1 = {
    x: 5,
    y: 10
};

let c2 = {
    x: 75,
    y: 55
};


function printCoordinates() {
    console.log(this.x + ', ' + this.y);
}

let c1_func = printCoordinates.bind(c1);

c1_func();