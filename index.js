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


let age=18;
    age+=5;
console.log(age);
console.log(!true);
console.log(!false)

let x=10; 
console.log(x>9 && x<20);

let isRaining=true
let isSunny=false

console.log(!isRaining == isSunny && isRaining || isSunny);

let name="John"
console.log(name =="John"); 

if (name=="John"){
    console.log("Hello John");
}

if (5> 9){
    console.log("5 is greater than 9");
} else{
    console.log("5 is not greater than 9");
}

let year=17;
if (year>=18){
    console.log("You are an adult");
}else if (year>=16 || year>18){
    console.log("You are a teenager");
}
else{
    console.log("You are a minor");
}

let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log("Today is " + day);
  
  let car={
    name: "Audi",
    color: "red",
    model: 2020,
    weight:"400kg",
  }
    console.log(car.model);

   let user={
    name: "",
    lastName: "",
    age: 0,
    email: "",
    phone: "",
    address: "",
    hobbies: []
   }

  function userProfileManager(name,lastName,age,email,phone,address,hobbies) {
    user.name= name;
    user.lastName= lastName;
    user.age= age;
    user.email= email;
    user.phone= phone;
    user.address= address;
    user.hobbies= hobbies;

    return user;
  }
  let display = userProfileManager("John", "Doe", 25 , "jonhdoe@gmail.com", "123456789", "123 new way city, New York", ["reading", "traveling"]);
console.log(display);

let display2 = userProfileManager("Jane", "Mick", 30 ,"janemick@gmail.com", "1234567890", "123 new way city, New York", ["swiming", "diving", "cooking"])
console.log(display2);

