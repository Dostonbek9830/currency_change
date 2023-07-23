// var userName = prompt("Enter your name");
// var userSurname = prompt("Enter your surname");
// var userAge = prompt("Enter your age");
// var userEmail = prompt("Enter your email");
// var userMoney = prompt("Enter your money that you want to convert");

// var USD_CURRENCY = 11600;

// var userCash = Number(userMoney) * USD_CURRENCY;

// console.log(`Name: ${userName}
// Surname: ${userSurname}
// Age: ${userAge}
// Email: ${userEmail}
// Convertered money: ${userCash}`);

// CONCATENATION

// var caption ="hello"

// console.log(caption.concat(" World"));

// ADDITION 

// var a = 5;
// var b = 10;

// console.log(a + b);

//SUBTRACTION

// var a = 5;
// var b = 4;

// var result = a - b;

// console.log(result);

// MULTIPLICATION

// var a = 2;
// var b = 3;

// var result = a * b;

// console.log(result);

// DARAJAGA KO'TARISH // EXPONENTIATION

// var a = 10;
// var b = 5; 

// var result = a ** b;

// console.log(result);

// MODULLI BO'LISH // MODULUS

// var a = 7;
// var b = 4;

// var result = a % b;

// console.log(result);

// DIVISION

// var a = 5;
// var b = 2;

// var result = a / b;

// console.log(result);

//SYNTAX SUGAR

// INCREMENT 

// var a = 5;

// console.log(a++);

// DECREMENT 

// var a = 5;

// console.log(a--);

// PRE INCREMENT 
// ++a

// POST INCREMENT 
// a++

// PRE DECREMENT
// --a

// POST DECREMENT 
// a--


//COMPARSION OPERATORS

// < - less than / kichik
// > - greater than / katta
// >= - greater than or equal to / katta yoki teng
// <= - less than or equal to / kichik yoki teng
// == equal to / teng
// === - same type and same value / tipi ham qiymati ham teng

// LOGICAL OPERATORS
// && - AND / Conjunction
// || - OR / Disconjunction
// ! - NOT / Emas
// != - NOT EQUAL TO / teng emas
// !== - NOT equal value or NOT same type / qiymat yoki tip teng emas
// ?? - Nullish Coalescing / Null va undefined BO'LMAGAN data qaytaradi
// debugger;


let userAge = prompt("Enter your age");
let userMoney = prompt("Enter money for buy cigarettes");

console.log(`Age: ${userAge}
Money: ${userMoney}`);

if(userAge >= 18 && userMoney >= 16000) {
    console.log("You can buy cigarettes")
} else {
    console.log("Sorry, you cannot buy cigarettes")
}

