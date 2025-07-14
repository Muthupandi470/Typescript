
interface IPerson{
    personDetails();

}

class Organization implements IPerson{

    pName:string;
    pContact:number;
    pAddress:string;

    constructor(name:string,contact:number,address:string){
        this.pName=name;
        this.pContact=contact;
        this.pAddress=address;
    }

    personDetails(){
        return `Name:${this.pName}     Contact:${this.pContact}    Address:${this.pAddress}`;

    }
}
    let organizationObj = new Organization("varun",123,"Chennai");
    console.log(organizationObj.personDetails());
