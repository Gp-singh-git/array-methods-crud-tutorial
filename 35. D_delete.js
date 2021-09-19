const myArray = ['A', 'B', 'C', 'D'];

delete myArray[2];

console.log(myArray); //Output: [ 'A', 'B', <1 empty item>, 'D' ]

console.log(myArray[2]); //Output: undefined

myArray[2] = 'G';

console.log(myArray); //Output: [ 'A', 'B', 'G', 'D' ]


