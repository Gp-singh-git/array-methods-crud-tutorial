const myArray = [1, 2, 3, 4, 5];

myArray.map((x) => console.log(x)); //Output: 1 
                                    //        2
                                    //        3
                                    //        4
                                    //        5

const newArray = myArray.map((x) => x * x);

console.log(newArray); //Output: [ 1, 4, 9, 16, 25 ]


