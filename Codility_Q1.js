// Find the Lowest Positive Integer

// class Solution { public int solution(int[] A); } that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Assume that:

// N is an integer within the range [1..100,000]; each element of array A is an integer within the range [−1,000,000..1,000,000]. Complexity:

// expected worst-case time complexity is O(N); expected worst-case space complexity is O(N) (not counting the storage required for input arguments).

//Example: Initial A=[-3,1,4,6,2,0,-2,-1] sort -> A= [-3, -2, -1, 0, 1, 2, 4, 5, 6 ] return 3
//Example: A =[-3, -2] return 1
//Example: A= [0, 3, 4, 5] return 1

//First sort list
//For loop for the length of the array
//If the number is greater

function findLowestPositive(A) {
  let returnVal = 1;
  //A is an array that will be passed in now we use the built in method sort to go from highest to lowest
  A.sort();
  for (let x = 0; x < A.length; x++) {
    if (A[x] > 0 && A.includes(returnVal)) {
      returnVal++;
    } else if (A[x] > 0 && !A.includes(returnVal)) {
      return returnVal;
    }
  }
  return returnVal;
}

console.log(findLowestPositive([1, 1, 1, 1]));

//Can you spot what is wrong with my solution?

//  It is the Big-O it has a typical time complexity of O(N^3) and a space complexity of O(N) due to line 29
