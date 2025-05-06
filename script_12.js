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