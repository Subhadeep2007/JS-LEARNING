/*
=========================================
Question 11
Topic: String - slice()
Difficulty: Medium

Problem:
Extract a portion of a string.
=========================================
*/

// Arrow Function
const extractText = () => {

    // Create String
    const language = "JavaScript";

    // Extract characters
    const result = language.slice(0, 4);

    console.log(result);

};

// Function Call
extractText();

/*
Output

Java

Explanation

slice(start, end)

Start Index = Included

End Index = Excluded

JavaScript

0123456789

slice(0,4)

↓

Java

Real Project

Username

OTP

File Name

Time Complexity

O(n)
*/


/*
=========================================
Question 12
Topic: String - substring()
Difficulty: Medium

Problem:
Extract a substring.
=========================================
*/

// Arrow Function
const getName = () => {

    const name = "Subhadeep";

    const result = name.substring(0, 5);

    console.log(result);

};

// Function Call
getName();

/*
Output

Subha

Explanation

substring()

Works similar to slice()

Negative index

NOT Supported

Time Complexity

O(n)
*/



/*
=========================================
Question 13
Topic: String - charAt()
Difficulty: Easy

Problem:
Find character at a
specific position.
=========================================
*/

// Arrow Function
const firstCharacter = () => {

    const language = "JavaScript";

    console.log(language.charAt(0));

    console.log(language.charAt(4));

};

// Function Call
firstCharacter();

/*
Output

J

S

Explanation

charAt(index)

Returns character

at given index.

Real Project

Avatar Initial

First Letter

Logo Text

Time Complexity

O(1)
*/


/*
=========================================
Question 14
Topic: String - indexOf()
Difficulty: Easy

Problem:
Find first occurrence
of a word.
=========================================
*/

// Arrow Function
const findPosition = () => {

    const sentence =
        "Learn JavaScript Today";

    console.log(sentence.indexOf("JavaScript"));

};

// Function Call
findPosition();

/*
Output

6

Explanation

indexOf()

Returns first index

Returns -1

if not found

Real Project

Search

Highlight Text

Validation

Time Complexity

O(n)
*/


/*
=========================================
Question 15
Topic: String - lastIndexOf()
Difficulty: Medium

Problem:
Find the last occurrence
of a character.
=========================================
*/

// Arrow Function
const findLastPosition = () => {

    const text = "JavaScript JavaScript";

    console.log(text.lastIndexOf("JavaScript"));

};

// Function Call
findLastPosition();

/*
Output

11

Explanation

lastIndexOf()

Returns the LAST
matching position.

Useful when

Same word appears

multiple times.

Real Project

File Path

URL

Search

Time Complexity

O(n)
*/
const card = "1234567812345678";

const hidden =
    "************" + card.slice(-4);

console.log(hidden);

// ************5678



const file = "resume.pdf";

const extension =
    file.slice(file.lastIndexOf("."));

console.log(extension);

// .pdf



const name = "Subhadeep";

console.log(name.charAt(0));

// S



const email = "user@gmail.com";

console.log(email.indexOf("@"));

// 4const path =
"/images/profile/photo.png";

console.log(path.lastIndexOf("/"));

// 15