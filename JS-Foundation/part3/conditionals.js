//Check if a number is greater than another number:


let num1 = 10;
let num2 = 24;
console.log("I am upper code");

if(num2 > num1){
  console.log("num2 is greater than num1");
} else{
  console.log("num2 is smaller than num1");
}
console.log("I am bottom code");


//Checking if a string is equal to another string

let username = "Amey07";
let anotherUsername = "Amey07";

if(username == anotherUsername){
  console.log("Pick another username");
} else{
  console.log("This username will work");
}
  

//Checking if a variable is a number or not 

let score = 22;
if (typeof score === 'number') {
  console.log("Yup this is number");
} else{
  console.log("This is not a number");
}
  

//Checking if a boolean value is true or false:

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("User is loggedin");
} else{
  console.log("User has loggedout");
}

//Checking if an array is empty or not:

let items = [1,2,3];

if (items.length === 0) {
  console.log("Array is empty");
} else{
  console.log(`Array contains ${items.length} elements`);
}
  