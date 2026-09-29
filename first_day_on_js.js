
let myName = "Morgan";
console.log(myName);

let myAge = 19;
console.log(myAge);


console.log(`my name is ${myAge} and my age is ${myAge}`);

if (myAge >= 18)
    console.log("is an adult");
else
    console.log("is not an adult");


let day = "Tuesday";
if (day == "Tuesday")
    console.log(true)


let day = "tuesday" ? console.log(true) : console.log(false);

function daysOnEarth(age) {
    let result = age * 365;
    return result;
}

console.log(daysOnEarth(myAge));




const daysOnEarth = (age) => {
    let result = age * 365;
    console.log(result)
};
daysOnEarth(19);


const checkIsEven = (num) => {
    if (num % 2 === 0);
    return true;
	else
return false;
	}
checkIsEven(5);

const cubed = (num2) => {
    let result = (num2 * num2) * num2
    return result;
}
cubed(5);

class Moose {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    displayDetails() {
        console.log(`the moose is called ${this.name}.`);
        console.log(`and weighs ${this.weight}lbs.`);
    }
}
;

const moose1 = new Moose("Morgan", 1000);
moose1.displayDetails();

const moose2 = new Moose("Johnathan", 900);
moose2.displayDetails();