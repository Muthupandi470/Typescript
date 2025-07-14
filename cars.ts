class Car {
    private static cars: Car[] = [];
    private model: string;
    private price: number;
    private brand: string;

    constructor(model: string, price: number, brand: string) {
        this.model = model;
        this.price = price;
        this.brand = brand;
        Car.cars.push(this);
    }
    public getModel(): string {
        return this.model;
    }
    public getPrice(): number {
        return this.price;
    }
    public getBrand(): string {
        return this.brand;
    }
    public static getCarCount(): number {
        return Car.cars.length;
    }
}
const car1 = new Car("Model S", 79999, "Tesla");
const car2 = new Car("Mustang", 55999, "Ford");
const car3 = new Car("Civic", 24999, "Honda");

console.log(`Total number of cars: ${Car.getCarCount()}`);
