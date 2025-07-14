"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var product_1 = require("./product");
var cart_1 = require("./cart");
var cart = new cart_1.Cart();
var product1 = new product_1.Product(1, 'Laptop', 999.99);
var product2 = new product_1.Product(2, 'Mouse', 25.50);
var product3 = new product_1.Product(3, 'Keyboard', 75.00);
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
console.log('Products in cart:', cart.listProducts());
var total = cart.calculateTotal();
console.log('Total price:', total);
cart.removeProduct(2);
console.log('Products in cart after removal:', cart.listProducts());
