import { Product } from './product';
import { Cart } from './cart';

let cart = new Cart();

let product1 = new Product(1, 'Laptop', 999.99);
let product2 = new Product(2, 'Mouse', 25.50);
let product3 = new Product(3, 'Keyboard', 75.00);

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

console.log('Products in cart:', cart.listProducts());

let total = cart.calculateTotal();
console.log('Total price:', total);

cart.removeProduct(2);
console.log('Products in cart after removal:', cart.listProducts());
