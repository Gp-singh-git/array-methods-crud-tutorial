const myArray = [1, 2, 3, 4, 5];

console.log(myArray); //Output: [1,2,3,4,5]

myArray[5] = 6;

console.log(myArray); //Output: [1,2,3,4,5,6]
//--------------------
const myArray1 = new Array();
myArray1[0] = 20;
myArray1[1] = 40;

console.log(myArray1); //Output: [20,40]
//--------------------
const myArray2 = new Array(5);
myArray2[0] = 'Adam';
myArray2[1] = 'Eve';

console.log(myArray2); //Output: [ 'Adam', 'Eve', <3 empty items> ]

const myArray3 = Array.of(7);

console.log(myArray3); //Output: [7]

const myArray4 = Array.of(1, 2, 3, 4);

console.log(myArray4); //Output: [1,2,3,4]
