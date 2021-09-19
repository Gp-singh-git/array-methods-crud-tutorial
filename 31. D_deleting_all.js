let myArray = ['A', 'B', 'C', 'D', 'E'];
//Will not work with const array declaration

myArray = [];

console.log(myArray); //Output: []

const myArray1 = ['A', 'B', 'C', 'D', 'E'];

myArray1.length = 0;

console.log(myArray1); //Output: []

