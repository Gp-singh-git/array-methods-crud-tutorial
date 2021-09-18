

const myArray = ['A','B','C','D'];

myArray.unshift('q'); // Add 'q' to end

console.log(myArray);  //Output: ['q','A','B','C','D','q']

myArray.unshift('r','s');

console.log(myArray);  //Output: ['r','s','A','B','C','D','q','r','s']
