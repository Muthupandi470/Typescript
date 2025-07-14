class Temperature {
    private _celsius: number;

    constructor(celsius: number = 0) {
        this.celsius = celsius;
    }
    public get celsius(): number {
        return this._celsius;
    }
    public set celsius(value: number) {
        if (value < -273.15) {
            throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
        }
        this._celsius = value;
    }
    public get fahrenheit(): number {
        return this._celsius * 9/5 + 32;
    }
    public set fahrenheit(value: number) {
        this.celsius = (value - 32) * 5/9;
    }
    public get kelvin(): number {
        return this._celsius + 273.15;
    }
    public set kelvin(value: number) {
        this.celsius = value - 273.15;
    }
    public display(): string {
        return `Celsius: ${this.celsius.toFixed(2)}°C, Fahrenheit: ${this.fahrenheit.toFixed(2)}°F, Kelvin: ${this.kelvin.toFixed(2)}K`;
    }
    public static isValidCelsius(temp: number): boolean {
        return temp >= -273.15;
    }
}
try {
    console.log("Temperature Converter");
    const temp1 = new Temperature(25);
    console.log(temp1.display());
    temp1.celsius = 100;
    console.log(`Water boiling point: ${temp1.fahrenheit.toFixed(2)}°F`);
    temp1.fahrenheit = 32;
    console.log(`Water freezing point: ${temp1.celsius.toFixed(2)}°C`);
    temp1.kelvin = 0;
    console.log(`Absolute zero: ${temp1.display()}`);
    console.log("\nTesting invalid temperature:");
    temp1.celsius = -300;
} catch (error) {
    console.error(`Error: ${(error as Error).message}`);
}
console.log(`\nIs -300°C valid? ${Temperature.isValidCelsius(-300) ? "Yes" : "No"}`);
