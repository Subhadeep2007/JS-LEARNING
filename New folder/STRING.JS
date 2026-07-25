/*
=========================================
Question 01
Topic: String - length
Difficulty: Easy

Problem:
Find the length of a string.
=========================================
*/

// Arrow Function
const stringLength = () => {

    // Create String
    const language = "JavaScript";

    // Print Length
    console.log(language.length);

};

// Function Call
stringLength();

/*
Output

10

Explanation

length

Returns total number
of characters.

J a v a S c r i p t

10 Characters

Time Complexity

O(1)
*/


/*
=========================================
Question 02
Topic: String - toUpperCase()
Difficulty: Easy

Problem:
Convert string to uppercase.
=========================================
*/

// Arrow Function
const convertUpperCase = () => {

    const language = "javascript";

    // Convert
    const result = language.toUpperCase();

    console.log(result);

};

// Function Call
convertUpperCase();

/*
Output

JAVASCRIPT

Explanation

toUpperCase()

Converts all letters
into CAPITAL letters.

Time Complexity

O(n)
*/



/*
=========================================
Question 03
Topic: String - toLowerCase()
Difficulty: Easy

Problem:
Convert string to lowercase.
=========================================
*/

// Arrow Function
const convertLowerCase = () => {

    const language = "JAVASCRIPT";

    // Convert
    const result = language.toLowerCase();

    console.log(result);

};

// Function Call
convertLowerCase();

/*
Output

javascript

Explanation

toLowerCase()

Converts all letters
into small letters.

Time Complexity

O(n)
*/


/*
=========================================
Question 04
Topic: String - trim()
Difficulty: Easy

Problem:
Remove extra spaces
from beginning and end.
=========================================
*/

// Arrow Function
const removeSpaces = () => {

    const username = "   Subhadeep   ";

    // Remove Spaces
    const result = username.trim();

    console.log(result);

};

// Function Call
removeSpaces();

/*
Output

Subhadeep

Explanation

trim()

Removes spaces

Only from

Beginning

and

Ending

Not middle spaces.

Real Project

Login Form

Registration Form

Search Input

Time Complexity

O(n)
*/


/*
=========================================
Question 05
Topic: String - includes()
Difficulty: Easy

Problem:
Check whether a word
exists inside a string.
=========================================
*/

// Arrow Function
const checkWord = () => {

    const sentence = "I Love JavaScript";

    console.log(sentence.includes("Java"));

    console.log(sentence.includes("Python"));

};

// Function Call
checkWord();

/*
Output

true

false

Explanation

includes()

Returns

true

if text exists

Otherwise

false

Real Project

Search Bar

Email Validation

Keyword Search

Time Complexity

O(n)
*/


/*
=========================================
Question 06
Topic: String - startsWith()
Difficulty: Easy

Problem:
Check whether a string
starts with a specific word.
=========================================
*/

// Arrow Function
const checkStart = () => {

    // Create String
    const website = "https://google.com";

    // Check starting text
    console.log(website.startsWith("https"));

    console.log(website.startsWith("http"));

};

// Function Call
checkStart();

/*
Output

true

false

Explanation

startsWith()

Checks whether the string
starts with the given text.

Real Project

Website URL Validation

Secure URL Check

Time Complexity

O(n)
*/


/*
=========================================
Question 07
Topic: String - endsWith()
Difficulty: Easy

Problem:
Check whether a file
has ".jpg" extension.
=========================================
*/

// Arrow Function
const checkFile = () => {

    const file = "profile.jpg";

    console.log(file.endsWith(".jpg"));

    console.log(file.endsWith(".png"));

};

// Function Call
checkFile();

/*
Output

true

false

Explanation

endsWith()

Checks whether the string
ends with the given text.

Real Project

Image Upload

File Validation

Time Complexity

O(n)
*/


/*
=========================================
Question 08
Topic: String - replace()
Difficulty: Easy

Problem:
Replace first occurrence
of a word.
=========================================
*/

// Arrow Function
const replaceWord = () => {

    const sentence = "I Love JavaScript";

    // Replace text
    const result = sentence.replace(
        "JavaScript",
        "React"
    );

    console.log(result);

};

// Function Call
replaceWord();

/*
Output

I Love React

Explanation

replace()

Replaces only the
FIRST matching value.

Real Project

Edit Text

Search & Replace

Time Complexity

O(n)
*/
/*
=========================================
Question 09
Topic: String - replaceAll()
Difficulty: Easy

Problem:
Replace all matching words.
=========================================
*/

// Arrow Function
const replaceAllWords = () => {

    const sentence =
        "JS is good. JS is fast. JS is popular.";

    // Replace all
    const result = sentence.replaceAll(
        "JS",
        "JavaScript"
    );

    console.log(result);

};

// Function Call
replaceAllWords();

/*
Output

JavaScript is good.
JavaScript is fast.
JavaScript is popular.

Explanation

replaceAll()

Replaces EVERY matching value.

Real Project

Text Formatting

Editor

Chat Application

Time Complexity

O(n)
*//*
=========================================
Question 10
Topic: String - split()
Difficulty: Medium

Problem:
Convert a string
into an array.
=========================================
*/

// Arrow Function
const splitString = () => {

    const skills =
        "HTML,CSS,JavaScript,React";

    // Convert to Array
    const result = skills.split(",");

    console.log(result);

};

// Function Call
splitString();

/*
Output

[
 "HTML",
 "CSS",
 "JavaScript",
 "React"
]

Explanation

split(",")

Splits string

↓

Creates Array

Real Project

Tags

Skills

CSV Data

Time Complexity

O(n)
*/