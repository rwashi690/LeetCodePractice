//Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Examples
// Input: n = 3
// Output: ["1","2","Fizz"]

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraint
// 1 <= n <= 10^4

function FizzBuzz(number){
    const finalArray=[];
    for ( let x=1; x<number; x++){
        //finalArray.push(x)
        if(x%5==0 && x%3==0 && x>0){
            finalArray.push('FizzBuzz')
        } else if (x%3 ==0){
            finalArray.push('Fizz')
        }else if (x%5==0){
            finalArray.push('Buzz')
        } else {
            finalArray.push(x)
        }
    }
    console.log(finalArray)
}

FizzBuzz(15)