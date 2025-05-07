const student = {
    fullName : "Satyamkumar",
    age : 18,
    namefn : function () {
        console.log("Name =", this.fullName);
    }
}

const employee = {
    calcTax(){
        console.log("Tax rate is 10%")
    },
};

const newEmployee ={
    salary : 50000,
};

newEmployee.__proto__ = employee


class TyotaCar{

    constructor(brand, mileage){
      console.log("Creating new objet");
      this.brand = brand;
      this.mileage = mileage;  
    };

    start(){
        console.log("START");
    };

    stop(){
        console.log("STOP");
    };

    setBrand(brand){
        this.brandName = brand;
    };

};

let fortuner = new TyotaCar();
fortuner.setBrand("Fortuner");


class Person{
    constructor(){
        this.species = "Homo Sapiens";
        this.fullname = fullname;
    };
    eat(){
        console.log("Eat");
    };
};

class Engineer extends Person{

    constructor(fullname){
        super(fullname);
    };

    constructor(branch){
        this.branch = branch;
    };

    work(){
        super.eat();
        console.log("Solve Problems. Build's something.");
    };
};

class Doctor extends Person{
    work(){
        console.log("treat patients");
    };
};

let satyamObj = new Engineer();