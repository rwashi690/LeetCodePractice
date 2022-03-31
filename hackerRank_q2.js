// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr=[1,3,5,7,9]
//output is
//16 24

// function that takes an array that will iterate through numbers and add 4 out of the five
function findMinMax(arr){
    let minSum =0;
    let maxSum =0;
    let A;
    // sort the array first
    A= arr.sort();
    for (let i=0; i< A.length-1; i++){
        minSum= A[i]+minSum;
    }
    for (let i=1; i<A.length; i++){
        maxSum=A[i]+maxSum;
    }
    console.log( minSum, maxSum)
}

arr=[1,3,5,7,9]

findMinMax(arr)