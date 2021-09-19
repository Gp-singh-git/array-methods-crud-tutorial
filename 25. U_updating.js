const myArray = [1, 2, 3, 4, 5];

myArray[2] = 'A';

console.log(myArray); //Output: [ 1, 2, 'A', 4, 5 ]

const myVar = 3;

myArray[myVar] = 'B';

console.log(myArray); //Output: [ 1, 2, 'A', 'B', 5 ]
