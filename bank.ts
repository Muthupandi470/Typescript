class BankAccount {
    public readonly accountNumber: string;
    public readonly holderName: string;
    private balance: number;
  
    constructor(accountNumber: string, holderName: string, initialBalance: number = 0) {
      this.accountNumber = accountNumber;
      this.holderName = holderName;
      this.balance = initialBalance;
    }
  
    public deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }

    public withdraw(amount: number): void {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
      } else if (amount > this.balance) {
        console.log("Insufficient funds for withdrawal.");
      } else {
        this.balance -= amount;
        console.log(`Withdrew: $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
      }
    }
  
    public displayBalance(): void {
      console.log(`Account ${this.accountNumber} balance: $${this.balance.toFixed(2)}`);
    }
  
    public getBalance(): number {
      return this.balance;
    }
  }
  
  const myAccount = new BankAccount("CNB987654321", "Muthupandi", 1000);
  myAccount.displayBalance();
  myAccount.deposit(500);
  myAccount.withdraw(200);
  myAccount.withdraw(2000);
  console.log(`Account holder: ${myAccount.holderName}`);
  console.log(`Current balance via getter: $${myAccount.getBalance()}`);
  