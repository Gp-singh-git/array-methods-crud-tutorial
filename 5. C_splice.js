const myArray = ['A', 'B', 'C', 'D'];

myArray.splice(2, 0, 'new');

console.log(myArray); //Output: [ 'A', 'B', 'new', 'C', 'D' ]

const myArray1 = ['A', 'B', 'C', 'D'];

myArray1.splice(4, 0, 'g', 'h', 'i');

console.log(myArray1); // Output: ['A','B','C','D','g','h','i']

const myArray2 = ['A', 'B', 'C', 'D'];

myArray2.splice(0, 0, 'x', 'y');

console.log(myArray2); //Output: [ 'x', 'y', 'A', 'B', 'C', 'D' ]

const myArray3 = ['A', 'B', 'C', 'D'];
