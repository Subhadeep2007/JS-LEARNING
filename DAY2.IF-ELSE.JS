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