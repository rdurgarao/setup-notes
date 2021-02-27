// // Datatypes
// Integer, Float, Double - Number,  + , -, %, /, * (operators)
// String - alphabets & special symbols - Joseph + jhon, 1#26, - ( + )
// Boolean - true or false - &&, ||, ! 
// - user.isAdmin || user.hasPrivilliges - (true || true - true), (false || false - false)
// - user.isAdmin && user.hasPrivilliges - (false && true - false)
// - !user.isAdmin - !false - true 

// null 
// - var a;

// undefined
// a + 5;

// list of values 
// [1, 'joseph', null]

// - variables, datatypes, operators
// var, let, const

var initialValue = 5;  // Declaring && initializing

var initialValue;   // Declaring
initialValue = 5;   // initializing

console.log(typeof initialValue);

initialValue = initialValue + 10 // 15
initialValue = initialValue + 'test' // 5test

console.log(typeof initialValue);

var sum = null;
console.log(sum);

console.log(true && false);

// Loop & conditional statements
// Loops - for, while  & break -continue 
// conditional - if, if else, switch

// declaration, condition, increment or decrement operation
console.log('---for loop-----');
for(var index = 0; index < 20; index++){

    if(index == 5){
        break;
    }

    if(index == 3){
        continue;
    }

    console.log(index);
}

console.log('---while loop-----');
var index = 0;
while(index < 10){
    // console.log(index);

    if(index == 8){
        break;
    } else if (index % 2 == 0){
        console.log("even number is ", index);
    } else {
        console.log("printing index ", index);
    }

    index++;
}
                // 0           1          2            3       4
var names = ["sridhar", 'Shankar', "sudheer", "shashank", "Sudheep"];
// names.length ==> 5
// names[4] // Sudheep

names[4] = "sukumar";
names.push("Rahul")
names.pop()

for(var index = 0; index < names.length; index++){
    console.log(names[index]);
}

// Take 5 items in Array, add 20% discount on even index values and
// find total amount

// var prices = [300, 500, 800, 700, 100]
// 240 + 500 + 640 + 700 + 80 = 2160 (240)