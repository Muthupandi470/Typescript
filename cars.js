var Car = /** @class */ (function () {
    function Car(model, price, brand) {
        this.model = model;
        this.price = price;
        this.brand = brand;
        Car.cars.push(this);
    }
    Object.defineProperty(Car.prototype, "Model", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Price", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Brand", {
        get: function () {
            return this.brand;
        },
        enumerable: false,
        configurable: true
    });
    Car.getCarCount = function () {
        return Car.cars.length;
    };
    Car.displayAllCars = function () {
        console.log("list of all cars:");
        this.cars.forEach(function (car, index) {
            console.log("".concat(index + 1, ". ").concat(car.Brand, " ").concat(car.model, " -\u20B9 ").concat(car.Price));
        });
    };
    Car.cars = [];
    return Car;
}());
var car1 = new Car("Model S", 79999, "Tesla");
var car2 = new Car("Mustang", 55999, "Ford");
var car3 = new Car("Civic", 24999, "Honda");
console.log("Total number of cars: ".concat(Car.getCarCount()));
Car.displayAllCars();
