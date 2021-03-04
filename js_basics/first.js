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

// function or methods or actions ..

function printList(pattern){
    if(pattern == undefined){
        pattern = "##########";
    }
    console.log("1. Get plan for weekly calls");
    console.log("2. Plan for recording the meeting notes");
    console.log("3. " + pattern);
}

printList(" --- *** ----");
printList(" ============ ");
printList();

function calcAge(currentAge, since) {
    return currentAge + since;
}


var fiveYearsAgoAge = calcAge(25, -5);  
var firstYearGrudationMyAge = calcAge(20, -3);  
var endOfGraduationAge = calcAge(firstYearGrudationMyAge, 4);   

console.log(fiveYearsAgoAge, firstYearGrudationMyAge, endOfGraduationAge);

var numbers = [2,3,4,6,8];

var evenNumbers = numbers.filter(function(number) {
    return number % 2 == 0;
});

var nextOddNumbers = evenNumbers.map(function(number){
    return number + 1;
});

evenNumbers.forEach(function(number){
    console.log(number, '::::');
});

console.log(evenNumbers, '===');
console.log(nextOddNumbers, '===');


function Student(){
    this.name = '';
    this.department = '';
    this.subjects = [];
    this.registerSubject = function(){
        if(this.department == 'computers'){
            this.subjects = ['html', 'css', 'js'];
        } else {
            this.subjects = ['NA'];
        }
    };
    this.getSubjects = function(){
        return this.subjects;
    }
}

Student.prototype.printFullName = function (){
    return this.name.toUpperCase();
}

var s1 = new Student(); // object
s1.name = 'Satish';
s1.department = "computers";
s1.registerSubject();


console.log(s1, s1.subjects, '^^^^^^^^^');

var s2 = new Student();
s2.name = 'Mahesh';
s2.department = "electronics";
s2.registerSubject();

console.log(s2, '^^^^^^^^^');

console.log(s1.printFullName());


// Consider billing system , print each bill from customer and tell me the total bills
// till present

// Billing system 
//     - no_of_bills_till_date = []
//     - printEntireTotal()

// Bill 
//     - items []
//     - total price - num 

//     - printBill()
//     - addItem(name, price)

// Item 
//     - name 
//     - price 

function Bill(){
    this.items = [];
    this.totalPrice = 0;

    this.printBill = function(){
        for(var index = 0; index < this.items.length; index++){
            var item = this.items[index];
            console.log(item[0], '=====', item[1]);
        }

        var sum = 0;
        this.items.forEach(function(item){
            sum = sum + item[1];
        });

        this.totalPrice = sum;
        console.log("Total", "=====", sum);
    }

    this.addItem = function(name, price){
        var item = [name, price]; 
        this.items.push(item);
    }
}

function BillingSystem(){
    this.no_of_bills_till_date = [];

    this.addBill = function(bill){
        this.no_of_bills_till_date.push(bill);
    }

    this.printTotal = function() {
        var sum = 0;

        for(var index = 0; index < this.no_of_bills_till_date.length; index++){
            var bill = this.no_of_bills_till_date[index];

            sum = sum + bill.totalPrice;
        }

        console.log("Total Bills Amount", "====", sum);
    }
}

var bs = new BillingSystem();
bs.printTotal();

var bill1 = new Bill();
bill1.addItem('Apples', 400);
bill1.addItem('Oranges', 600);
bill1.printBill();

var bill2 = new Bill();
bill2.addItem('Grapes', 100);
bill2.addItem('Papaya', 700);
bill2.printBill();

bs.addBill(bill1);
bs.addBill(bill2);
bs.printTotal();