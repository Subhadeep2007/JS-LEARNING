/* CHECK EVEN OR ODD */


// Store a number
let number = 15;

// Check if number is divisible by 2
if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}






/* CHECK POSITIVE, NEGATIVE OR ZERO */


let number = -20;

// Check conditions
if (number > 0) {
    console.log("Positive Number");
} else if (number < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}





/* CHECK VOTING ELIGIBILITY */


let age = 18;

// Check eligibility
if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible for Voting");
}




/* LARGEST TWO NUMBERS */
let num1 = 45;
let num2 = 30;

// Compare both numbers
if (num1 > num2) {
    console.log(num1 + " is Larger");
} else if (num2 > num1) {
    console.log(num2 + " is Larger");
} else {
    console.log("Both numbers are Equal");
}

/* LARGEST OF THREE NUMBERS */

let a = 25;
let b = 60;
let c = 40;

// Check first condition
if (a >= b && a >= c) {

    console.log(a + " is Largest");

}
// Check second condition
else if (b >= a && b >= c) {

    console.log(b + " is Largest");

}
// Remaining condition
else {

    console.log(c + " is Largest");

}



/* CHECK LEAP YEAR */

// Store year
let year = 2024;

// Check leap year
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {

    console.log(year + " is a Leap Year");

} else {

    console.log(year + " is NOT a Leap Year");

}



/* CHECK GRADE BASED ON MARKS */ // Student marks
let marks = 86;

// Check grade
if (marks >= 90) {

    console.log("Grade A");

} else if (marks >= 80) {

    console.log("Grade B");

} else if (marks >= 70) {

    console.log("Grade C");

} else if (marks >= 60) {

    console.log("Grade D");

} else {

    console.log("Grade F");

}




/* CHECK divisible by 5 & 11 */

// Store a number
let number = 55;

// Check divisibility
if (number % 5 === 0 && number % 11 === 0) {

    console.log(number + " is divisible by both 5 and 11");

} else {

    console.log(number + " is NOT divisible by both 5 and 11");

}


/* check character type*/

let ch = "@";

// Check character type
if (ch >= "A" && ch <= "Z") {

    console.log("Uppercase Letter");

} else if (ch >= "a" && ch <= "z") {

    console.log("Lowercase Letter");

} else if (ch >= "0" && ch <= "9") {

    console.log("Digit");

} else {

    console.log("Special Character");

}



/* electric bill calculator */



let units = 150;

// Variable to store bill
let bill;

// Calculate bill
if (units <= 100) {

    bill = units * 5;

} else if (units <= 200) {

    bill = units * 7;

} else if (units <= 300) {

    bill = units * 10;

} else {

    bill = units * 12;

}

// Print result
console.log("Electricity Bill = ₹" + bill);