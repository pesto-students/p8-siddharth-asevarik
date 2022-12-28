// Create 3 simple functions where call, bind and apply are used.
// The intention of this exercise isto understand how they work and their differences.(0.5 hours)

function print(age) {
    console.log(`${this.firstname} ${this.lastname} has ${age} years old`);
}

const obj1 = {
    firstname:"jhon",
    lastname:"cena",
    printDetails(){
        console.log(this.firstname,this.lastname);
    }
}
print(this)
//explicity permanently binds to the obj1 
const bindObjExample = obj1.printDetails.bind(obj1)
//calling Bind function
bindObjExample()

//calling print function by passing additional parameters to them resolves "this" to obj1 
print.call(obj1,24)


//Calling Apply method to exsisting print function to resolve this to obj1 (helps resolving this to reference obj1 properties)
//difference between  call and apply is passing parameters in print  params passed by seprating "," and in apply arguments passed 
//in form of [arg1,arg2]
print.apply(obj1,[24])

