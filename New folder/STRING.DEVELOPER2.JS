/*
=========================================
Question 16
Topic: String - repeat()
Difficulty: Easy

Problem:
Repeat a string multiple times.
=========================================
*/

// Arrow Function
const repeatText = () => {

    // Create String
    const star = "*";

    // Repeat 10 times
    console.log(star.repeat(10));

};

// Function Call
repeatText();

/*
Output

**********

Explanation

repeat(count)

Repeats string

Real Project

OTP Mask

Password Mask

Divider Line

Time Complexity

O(n)
*/

/*
=========================================
Question 17
Topic: Template Literal
Difficulty: Easy

Problem:
Display user information.
=========================================
*/

// Arrow Function
const userInfo = () => {

    const name = "Subhadeep";

    const age = 22;

    // Template Literal
    const message =
        `My Name is ${name} and I am ${age} years old.`;

    console.log(message);

};

// Function Call
userInfo();

/*
Output

My Name is Subhadeep
and I am 22 years old.

Explanation

Template Literal

Uses

${ }

to insert variables.

Real Project

Invoice

Profile

Email

Welcome Message

Time Complexity

O(1)
*/


/*
=========================================
Question 18
Topic: Email Validation
Difficulty: Medium

Problem:
Check whether an email
contains '@' and '.'.
=========================================
*/

// Arrow Function
const validateEmail = (email) => {

    if (
        email.includes("@") &&
        email.includes(".")
    ) {

        return "Valid Email";

    }

    return "Invalid Email";

};

// Function Call
console.log(validateEmail("user@gmail.com"));

console.log(validateEmail("usergmailcom"));

/*
Output

Valid Email

Invalid Email

Explanation

Basic Validation

Checks

@

and

.

Real Project

Login Form

Registration Form

Note

Production apps usually
use Regular Expressions (Regex)
for stronger validation.

Time Complexity

O(n)
*/


/*
=========================================
Question 19
Topic: Password Validation
Difficulty: Medium

Problem:
Password length should
be at least 8 characters.
=========================================
*/

// Arrow Function
const validatePassword = (password) => {

    if (password.length >= 8) {

        return "Strong Password";

    }

    return "Weak Password";

};

// Function Call
console.log(validatePassword("abc12345"));

console.log(validatePassword("12345"));

/*
Output

Strong Password

Weak Password

Explanation

Minimum Length

8 Characters

Real Project

Signup Form

Reset Password

Time Complexity

O(1)
*/


/*
=========================================
Question 20
Topic: Capitalize First Letter
Difficulty: Medium

Problem:
Capitalize the first letter
of a string.
=========================================
*/

// Arrow Function
const capitalize = (text) => {

    // First letter
    const first =
        text.charAt(0).toUpperCase();

    // Remaining text
    const remaining =
        text.slice(1).toLowerCase();

    return first + remaining;

};

// Function Call
console.log(capitalize("javascript"));

/*
Output

Javascript

Explanation

charAt(0)

↓

J

slice(1)

↓

avascript

Result

Javascript

Real Project

User Name

City Name

Profile

Time Complexity

O(n)
*/


/*
=========================================
Question 21
Topic: Slug Generator
Difficulty: Medium

Problem:
Convert a title into URL slug.
=========================================
*/

// Arrow Function
const slugGenerator = (title) => {

    return title
        .trim()
        .toLowerCase()
        .replaceAll(" ", "-");

};

// Function Call
console.log(
    slugGenerator("Learn JavaScript Today")
);

/*
Output

learn-javascript-today

Explanation

trim()

↓

toLowerCase()

↓

replaceAll()

Real Project

Blog URL

Product URL

SEO Friendly Links
*/


/*
=========================================
Question 22
Topic: User Initials
Difficulty: Medium

Problem:
Generate initials from full name.
=========================================
*/

// Arrow Function
const getInitials = (name) => {

    const words = name.split(" ");

    return (
        words[0].charAt(0).toUpperCase() +
        words[1].charAt(0).toUpperCase()
    );

};

// Function Call
console.log(
    getInitials("Subhadeep Garai")
);

/*
Output

SG

Real Project

Profile Avatar

User Badge
*/


/*
=========================================
Question 23
Topic: Hide Email
Difficulty: Medium

Problem:
Hide part of an email.
=========================================
*/

// Arrow Function
const hideEmail = (email) => {

    const atIndex = email.indexOf("@");

    return (
        email.slice(0, 3) +
        "****" +
        email.slice(atIndex)
    );

};

// Function Call
console.log(
    hideEmail("subhadeep@gmail.com")
);

/*
Output

sub****@gmail.com

Real Project

Profile Page

Privacy Protection
*/


/*
=========================================
Question 24
Topic: Remove Extra Spaces
Difficulty: Medium

Problem:
Remove extra spaces
between words.
=========================================
*/

// Arrow Function
const cleanText = (text) => {

    return text
        .trim()
        .split(/\s+/)
        .join(" ");

};

// Function Call
console.log(
    cleanText("  Learn    JavaScript   Today ")
);

/*
Output

Learn JavaScript Today

Explanation

split(/\s+/)

Splits on one or more spaces.

join(" ")

Joins words with
a single space.
*/


/*
=========================================
Question 25
Topic: Count Words
Difficulty: Easy

Problem:
Count total words
in a sentence.
=========================================
*/

// Arrow Function
const countWords = (text) => {

    return text
        .trim()
        .split(/\s+/)
        .length;

};

// Function Call
console.log(
    countWords("I Love JavaScript")
);

/*
Output

3

Explanation

Split sentence

↓

Array

↓

Count Length

Real Project

Blog Editor

Article Counter
*/