const myArray_A = ['Beta', 'Delta', 'Gamma', 'Alpha'];

myArray_A.sort();

console.log(myArray_A); //Output: [ 'Alpha', 'Beta', 'Delta', 'Gamma' ]

myArray1 = [75, 4, 30, 3, 10, 1];

myArray1.sort(); //Will not work correctly in this form

console.log(myArray1); //Output: [ 1, 10, 3, 30, 4, 75 ]

myArray1.sort((a, b) => a - b); //Ascending order

console.log(myArray1); //Output: [ 1, 3, 4, 10, 30, 75 ]

myArray1.sort((a, b) => b - a); //Descending order

console.log(myArray1); //Output: [ 75, 30, 10, 4, 3, 1 ]


