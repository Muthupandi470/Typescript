
class User{
    private userid:string="admin@gmail.com";
    private upass:string="MUTHU";

    get _userid(){
        return this.userid
    }
    set _userid(val:any){
        this.userid=val;
    }
    get _upass(){
        return this.upass
    }
    set _upass(val:any){
        this.upass=val;
        
    }

    userDetails(){
        return `User Id:${this.userid} Password:${this.upass}`
    }
}

let userObj = new User();
console.log(userObj._userid);
console.log(userObj._upass);

userObj._userid="admin1@gmail.com"
console.log(userObj._userid);

userObj._upass="PANDI"
console.log(userObj._upass)