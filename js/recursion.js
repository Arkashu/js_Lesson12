//Task - factorial
// function getFactorial(num){
//     if (num === 1 || num ===0){
//         return 1;
//     } else {
//         return num * getFactorial(num-1)
//     }
// }
//
// console.log(getFactorial(4));

//Task - pow
// function pow(num, exponent){
//     if (exponent ===1){
//         return num;
//     }
//     return num * pow(num, exponent-1)
// }
//
// console.log(pow(2,6))

//Task
function getSum(a, b){
    if (a === 0){
        return b;
    }
    return getSum(a-1, b+1)
}
console.log(getSum( 7, 15))

