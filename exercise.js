var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(empId, empName, basicSalary, pr) {
        this.empId = empId;
        this.empName = empName;
        this.basicSalary = basicSalary;
        this.pr = pr;
        this.hra = this.calculateHRA();
        this.da = this.calculateDA();
        this.grossSalary = this.calculateGrossSalary();
    }
    EmployeeSalary.prototype.calculateHRA = function () {
        return this.basicSalary * 0.2;
    };
    EmployeeSalary.prototype.calculateDA = function () {
        return this.basicSalary * 0.1;
    };
    EmployeeSalary.prototype.calculateGrossSalary = function () {
        return this.basicSalary + this.hra + this.da;
    };
    EmployeeSalary.prototype.displayDetails = function () {
        console.log("=== Employee Salary Details ===");
        console.log("Employee ID    : ".concat(this.empId));
        console.log("Employee Name  : ".concat(this.empName));
        console.log("PR : ".concat(this.pr));
        console.log("Basic Salary   : \u20B9".concat(this.basicSalary.toFixed(2)));
        console.log("HRA (20%)      : \u20B9".concat(this.hra.toFixed(2)));
        console.log("DA (10%)       : \u20B9".concat(this.da.toFixed(2)));
        console.log("Gross Salary   : \u20B9".concat(this.grossSalary.toFixed(2)));
    };
    return EmployeeSalary;
}());
// Example usage:
var emp = new EmployeeSalary(101, "Muthupandi", 20000, "Programmer Analyst");
emp.displayDetails();
