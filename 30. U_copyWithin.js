const myArray = [1,2,3,4,5];

myArray.copyWithin(1,3,4);

console.log(myArray); //Output: [ 1, 4, 3, 4, 5 ]

const myArray1 = [1,2,3,4,5];

myArray1.copyWithin(0,3);

console.log(myArray1);//Output: [ 4, 5, 3, 4, 5 ]

