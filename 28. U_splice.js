const myArray = ['A', 'B', 'C', 'D', 'E'];

myArray.splice(2, 1, 'X'); //Output: [ 'A', 'B', 'X', 'D', 'E' ]

console.log(myArray);

const myArray1 = ['A', 'B', 'C', 'D', 'E'];

myArray1.splice(0, 1, 'X');

console.log(myArray1); //Output: [ 'X', 'B', 'C', 'D', 'E' ]

myArray1.splice(0, 2, 'Y', 'Z');

console.log(myArray1); //Output: [ 'Y', 'Z', 'C', 'D', 'E' ]


