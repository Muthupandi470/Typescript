class EmployeeSalary {
    empId: number;
    empName: string;
    basicSalary: number;
    pr: string;
   
    hra: number;
    da: number;
    grossSalary: number;
   
    constructor(empId: number, empName: string, basicSalary: number, pr: string) {
      this.empId = empId;
      this.empName = empName;
      this.basicSalary = basicSalary;
      this.pr = pr;
   
      this.hra = this.calculateHRA();
      this.da = this.calculateDA();
      this.grossSalary = this.calculateGrossSalary();
    }
   
    private calculateHRA(): number {
      return this.basicSalary * 0.2;
    }
   
    private calculateDA(): number {
      return this.basicSalary * 0.1;
    }
   
    private calculateGrossSalary(): number {
      return this.basicSalary + this.hra + this.da;
    }
   
    public displayDetails(): void {
      console.log("=== Employee Salary Details ===");
      console.log(`Employee ID    : ${this.empId}`);
      console.log(`Employee Name  : ${this.empName}`);
      console.log(`PR : ${this.pr}`);
      console.log(`Basic Salary   : ₹${this.basicSalary.toFixed(2)}`);
      console.log(`HRA (20%)      : ₹${this.hra.toFixed(2)}`);
      console.log(`DA (10%)       : ₹${this.da.toFixed(2)}`);
      console.log(`Gross Salary   : ₹${this.grossSalary.toFixed(2)}`);
    }
  }
   
  // Example usage:
  const emp = new EmployeeSalary(101, "Muthupandi", 20000, "Programmer Analyst");
  emp.displayDetails();