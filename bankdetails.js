"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDetails = void 0;
var BankDetails = /** @class */ (function () {
    function BankDetails(accno, holdername, Balance) {
        this.accno = accno;
        this.holdername = holdername;
        this.Balance = Balance;
    }
    BankDetails.prototype.getBankDetails = function () {
        return "Account_number: ".concat(this.accno, ", HolderName: ").concat(this.holdername, ", Balance: ").concat(this.Balance);
    };
    BankDetails.prototype.AmountDeposit = function (amt) {
        this.Balance = this.Balance + amt;
    };
    BankDetails.prototype.AmountWithDraw = function (amt) {
        if (amt < this.Balance) {
            this.Balance = this.Balance - amt;
        }
        else {
            console.log("amount Invalid");
        }
    };
    return BankDetails;
}());
exports.BankDetails = BankDetails;
var bank = new BankDetails('10923024', 'Muthu', 20000);
bank.AmountDeposit(5000);
bank.AmountWithDraw(2000);
console.log(bank.getBankDetails());
