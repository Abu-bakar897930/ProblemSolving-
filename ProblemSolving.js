// 1
//    Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ; 

// 2
// On one single line, declare three variables with the following names and values:

// firstName = "John"
// lastName = "Doe"
// age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

let firstName = "John";  // write variable name
let lastName = "Doe"; //write variable values 
let age = 35; // write variable name and values both 


// 3
// Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x *= y // what will be the value of x ? 




// 4
// 1.Use comments to describe the correct data type of the following variables:

let length = 16; // data type is number? 
let last_Name = "Johnson"; // data type is string ? 

console.log(typeof(length));

console.log(typeof(last_Name));



const x = {
  firstName: "John",  
  lastName: "Doe"
};    // data type is object ? 

console.log(typeof(x));



// 5
// Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}
myFunction()

// call the function and see the output 



// 6

// 1. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").

const person ={
    name:'john',
     age : 50
};

alert(`${person.name} is ${person.age}`);

// 7
{/* 7. <button onclick="alert('Try to fix it!')">Click me.</button> */}
  

// 8

// 1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
alert("the number of items in an array is : " + cars.length);

// 2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 
   Brand[0]="Ford";
   console.log(Brand);


  //  9
//    1. Use the correct Math method to create a random number.

const random_number = Math.random()
alert(random_number)


//    2. Use the correct Math method to return the largest number of 10 and 20.
   const largest_number= Math.max(10,20);

   console.log(largest_number);

   //    3. Use the correct Math method to get the square root of 9.
      const square_root= Math.sqrt(9);

   console.log(square_root);


  //  10

  //  1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

alert( x > y); // ? 



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

const aeg = 10
const ternary_operator= aeg < 18 ? "Too young" :"Old enough";
alert(ternary_operator)


   
// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
// x = 10;
// y = 5;

// alert() // ? 



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

