/*
=========================================
Question 16
Topic: Object to Array
Difficulty: Medium

Problem:
Convert an object
into an array.
=========================================
*/

// Arrow Function
const objectToArray = () => {

    // Object
    const user = {

        name: "Subhadeep",

        age: 22,

        city: "Kolkata"

    };

    // Convert Object → Array
    const result = Object.entries(user);

    console.log(result);

};

// Function Call
objectToArray();

/*
Output

[
 ["name","Subhadeep"],
 ["age",22],
 ["city","Kolkata"]
]

Explanation

Object.entries()

Converts object

↓

Array of key-value pairs.

Real Project

Dynamic Tables

Forms

API Data
*/
/*
=========================================
Question 17
Topic: Array to Object
Difficulty: Medium

Problem:
Convert array into object.
=========================================
*/

// Arrow Function
const arrayToObject = () => {

    // Array
    const entries = [

        ["name", "Subhadeep"],

        ["age", 22],

        ["city", "Kolkata"]

    ];

    // Convert Array → Object
    const result = Object.fromEntries(entries);

    console.log(result);

};

// Function Call
arrayToObject();

/*
Output

{
 name:"Subhadeep",
 age:22,
 city:"Kolkata"
}

Explanation

Object.fromEntries()

Array

↓

Object

Real Project

Form Data

API Response
*/
/*
=========================================
Question 18
Topic: Count Properties
Difficulty: Easy

Problem:
Count total properties
inside an object.
=========================================
*/

// Arrow Function
const countProperties = () => {

    const product = {

        id: 1,

        name: "Laptop",

        price: 50000,

        brand: "Dell"

    };

    const total = Object.keys(product).length;

    console.log(total);

};

// Function Call
countProperties();

/*
Output

4

Explanation

Object.keys()

↓

Array

↓

length
*/
/*
=========================================
Question 19
Topic: Deep Copy vs Shallow Copy
Difficulty: Hard

Problem:
Understand shallow copy
and deep copy.
=========================================
*/

// Arrow Function
const copyExample = () => {

    const user = {

        name: "Subhadeep",

        address: {

            city: "Kolkata"

        }

    };

    // Shallow Copy
    const shallowCopy = {

        ...user

    };

    // Deep Copy
    const deepCopy =
        structuredClone(user);

    // Update Nested Object
    shallowCopy.address.city = "Delhi";

    console.log(user.address.city);

    console.log(deepCopy.address.city);

};

// Function Call
copyExample();

/*
Output

Delhi

Kolkata

Explanation

Spread Operator

↓

Shallow Copy

structuredClone()

↓

Deep Copy

Interview

Very Important
*/




/*
=========================================
Question 20
Topic: JSON
Difficulty: Medium

Problem:
Convert Object ↔ JSON
=========================================
*/

// Arrow Function
const jsonExample = () => {

    const user = {

        name: "Subhadeep",

        age: 22

    };

    // Object → JSON
    const json = JSON.stringify(user);

    console.log(json);

    // JSON → Object
    const object = JSON.parse(json);

    console.log(object);

};

// Function Call
jsonExample();

/*
Output

{"name":"Subhadeep","age":22}

{
 name:"Subhadeep",
 age:22
}

Explanation

JSON.stringify()

Object → JSON

JSON.parse()

JSON → Object

Real Project

API

Local Storage

Database
*/