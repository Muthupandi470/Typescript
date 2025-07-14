
export let myFullName:string="Muthupandi";

export class Product{
    pId:number;
    pName:string;
    pPrice:number;

    constructor(id:number,name:string,price:number){
        this.pId=id;
        this.pName=name;
        this.pPrice=price;
    }
    productDetails(){
        return `Id:${this.pId} Name:${this.pName} Price:${this.pPrice}`;
    }

}