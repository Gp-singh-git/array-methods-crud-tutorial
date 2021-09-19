const myArray = [1, 2, ['A', 'B'], 3, 4];

console.log(myArray.flat()); //Output: [ 1, 2, 'A', 'B', 3, 4 ]

const myArray1 = [1, ['A', [['i', ['ii', 'iii']]]], 7, 8];

console.log(myArray1.flat(2));
//Output: [ 1, 'A', [ 'i', [ 'ii', 'iii' ] ], 7, 8 ]

console.log(myArray1.flat(3));
//Output: [ 1, 'A', 'i', [ 'ii', 'iii' ], 7, 8 ]

console.log(myArray1.flat(4));
//Output: [ 1, 'A','i', 'ii', 'iii', 7,  8]



