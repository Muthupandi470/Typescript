"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mydata_1 = require("./mydata");
var addition_1 = require("./addition");
console.log(mydata_1.myFullName);
var productObj = new mydata_1.Product(101, "Pixel", 50000);
console.log(productObj.productDetails());
console.log((0, addition_1.default)(100, 200));
