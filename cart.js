"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Cart.prototype.removeProduct = function (productId) {
        this.products = this.products.filter(function (product) { return product.id !== productId; });
    };
    Cart.prototype.calculateTotal = function () {
        return this.products.reduce(function (total, product) { return total + product.price; }, 0);
    };
    Cart.prototype.listProducts = function () {
        return this.products;
    };
    return Cart;
}());
exports.Cart = Cart;
