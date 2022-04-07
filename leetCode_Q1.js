// Write a function that takes an array of numbers and returns an array with each number doubled. 

// Ex:
// Input: [1,2,3]
// Output: [2,4,6]

// Input: [-1,-2,-3]
// Output: [-2, -4, -6]


function DoubleIt(array){
    for (let i=0; i < array.length; i++){
        array[i]=array[i]*2;
    }
    console.log(array)
}

DoubleIt([1,2,3,4])