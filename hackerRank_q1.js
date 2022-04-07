// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^(-4) are acceptable.

// Example arr=[1,1,0,-1,-1]

// There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5, 2/5 and 1/5. Results are printed as:
// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
    let zeroCnt=0
    let posCnt=0
    let negCnt=0
    for (let i=0; i< arr.length; i++){
        if (arr[i] === 0) {
            zeroCnt ++
        } else if (arr[i] >= 1){
            posCnt ++
        } else if (arr[i] <= -1){
            negCnt ++
        }   
    }
    let arrLnth=arr.length;
    let ratio1=(zeroCnt/arrLnth).toFixed(6);
    let ratio2=(posCnt/arrLnth).toFixed(6);
    let ratio3=(negCnt/arrLnth).toFixed(6);
    console.log (ratio2)
    console.log (ratio3)
    console.log (ratio1)
}

plusMinus
