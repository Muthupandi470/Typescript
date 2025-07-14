var Car = /** @class */ (function () {
    function Car(model, price, brand) {
        this.model = model;
        this.price = price;
        this.brand = brand;
        Car.cars.push(this);
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.getPrice = function () {
        return this.price;
    };
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.getCarCount = function () {
        return Car.cars.length;
    };
    Car.cars = [];
    return Car;
}());
var car1 = new Car("Model S", 79999, "Tesla");
var car2 = new Car("Mustang", 55999, "Ford");
var car3 = new Car("Civic", 24999, "Honda");
console.log("Total number of cars: ".concat(Car.getCarCount()));
