// condition.js

// let age = 18;

// if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not eligible to vote.");
// }

// // ternary operator
// let umar = 16;
// (umar < 16 )? console.log("you are child") : console.log("you are adult");


// example of if else

/*let userInput = prompt("Enter marks");
if(userInput <= 40) {
console.log("D");
} else if(userInput <= 50) {
    console.log("C");
}else if(userInput <= 60) {
    console.log("B");
}else if(userInput <= 70) {
    console.log("A");
}else{
    console.log("A+");
}*/


// Loops

// let a ;
// for(a = 0; a <= 1000; a++) {
//     console.log("The value of a is: " + a);
// }

/*
sum example
let c = 0;

let n = prompt("Enter a number to sum from 0 to that number:");
n = parseInt(n);
for(a = 0; a<= n; a++){
    c = c + a;
}
 console.log("The value of a is: " + c);
*/

// for of loop  it is used for string and array
/*let str = "hello my name is Ravi";
for (let i of str){
    console.log ("the value od i is ",i);
}
*/

// for in loop it is used for object
/*let student = {
    name: "Ravi",
    age: 20,
    city: "Delhi"
};

for(let i in student){
    console.log("the key is:",i, "and the value is", student[i]);
}*/

// example
/*let n = 100;
for (let i = 1; i <= n; i++) {
    if(i % 2 == 0){
        console.log(i + " is even.");
    }
}*/

// game 
/*let gameNo = 45;
let guess = prompt("Guess the number ");
while(gameNo != guess) {
    console.log("Wrong guess, try again.");
    guess = prompt("Guess the number again ");
}
console.log("Congratulations! You guessed the number " + gameNo + " correctly.");*/

// string example

// let obj ={
//     item : "pen",
//     price: 275,
//     rating: 4.5,
//     discount: 0.1
// };

// console.log(`the product is ${obj.item}, and its price is ${obj.price}`);

//string methods and functions
// let name = "hello";
// let surname = "  javascriopt";

//  let result = name.concat(surname);
// console.log(result); // Output: hellojavascriopt

// let trimmedResult = surname.trim();
// console.log(trimmedResult); // Output: javascriopt

// let upperCaseResult = name.toUpperCase();
// console.log(upperCaseResult); // Output: HELLO

// let lowerCaseResult = name.toLowerCase();
// console.log(lowerCaseResult); // Output: hello

// // let splitResult = name.split("");
// let splitResult = name.split("");
// console.log(splitResult); // Output: ['h', 'e', 'l', 'l', 'o']

let userInput = prompt("Enter your name :");

let a = "@" + userInput + userInput.length ;
console.log(a);

