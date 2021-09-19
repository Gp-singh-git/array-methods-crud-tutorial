const myArray1 = [1, 2, 3, 4, 5];

myArray2 = [6, 7, 8];

newArray = myArray1.concat(myArray2);

console.log(myArray1); //Output: [1,2,3,4,5]
console.log(myArray2); //Output: [6,7,8]
console.log(newArray); //Output: [1,2,3,4,5,6,7,8]

const myArray3 = [...myArray1]; //... is 'spread' operator
console.log(myArray3); //Output: [1,2,3,4,5]

myArray3[0] = 'A';
//myArray1 will not be changed due to this assignment.

console.log(myArray3); //Output: ['A',2,3,4,5]
console.log(myArray1); //Output: [1,2,3,4,5]
