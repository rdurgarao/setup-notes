const figlet = require('figlet');

function printStepNumbers(min_range = 0, max_range = 100, step = 5){
    var result = [];

    for(var index = min_range; index <= max_range; index = index + step){
        result.push(index);
    }

    displayNumbers = result;
    return result;
}

function printPrimeNumbers(num){
    if(!num){
        return false;
    }

    var isPrime = false;

    for(var index = 2; index < num; index++){
        isPrime = true;
        if((num % index) === 0){
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

var stepNumbers = printStepNumbers(200, 500, 5);

for(var index = 0; index < stepNumbers.length; index++){
    console.log(index, '===>', figlet.textSync(printPrimeNumbers(index)));
}

function findEvenNumbers(){
    var result = [];
    console.log(displayNumbers, '~~~~')

    for(var index = 0; index < arguments.length; index++){
        var currentNumber = arguments[index];
        
        if(currentNumber % 2 == 0){
            result.push(currentNumber);
        }
    }

    return result;
}

// var findEvenNumbers = function () {

// }

// var findEvenNumbers = () => {

// }

console.log(findEvenNumbers(2,3,4,5))

// var result = [1,2,3,4,8].filter(function(num){
//     return num % 2 === 0
// });

var result = [1,2,3,4,8].filter(num => num % 2 === 0);

var result = [1,2,3,4,8].filter(num => {
    return num % 2 === 0;
})

// [1,2,3,4,8].forEach((num, index) => {
//     console.log(index, '===', num);
// })

// variable scopes 
// local scope 
// global scope 
// variable hostling 

// closures 


console.log(result)

var displayNumbers;


function calc(){
    var counter = 0;

    function add(a,b){
        counter = counter + 1;
        return a + b;
    }

    function getCounter(){
        return counter;
    }

    return {add: add, getCounter: getCounter};
}

const {add, getCounter} = calc();

add(2,3);
add(4,5);
add(4,5);
console.log(getCounter());

