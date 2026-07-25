/*
=========================================
Question 06
Topic: Object.assign()
Difficulty: Easy

Problem:
Merge two objects.
=========================================
*/

// Arrow Function
const mergeObjects = () => {

    // First Object
    const user = {

        name: "Subhadeep"

    };

    // Second Object
    const details = {

        age: 22,

        city: "Kolkata"

    };

    // Merge Objects
    const result = Object.assign({}, user, details);

    console.log(result);

};

// Function Call
mergeObjects();

/*
Output

{
    name: "Subhadeep",
    age: 22,
    city: "Kolkata"
}

Explanation

Object.assign()

Combines multiple objects
into one object.

Real Project

Merge API Response

Merge User Settings

Time Complexity

O(n)
*/


/*
=========================================
Question 07
Topic: Spread Operator
Difficulty: Easy

Problem:
Copy an object.
=========================================
*/

// Arrow Function
const copyObject = () => {

    const user = {

        name: "Subhadeep",

        age: 22

    };

    // Copy Object
    const newUser = {

        ...user

    };

    console.log(newUser);

};

// Function Call
copyObject();

/*
Output

{
    name:"Subhadeep",
    age:22
}

Explanation

...

Copies all properties.

Real Project

React State Update

API Data Copy

Time Complexity

O(n)
*/



/*
=========================================
Question 08
Topic: Object Destructuring
Difficulty: Medium

Problem:
Extract object properties.
=========================================
*/

// Arrow Function
const destructureObject = () => {

    const user = {

        name: "Subhadeep",

        age: 22,

        city: "Kolkata"

    };

    // Destructuring
    const {

        name,

        age

    } = user;

    console.log(name);

    console.log(age);

};

// Function Call
destructureObject();

/*
Output

Subhadeep

22

Explanation

Destructuring

Extracts values directly
from an object.

Real Project

React Props

API Response

Time Complexity

O(1)
*/

/*
=========================================
Question 09
Topic: Nested Object
Difficulty: Medium

Problem:
Access nested object values.
=========================================
*/

// Arrow Function
const nestedObject = () => {

    const user = {

        name: "Subhadeep",

        address: {

            city: "Kolkata",

            state: "West Bengal"

        }

    };

    console.log(user.address.city);

    console.log(user.address.state);

};

// Function Call
nestedObject();

/*
Output

Kolkata

West Bengal

Explanation

Nested Objects

Objects inside objects.

Real Project

API Response

User Address

Product Details

Time Complexity

O(1)
*/
/*
=========================================
Question 10
Topic: for...in
Difficulty: Medium

Problem:
Print all object keys
and values.
=========================================
*/

// Arrow Function
const printObject = () => {

    const student = {

        name: "Subhadeep",

        age: 22,

        course: "JavaScript"

    };

    // Loop Object
    for (const key in student) {

        console.log(key, ":", student[key]);

    }

};

// Function Call
printObject();

/*
Output

name : Subhadeep

age : 22

course : JavaScript

Explanation

for...in

Loops through
all object keys.

Real Project

Dynamic Tables

Forms

Profile Page

Time Complexity

O(n)
*/
const user = {

    id: 1,

    name: "Subhadeep",

    email: "subhadeep@gmail.com"

};

// Object Destructuring
const {

    name,

    email

} = user;

console.log(name);

console.log(email);



const response = {

    success: true,

    data: {

        id: 1,

        name: "Laptop",

        price: 50000

    }

};

console.log(response.data.name);

console.log(response.data.price);