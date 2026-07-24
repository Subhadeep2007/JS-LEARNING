/* CHECK ODD EVEN*/ // Take input from user
const num = Number(prompt("Enter a number:"));

// Arrow Function
const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
};

checkEvenOdd(num);



/*
=========================================
Question 03
Topic: Arrow Function
Difficulty: Easy

Problem:
Find the largest among
three numbers.
=========================================
*/

// Arrow Function
const largestNumber = (a, b, c) => {

    if (a >= b && a >= c) {

        return a;

    } else if (b >= a && b >= c) {

        return b;

    }

    return c;

};

// Function Call
console.log("Largest =", largestNumber(20, 55, 40));

/*
Output

Largest = 55

Explanation

Compare all numbers

Return largest number

Time Complexity

O(1)
*/


/*
=========================================
Question 04
Topic: Arrow Function
Difficulty: Medium

Problem:
Find factorial of a number.
=========================================
*/

// Arrow Function
const factorial = (number) => {

    let fact = 1;

    for (let i = 1; i <= number; i++) {

        fact *= i;

    }

    return fact;

};

// Function Call
console.log(factorial(5));

/*
Output

120

Explanation

5!

5 × 4 × 3 × 2 × 1

=120

Time Complexity

O(n)
*/

/*
=========================================
Question 05
Topic: Arrow Function
Difficulty: Medium

Problem:
Check whether a number
is Prime or Not.
=========================================
*/

// Arrow Function
const isPrime = (number) => {

    // Numbers less than 2 are not prime
    if (number < 2) {

        return "Not Prime";

    }

    // Check divisibility
    for (let i = 2; i <= Math.sqrt(number); i++) {

        if (number % i === 0) {

            return "Not Prime";

        }

    }

    return "Prime";

};

// Function Call
console.log(isPrime(17));
console.log(isPrime(18));

/*
Output

Prime

Not Prime

Explanation

A prime number has only
two factors:

1

and

itself

Math.sqrt(number)
reduces unnecessary iterations.

Time Complexity

O(√n)
*/


/*
=========================================
Question 06
Topic: Arrow Function
Difficulty: Medium

Problem:
Print Fibonacci Series.
=========================================
*/

// Arrow Function
const fibonacci = (n) => {

    let first = 0;
    let second = 1;

    console.log("Fibonacci Series:");

    for (let i = 1; i <= n; i++) {

        console.log(first);

        // Store next number
        let next = first + second;

        // Update values
        first = second;
        second = next;
    }
};

// Function Call
fibonacci(10);

/*
Output

0
1
1
2
3
5
8
13
21
34

Explanation

Next = first + second

Move values

first = second

second = next

Time Complexity

O(n)
*/



/*
=========================================
Question 07
Topic: Arrow Function
Difficulty: Medium

Problem:
Reverse a Number.
=========================================
*/

// Arrow Function
const reverseNumber = (number) => {

    let reverse = 0;

    while (number > 0) {

        let digit = number % 10;

        reverse = reverse * 10 + digit;

        number = Math.floor(number / 10);

    }

    return reverse;

};

// Function Call
console.log(reverseNumber(12345));

/*
Output

54321

Explanation

Take last digit

Add into reverse

Remove last digit

Repeat

Time Complexity

O(n)
*/



/*
=========================================
Question 08
Topic: Arrow Function
Difficulty: Medium

Problem:
Check whether a number
is Palindrome.
=========================================
*/

// Arrow Function
const palindrome = (number) => {

    let original = number;
    let reverse = 0;

    while (number > 0) {

        let digit = number % 10;

        reverse = reverse * 10 + digit;

        number = Math.floor(number / 10);

    }

    if (original === reverse) {

        return "Palindrome";

    }

    return "Not Palindrome";

};

// Function Call
console.log(palindrome(121));
console.log(palindrome(456));

/*
Output

Palindrome

Not Palindrome

Explanation

Reverse Number

Compare

Original == Reverse

Time Complexity

O(n)
*/



/*
=========================================
Question 09
Topic: Arrow Function
Difficulty: Hard

Problem:
Check Armstrong Number.
=========================================
*/

// Arrow Function
const armstrong = (number) => {

    let original = number;
    let sum = 0;

    while (number > 0) {

        let digit = number % 10;

        sum += digit ** 3;

        number = Math.floor(number / 10);

    }

    if (original === sum) {

        return "Armstrong Number";

    }

    return "Not Armstrong";

};

// Function Call
console.log(armstrong(153));
console.log(armstrong(123));

/*
Output

Armstrong Number

Not Armstrong

Explanation

153

1³ + 5³ + 3³

1 + 125 + 27

153

Time Complexity

O(n)
*/



/*
=========================================
Question 10
Topic: Arrow Function
Difficulty: Easy

Problem:
Find Sum of Digits.
=========================================
*/

// Arrow Function
const sumOfDigits = (number) => {

    let sum = 0;

    while (number > 0) {

        sum += number % 10;

        number = Math.floor(number / 10);

    }

    return sum;

};

// Function Call
console.log(sumOfDigits(5678));

/*
Output

26

Explanation

5 + 6 + 7 + 8

= 26

Time Complexity

O(n)
*/


/*
=========================================
Question 11
Topic: Arrow Function
Difficulty: Easy

Problem:
Count the total number of digits
in a given number.
=========================================
*/

// Arrow Function
const countDigits = (number) => {

    // Special case for 0
    if (number === 0) {
        return 1;
    }

    let count = 0;

    while (number > 0) {

        count++;

        number = Math.floor(number / 10);

    }

    return count;

};

// Function Call
console.log(countDigits(987654));

/*
Output

6

Explanation

987654

↓

98765

↓

9876

↓

987

↓

98

↓

9

↓

0

Total Digits = 6

Time Complexity

O(log₁₀n)
*/



/*
=========================================
Question 12
Topic: Arrow Function
Difficulty: Medium

Problem:
Find GCD (Greatest Common Divisor)
of two numbers.
=========================================
*/

// Arrow Function
const gcd = (a, b) => {

    while (b !== 0) {

        let temp = b;

        b = a % b;

        a = temp;

    }

    return a;

};

// Function Call
console.log("GCD =", gcd(36, 24));

/*
Output

GCD = 12

Explanation

36 % 24 = 12

24 % 12 = 0

Answer = 12

Time Complexity

O(log n)
*/



/*
=========================================
Question 13
Topic: Arrow Function
Difficulty: Medium

Problem:
Find LCM of two numbers.
=========================================
*/

// Arrow Function for GCD
const gcd = (a, b) => {

    while (b !== 0) {

        let temp = b;

        b = a % b;

        a = temp;

    }

    return a;

};

// Arrow Function for LCM
const lcm = (a, b) => {

    return (a * b) / gcd(a, b);

};

// Function Call
console.log("LCM =", lcm(12, 18));

/*
Output

LCM = 36

Explanation

Formula

LCM = (a × b) / GCD

Time Complexity

O(log n)
*/




/*
=========================================
Question 14
Topic: Arrow Function
Difficulty: Medium

Problem:
Check whether a number
is Perfect Number.
=========================================
*/

// Arrow Function
const perfectNumber = (number) => {

    let sum = 0;

    for (let i = 1; i < number; i++) {

        if (number % i === 0) {

            sum += i;

        }

    }

    if (sum === number) {

        return "Perfect Number";

    }

    return "Not Perfect Number";

};

// Function Call
console.log(perfectNumber(28));
console.log(perfectNumber(15));

/*
Output

Perfect Number

Not Perfect Number

Explanation

Factors of 28

1 + 2 + 4 + 7 + 14

= 28

Time Complexity

O(n)
*/


/*
=========================================
Question 15
Topic: Arrow Function
Difficulty: Hard

Problem:
Check whether a number
is Strong Number.
=========================================
*/

// Arrow Function for factorial
const factorial = (num) => {

    let fact = 1;

    for (let i = 1; i <= num; i++) {

        fact *= i;

    }

    return fact;

};

// Arrow Function for Strong Number
const strongNumber = (number) => {

    let original = number;

    let sum = 0;

    while (number > 0) {

        let digit = number % 10;

        sum += factorial(digit);

        number = Math.floor(number / 10);

    }

    if (sum === original) {

        return "Strong Number";

    }

    return "Not Strong Number";

};

// Function Call
console.log(strongNumber(145));
console.log(strongNumber(123));

/*
Output

Strong Number

Not Strong Number

Explanation

145

1! + 4! + 5!

=

1 + 24 + 120

=

145

Time Complexity

O(d × 9!)

d = Number of Digits
*/