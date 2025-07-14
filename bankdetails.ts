export class BankDetails{
    constructor(
   public accno: string,
   public holdername: string,
   private Balance:number
 ) {}
 getBankDetails(): string {
   return `Account_number: ${this.accno}, HolderName: ${this.holdername}, Balance: ${this.Balance}`;
 }
 AmountDeposit(amt:number):void{
this.Balance=this.Balance+amt
}
 AmountWithDraw(amt:number):void{
   if (amt<this.Balance)
   {
       this.Balance=this.Balance-amt
   }else{
   console.log("amount Invalid")
   }
}

}
let bank=new BankDetails('10923024','Muthu',20000);
bank.AmountDeposit(5000);
bank.AmountWithDraw(2000);
console.log(bank.getBankDetails())