import { Product } from './product';

export class Cart {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter(product => product.id !== productId);
    }

    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    listProducts(): Product[] {
        return this.products;
    }
}
