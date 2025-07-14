var Temperature = /** @class */ (function () {
    function Temperature(celsius) {
        if (celsius === void 0) { celsius = 0; }
        this.celsius = celsius;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        get: function () {
            return this._celsius;
        },
        set: function (value) {
            if (value < -273.15) {
                throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
            }
            this._celsius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return this._celsius * 9 / 5 + 32;
        },
        set: function (value) {
            this.celsius = (value - 32) * 5 / 9;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "kelvin", {
        get: function () {
            return this._celsius + 273.15;
        },
        set: function (value) {
            this.celsius = value - 273.15;
        },
        enumerable: false,
        configurable: true
    });
    Temperature.prototype.display = function () {
        return "Celsius: ".concat(this.celsius.toFixed(2), "\u00B0C, Fahrenheit: ").concat(this.fahrenheit.toFixed(2), "\u00B0F, Kelvin: ").concat(this.kelvin.toFixed(2), "K");
    };
    Temperature.isValidCelsius = function (temp) {
        return temp >= -273.15;
    };
    return Temperature;
}());
try {
    console.log("=== Temperature Converter ===");
    var temp1 = new Temperature(25);
    console.log(temp1.display());
    temp1.celsius = 100;
    console.log("Water boiling point: ".concat(temp1.fahrenheit.toFixed(2), "\u00B0F"));
    temp1.fahrenheit = 32;
    console.log("Water freezing point: ".concat(temp1.celsius.toFixed(2), "\u00B0C"));
    temp1.kelvin = 0;
    console.log("Absolute zero: ".concat(temp1.display()));
    console.log("\nTesting invalid temperature:");
    temp1.celsius = -300;
}
catch (error) {
    console.error("Error: ".concat(error.message));
}
console.log("\nIs -300\u00B0C valid? ".concat(Temperature.isValidCelsius(-300) ? "Yes" : "No"));
