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

// JSON
var bills = [
    {
        items: [['apples', 300], ['mangos', 200]],
        totalPrice: 500
    }, 
    {
        items: [['apples', 400]],
        totalPrice: 400
    }
]

var school = {
    name: 'MST',
    address: {
        street: '#232, South Walley',
        city: 'Hyderabad',
        state: 'Telangana',
        zip: 500002
    }
}

school.name = 'GTS';
school.address.zip = 5000023;
console.log(school, '####')

// School -> Address

function School(name){
    this.name = name;
    this.address = null;

    this.setAddress = function(address){
        if(!address){
            throw 'Address is mandatory';
        }

        this.address = address;
    }

    this.print = function(){
        console.log(this);
    }
    
    this.changeCity = function(newName) {
        this.address.city = newName;
    }
}

function Address(){
    this.street = null;
    this.city = null;
    this.state = null;
    this.zip = null;

    this.set = function(street, city, state, zip){
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

var address = new Address();
address.set('South Walley', 'Hyd', 'Tel', 500001);
console.log(address);

var mstSchool = new School('MST');
mstSchool.setAddress(address);

var emptyAddress = new Address();
emptyAddress.set('', '', '', 0);

try{
    mstSchool.setAddress();
} catch(e){
    mstSchool.setAddress(emptyAddress);
    console.log(e, '???');
}

mstSchool.print();

var gtsSchool = new School('GTS');
gtsSchool.setAddress(address);

// console.log(mstSchool);
mstSchool.print();

// address.city = 'Secunderabad';
// mstSchool.changeCity('MST CITY');

mstSchool.print();
gtsSchool.print();


// Write a JS program to print fibonaci numbers from 500 to 800?
// Write a JS program to print prime numbers from 500 to 800?
// Write a JS program to read number and print the text version of number?
// 1 -> One 
// 23 -> twenty three 
// 800 -> eight hundred 
// 40 -> fourty 

// 0 1 1 2 3 5 8 13 
function fibonaci(){
    var initialValue = 0;
    var currentValue  = 1;
    var result;

    // console.log(initialValue);
    // console.log(currentValue);

    for(var index = 0; index < 1000; index++){
        result = currentValue + initialValue;
        initialValue = currentValue;
        currentValue = result;

        if(result >=5 && result <=1000){
            console.log(result, '???');
        }

        if(result >= 1000){
            break;
        }
    }
}

fibonaci();


var step = 0;
function printNumbers(){
    step++;

    if(step > 5){
        throw 'Exceed max limits';
    }

    console.log(step, '??');
    printNumbers();
}

// printNumbers();

var cart1 = {
    items: [
        {name: 'apple', quantity: 5, item_price: 20, total: 100},
        {name: 'mango', quantity: 10, item_price: 10, total: 100}
    ],
    total_price: 200
};

cart1['items'][0]['total'] = 300;

var cart2 = {
    items: [
        {name: 'apple', quantity: 5, item_price: 5, total: 25},
        {name: 'mango', quantity: 10, item_price: 10, total: 100}
    ],
    total_price: 125
};

function getDiscountPrice(cart, discountValue = 10){
    return cart['total_price'] * (discountValue / 100);
}

function getMeFirstItemInCart(cart){
    return cart['items'][0];
}

console.log(getDiscountPrice(cart1));
console.log(getDiscountPrice(cart2));

var cart1FirstItem = getMeFirstItemInCart(cart1);
console.log(cart1FirstItem);

function itemsInCart(cart){
    var items = cart['items'];

    for(var index = 0; index < items.length; index++){
        console.log(items[index].name + '==>' + items[index].quantity + '*' + items[index].item_price + '=' + items[index].total);
    }

    console.log(getDiscountPrice(cart));
}

itemsInCart(cart1);


// Regular Expression
var regexObj = new RegExp('\d');

console.log(regexObj.test('sadsad'), '????')


// Asynchronous programming 
// - 2 predefined functions - setTimeout & setInterval

// setTimeout(function(){
//     for(var index = 100; index < 500; index++){
//         console.log(index);
//     }    
// }, 1);

// for(var index = 1000; index < 2000; index++){
//     console.log(index);
// }

// promises -> Asynchronous
async function checkOddness(){
    var num = 6;

    var numPromise = new Promise(function(resolve, reject){
        if(num % 2 == 0){
            setTimeout(function(){
                resolve(num);
            }, 5000);
        } else {
            setTimeout(function(){
                reject('Its odd number');
            }, 5000);
        }
    });    

    var result = await numPromise;
    return result;
}

// var numPromise = checkOddness;
// numPromise.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// });

// Convert asynch to synchronous
// - 2 keywords - asynch and await 

async function execution(){
    const result = await checkOddness();

    console.log(result);
    console.log('-- end of asynch ---');    
}

execution();

// Design patterns
// - Constructional (singleton, factory)
// - Behavioral - proxy 
// - Structural - observable

// Callback pattern 
function multiply(printResultFn, a, b){
    printResultFn(a * b);
}

multiply(function(result){
    console.log(result)
},2,5);

// chain of responsibility pattern
function print(){

    this.hash = function(){
        console.log('######');
        return this;
    }

    this.percentile = function(){
        console.log('%%%%%%');
        return this;
    }
}

var printerObj = new print();

printerObj.hash().percentile().hash().percentile();


// Prototype pattern 
Array.prototype.calc = function(){
    var result = 1;

    for(var index = 0; index < this.length; index++){
        result = result * this[index];
    }

    return result;
}

// [1,2,3].calc();     // 6
