const myArray = ['A', 'B', 'C', 'D', 'E'];

console.log(myArray.slice(0,3)); //Output: [ 'A', 'B', 'C' ]

console.log(myArray.slice(3)); //Output: [ 'D' , 'E' ]

console.log(myArray.slice(-1)); //Output: [ 'E' ]

console.log(myArray.slice(2, -1)); //Output: [ 'C', 'D' ]

const newArray = myArray.slice(1,3); 

console.log(newArray); //Output: [ 'B', 'C' ]

console.log(myArray); //Output: [ 'A', 'B', 'C', 'D', 'E' ]




