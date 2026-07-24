/*
=========================================
Question 01
Topic: Array
Difficulty: Easy

Problem:
Create an array and print all elements.
=========================================
*/

// Arrow Function
const createArray = () => {

    // Create array
    const fruits = ["Apple", "Banana", "Mango", "Orange"];

    // Print array
    console.log(fruits);

};

// Function Call
createArray();

/*
Output

["Apple", "Banana", "Mango", "Orange"]

Explanation

Array stores multiple values
inside a single variable.

Time Complexity

O(1)
*/




/*
=========================================
Question 02
Topic: Array
Difficulty: Easy

Problem:
Access array elements using index.
=========================================
*/

// Arrow Function
const accessElement = () => {

    const fruits = ["Apple", "Banana", "Mango"];

    console.log(fruits[0]);

    console.log(fruits[1]);

    console.log(fruits[2]);

};

// Function Call
accessElement();

/*
Output

Apple

Banana

Mango

Explanation

Array index starts from 0.

Time Complexity

O(1)
*/




/*
=========================================
Question 03
Topic: Array
Difficulty: Easy

Problem:
Update an array element.
=========================================
*/

// Arrow Function
const updateElement = () => {

    const fruits = ["Apple", "Banana", "Mango"];

    // Update element
    fruits[1] = "Grapes";

    console.log(fruits);

};

// Function Call
updateElement();

/*
Output

["Apple", "Grapes", "Mango"]

Explanation

Use index to update
existing value.

Time Complexity

O(1)
*/
/*
=========================================
Question 04
Topic: Array
Difficulty: Easy

Problem:
Find the length of an array.
=========================================
*/

// Arrow Function
const arrayLength = () => {

    const numbers = [10, 20, 30, 40, 50];

    console.log(numbers.length);

};

// Function Call
arrayLength();

/*
Output

5

Explanation

.length returns
total number of elements.

Time Complexity

O(1)
*/




/*
=========================================
Question 05
Topic: Array
Difficulty: Easy

Problem:
Print all array elements
using for...of loop.
=========================================
*/

// Arrow Function
const printArray = () => {

    const fruits = ["Apple", "Banana", "Mango"];

    // Loop through array
    for (const fruit of fruits) {

        console.log(fruit);

    }

};

// Function Call
printArray();

/*
Output

Apple

Banana

Mango

Explanation

for...of returns
each array element directly.

Time Complexity

O(n)
*/