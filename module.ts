import {myFullName, Product} from "./mydata";

import add from "./addition";

console.log(myFullName);
let productObj =  new Product(101,"Pixel",50000);
console.log(productObj.productDetails());
console.log(add(100,200));