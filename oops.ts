class Employee{
    //data member
    eId:number=101;
    eName:string="Muthu";
    eSalary:number=9876;
    eSingle:boolean=true;

    //Constructor creation
constructor(id:number,name:string,salary:number,isSingle:boolean){
    this.eId = id;
    this.eName = name;
    this.eSalary = salary;
    this.eSingle = isSingle;
}

    //member function
    employeeDetails() {
        return `Id:${this.eId} Name:${this.eName} Salary:${this.eSalary} Single:${this.eSingle}`
    }
}

//create object of class

/*let empObj = new Employee(4742,"Muthu",20000,true);
console.log(empObj.eName);
console.log(empObj.employeeDetails());*/

/*let empObj1 = new Employee(4742,"Muthu",20000,true);
console.log(empObj1.eId);
console.log(empObj1.eName);
console.log(empObj1.eSalary);
console.log(empObj1.eSingle);
console.log(empObj1.employeeDetails());*/

//inheritanace
class Company extends Employee{
    cName:string;
    cAddress:string;

    constructor(id:number,name:string,salary:number,single:boolean,compName:string,compAddr:string){
        super(id,name,salary,single);
        this.cName=compName;
        this.cAddress=compAddr;
    }

    employeeDetails(){
        return `Id:${this.eId} Name:${this.eName} Salary:${this.eSalary} Single:${this.eSingle} Company Name:${this.cName} Address:${this.cAddress}`;
    }
};
let CompanyObj = new Company(4742,"Muthu",20000,true,"Changepond","Chennai");
console.log(CompanyObj.employeeDetails());
