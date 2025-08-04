// Array
/*let student = ["Ravi", "Kumar", "Singh"];
student[0] = "vishal";
for(let i = 0; i< student.length; i++){
    console.log(student[i]);
}
console.log(student);
// for of loop
for(let namme of student){
    console.log(namme);
}*/

//question solving 
/*
let marks = [10, 20, 30, 40, 50];
let sum = 0;
for(let i = 0; i< marks.length; i++){
    sum += marks[i];
}
console.log("Sum of marks is: " + sum);
let average = sum / marks.length;
console.log("average marks is" ,average);
*/

//practice question 

// let items = [250,450,900,65,300];
// index = 0;
// for(let i of items){
//     // console.log(`item at index is ${index}` , i);
//     offer = i / 10;
//     i = i - offer;
//     console.log("items after discount is " +i);

// }

// let items = [250, 450, 900, 65, 300];
// for(let i = 0; i < items.length; i++) {
//     let offer = items[i]/ 10;
//     items[i] = items[i] - offer;
// }
// console.log(items);

// array functions 

// let items = [250, 450, 900, 65, 300];

// items.push(1000); // adds an item to the end of the array
// console.log(items);
// items.pop(); // removes the last item from the array
// console.log(items);
// let deleted = items.pop(); // removes the last item and returns it
// console.log(deleted); 

// console.log(items.toString()); // converts the array to a string

// concat function
/*
let student1 = ["Ravi", "Kumar", "Singh"];
let student2 = ["Vishal", "Kumar", "Sharma"];

 let student = student1.concat(student2);
 console.log(student);
  // shift and unshift functions

  student1.unshift("NewStudent"); // adds an item to the beginning of the array
  console.log(student1);
  student1.shift();
  console.log(student1);

  //slice and splice functions
  let sliced = student.slice(1, 3); // returns a new array with the specified range
  console.log(sliced);
  let spliced = student.splice(1, 2, "NewStudent1", "NewStudent2"); // removes items and adds new items
  console.log(spliced);*/

  //practice question
/*
  let company = ["Google", "Microsoft", "Apple", "Amazon", "Facebook"];
  company.shift(0);
  console.log(company);
  company.splice(2,1,"teska");
  console.log(company);
  company.push("Nvidia");
  console.log(company);*/

  // functions in javascript

//   function hello (){
//     console.log("hello my name is Ravi");
//     console.log("i am a software developer");


//   }
//   hello();
//   hello();

//   function sum(a, b) {
//     console.log(`sum of ${a} and ${b} is :  ${a + b}`);
//   }

//   sum(10,12);

  // function with return value
 /* function multiply(a, b) {
    multi = a *b;
    return multi;
  }
 let result = multiply(10, 20);
 console.log(`multiply of two numbers are :${result}`);

 //function with default parameters 

 function name (name = "Ravi"){
    console.log(`my name is ${name}`);
 }
 name("vishal");
 name();*/

 // Arrow function 

// const sum =(a,b) =>{
//     return a + b;
// }
// let result = sum(4,5);
// console.log(result);
/*
function countVowel (str){
    count = 0;
    for(char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);

}
countVowel("hello my name is ravi");
*/

// arrow.each function

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function myfun(val){
//     console.log(val);
// })

// let cities = ["Delhi", "Mumbai", "Bangalore", "Chennai"];
// cities.forEach((city) => {
//     console.log(city.toUpperCase());
// });


// Square of each number in an array using forEach
/*let n = [1,2,3,4,5];

n.forEach((num) => {
    console.log(num * num);
});*/


// map function it's used to create a new array by applying a function to each element of the original array
/*let numbers = [1, 2, 3, 4, 5];
  const arr = numbers.map((num) =>{
    return num * num;
 })
 console.log(arr); // Output: [1, 4, 9, 16, 25]*/

 // Filter function it's used to filter out elements from an array based on a condition
// let ages = [15, 20, 25, 30, 35, 40];
// const arr = ages.filter((age)=>{
    
//     if(age> 18){
//         console.log(age);
//     }
// })
// console.log(arr); // Output: [20, 25, 30, 35, 40]

// // Reduce function it's used to reduce an array to a single value
// let numbers = [1, 2, 3, 4,132,5];

// const total =numbers.reduce((current, next)=>{
//     // for finding largest number
//     return current > next ? current : next;
//     return current + next;
// })
// console.log(total); // Output: 15


// practice question
/*let marks = [10, 20, 30, 40, 50,100, 60, 70, 80, 90];
marks.filter((mark)=>{
    if(mark > 50){
        console.log(mark);
    }
})
*/


// practice question
/*let n = prompt("Enter a number");
let arr = [];
for( let i =1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);
 let sum = arr.reduce((current, next) => {
    return current + next;
})
console.log(`Sum of first ${n} natural numbers is: ${sum}`);

 let factorial = arr.reduce((current, next) => {
    return current * next;
})
console.log(`Factorial of ${n} is: ${factorial}`);*/

