class Car {
    static cars: Car[] = [];

    constructor(private model: string, private price: number, private brand: string) {
        Car.cars.push(this);
    }
    get Model(): string {
        return this.model;
    }
    get Price(): number {
        return this.price;
    }
    get Brand(): string {
        return this.brand;
    }
    static getCarCount(): number {
        return Car.cars.length;
    }
    static displayAllCars(){
        console.log("list of all cars:");
        this.cars.forEach((car,index) =>{
            console.log(`${index + 1}. ${car.Brand} ${car.model} -₹ ${car.Price}`);
        });
    }
}


let car1 = new Car("Model S", 79999, "Tesla");
let car2 = new Car("Mustang", 55999, "Ford");
let car3 = new Car("Civic", 24999, "Honda");

console.log(`Total number of cars: ${Car.getCarCount()}`);
Car.displayAllCars();
