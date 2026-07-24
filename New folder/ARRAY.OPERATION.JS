/*
=========================================
Question 06
Topic: Array - push()
Difficulty: Easy

Problem:
Add a new element at the end
of an array.
=========================================
*/

// Arrow Function
const addFruit = () => {

    // Create Array
    const fruits = ["Apple", "Banana", "Mango"];

    // Add new element
    fruits.push("Orange");

    // Print updated array
    console.log(fruits);

};

// Function Call
addFruit();

/*
Output

["Apple", "Banana", "Mango", "Orange"]

Explanation

push()

Adds element at the END
of the array.

Original Array

Apple Banana Mango

↓

After push()

Apple Banana Mango Orange

Time Complexity

O(1)
*/
/*
=========================================
Question 07
Topic: Array - pop()
Difficulty: Easy

Problem:
Remove the last element
from an array.
=========================================
*/

// Arrow Function
const removeLast = () => {

    const fruits = ["Apple", "Banana", "Mango", "Orange"];

    // Remove last element
    const deletedItem = fruits.pop();

    console.log("Removed =", deletedItem);

    console.log(fruits);

};

// Function Call
removeLast();

/*
Output

Removed = Orange

["Apple","Banana","Mango"]

Explanation

pop()

Removes LAST element
and returns it.

Time Complexity

O(1)
*/
/*
=========================================
Question 08
Topic: Array - shift()
Difficulty: Easy

Problem:
Remove first element
from an array.
=========================================
*/

// Arrow Function
const removeFirst = () => {

    const fruits = ["Apple", "Banana", "Mango"];

    // Remove first element
    const deletedItem = fruits.shift();

    console.log("Removed =", deletedItem);

    console.log(fruits);

};

// Function Call
removeFirst();

/*
Output

Removed = Apple

["Banana","Mango"]

Explanation

shift()

Removes FIRST element.

Time Complexity

O(n)

Because remaining elements
are shifted left.
*/



/*
=========================================
Question 09
Topic: Array - unshift()
Difficulty: Easy

Problem:
Add element at beginning.
=========================================
*/

// Arrow Function
const addFirst = () => {

    const fruits = ["Banana", "Mango"];

    // Add at beginning
    fruits.unshift("Apple");

    console.log(fruits);

};

// Function Call
addFirst();

/*
Output

["Apple","Banana","Mango"]

Explanation

unshift()

Adds element
at FIRST position.

Time Complexity

O(n)
*/



/*
=========================================
Question 10
Topic: Array - includes()
Difficulty: Easy

Problem:
Check whether an element
exists in an array.
=========================================
*/

// Arrow Function
const checkFruit = () => {

    const fruits = ["Apple", "Banana", "Mango"];

    console.log(fruits.includes("Banana"));

    console.log(fruits.includes("Orange"));

};

// Function Call
checkFruit();

/*
Output

true

false

Explanation

includes()

Returns

true

if value exists

Otherwise

false

Real Example

Login Role

Permission Check

Product Exists

Time Complexity

O(n)
*/