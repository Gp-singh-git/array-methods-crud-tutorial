const myArray = [1, 3, 5, 7, 9];

console.log(myArray.filter((x) => x % 3 === 0)); // Output: [3,9]

const newArray = myArray.filter((item) => item > 4);

console.log(newArray); // Output: [5,7,9]

console.log(myArray); // Output: [1,3,5,7,9]

