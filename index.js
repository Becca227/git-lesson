// let name="john"

// console.log(name);

// let age=15
// let newAge=age%4
// {
//     var name="pee"
//     console.log(name);
    
// }

// console.log(name);

// console.log(newAge);

// var x;
// let y;

// x=10;
// y=20;
// let z=x+y
// console.log(z);

// let name="john " +"doe"
// console.log(name);

// let $="Hello World"
// console.log($);

// carName="BMW"
// var carName="Volvo";
// console.log(carName);


function logName(message,name){
    console.log(message + name);
}
function logNameWithoutPerems(){
    console.log("Good Morning")
}

logNameWithoutPerems();
logName("Hello", " John");


function addNumbers(num1,num2,num3){
    let sum=num1**num2+num3;
    console.log(sum)
}
console.log(addNumbers);

function bodyMass(h,w){
    let bmi=w/(h*h);
    console.log(bmi);
}
console.log(bodyMass);

function greet(name){
    return "Hello " + name
}
let greeting = greet("John");
let greeting2 = greet("Doe");
console.log(greeting2);

console.log(greeting);

function discount(price,discount){
    let discountAmount=price*discount/100;
    let finalPrice=price-discountAmount;
    return finalPrice;
}
let finalPrice=discount(2000,3);

console.log(finalPrice);