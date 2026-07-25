/*
=========================================
Question 01
Topic: let
Difficulty: Easy

Problem:
Declare a variable using let.
=========================================
*/

// Arrow Function
const useLet = () => {

    // Declare Variable
    let age = 22;

    console.log(age);

    // Update Value
    age = 23;

    console.log(age);

};

// Function Call
useLet();

/*
Output

22

23

Explanation

let

✔ Can Update

✔ Block Scope

❌ Cannot Redeclare
*/


/*
=========================================
Question 02
Topic: const
Difficulty: Easy

Problem:
Declare constant variable.
=========================================
*/

// Arrow Function
const useConst = () => {

    // Constant Variable
    const company = "OpenAI";

    console.log(company);

    // company = "Google"; ❌ Error

};

// Function Call
useConst();

/*
Output

OpenAI

Explanation

const

❌ Cannot Update

❌ Cannot Redeclare

✔ Block Scope

Use const by default.
*/


/*
=========================================
Question 03
Topic: Arrow Function
Difficulty: Easy

Problem:
Add two numbers.
=========================================
*/

// Arrow Function
const add = (a, b) => {

    return a + b;

};

// Function Call
console.log(add(10, 20));

/*
Output

30

Explanation

Arrow Function

const add = (a,b)=>{

}

React mostly uses

Arrow Functions.
*/


/*
=========================================
Question 04
Topic: Default Parameters
Difficulty: Easy

Problem:
Use default parameter.
=========================================
*/

// Arrow Function
const welcome = (name = "Guest") => {

    console.log(`Welcome ${name}`);

};

// Function Call
welcome();

welcome("Subhadeep");

/*
Output

Welcome Guest

Welcome Subhadeep

Explanation

Default Parameter

Used when

No value is passed.

Real Project

User Profile

Search Filter
*/


/*
=========================================
Question 05
Topic: Template Literals
Difficulty: Easy

Problem:
Create a welcome message.
=========================================
*/

// Arrow Function
const greeting = () => {

    const name = "Subhadeep";

    const course = "JavaScript";

    console.log(

        `Hello ${name},
Welcome to ${course}.`

    );

};

// Function Call
greeting();

/*
Output

Hello Subhadeep,

Welcome to JavaScript.

Explanation

Template Literals

Uses

` `

and

${ }

Real Project

Invoice

Email

Profile

API Response
*/


/*
=========================================
Question 06
Topic: Spread Operator (...)
Difficulty: Easy

Problem:
Copy an array using
Spread Operator.
=========================================
*/

// Arrow Function
const copyArray = () => {

    // Original Array
    const fruits = [

        "Apple",

        "Banana",

        "Mango"

    ];

    // Copy Array
    const newFruits = [

        ...fruits

    ];

    console.log(newFruits);

};

// Function Call
copyArray();

/*
Output

[
 "Apple",
 "Banana",
 "Mango"
]

Explanation

...

Copies all elements.

Real Project

React State Update

Array Copy

Time Complexity

O(n)
*/



/*
=========================================
Question 07
Topic: Rest Operator (...)
Difficulty: Medium

Problem:
Find total using
Rest Operator.
=========================================
*/

// Arrow Function
const totalMarks = (...marks) => {

    let total = 0;

    for (const mark of marks) {

        total += mark;

    }

    return total;

};

// Function Call
console.log(

    totalMarks(80, 90, 70, 60)

);

/*
Output

300

Explanation

Rest Operator

Collects multiple values

into one array.

Real Project

Shopping Cart

Dynamic Arguments

Time Complexity

O(n)
*/


/*
=========================================
Question 08
Topic: Array Destructuring
Difficulty: Easy

Problem:
Extract array values.
=========================================
*/

// Arrow Function
const arrayDestructuring = () => {

    const colors = [

        "Red",

        "Green",

        "Blue"

    ];

    // Destructuring
    const [

        first,

        second,

        third

    ] = colors;

    console.log(first);

    console.log(second);

    console.log(third);

};

// Function Call
arrayDestructuring();

/*
Output

Red

Green

Blue

Explanation

Extract values

without index.

Real Project

API Response

React Hooks

Time Complexity

O(1)
*/


/*
=========================================
Question 09
Topic: Object Destructuring
Difficulty: Easy

Problem:
Extract object properties.
=========================================
*/

// Arrow Function
const objectDestructuring = () => {

    const user = {

        name: "Subhadeep",

        age: 22,

        city: "Kolkata"

    };

    // Destructuring
    const {

        name,

        city

    } = user;

    console.log(name);

    console.log(city);

};

// Function Call
objectDestructuring();

/*
Output

Subhadeep

Kolkata

Explanation

Extract object values

without writing

user.name

Real Project

React Props

API Response

Time Complexity

O(1)
*/
/*
=========================================
Question 10
Topic: Enhanced Object Literals
Difficulty: Medium

Problem:
Create an object using
ES6 shorthand syntax.
=========================================
*/

// Arrow Function
const createUser = () => {

    const name = "Subhadeep";

    const age = 22;

    // Shorthand Object
    const user = {

        name,

        age

    };

    console.log(user);

};

// Function Call
createUser();

/*
Output

{
 name:"Subhadeep",
 age:22
}

Explanation

Instead of

name:name

age:age

Use

name

age

Real Project

API Request

React State

Time Complexity

O(1)
*/


/*
=========================================
Question 10
Topic: Enhanced Object Literals
Difficulty: Medium

Problem:
Create an object using
ES6 shorthand syntax.
=========================================
*/

// Arrow Function
const createUser = () => {

    const name = "Subhadeep";

    const age = 22;

    // Shorthand Object
    const user = {

        name,

        age

    };

    console.log(user);

};

// Function Call
createUser();

/*
Output

{
 name:"Subhadeep",
 age:22
}

Explanation

Instead of

name:name

age:age

Use

name

age

Real Project

API Request

React State

Time Complexity

O(1)
*/


/*
=========================================
Question 12
Topic: Set
Difficulty: Medium

Problem:
Remove duplicate values.
=========================================
*/

// Arrow Function
const removeDuplicates = () => {

    // Array
    const numbers = [

        10,

        20,

        20,

        30,

        30,

        40

    ];

    // Remove Duplicates
    const uniqueNumbers = [

        ...new Set(numbers)

    ];

    console.log(uniqueNumbers);

};

// Function Call
removeDuplicates();

/*
Output

[10,20,30,40]

Explanation

Set

Stores only unique values.

Real Project

Unique Categories

Unique User IDs

Unique Tags

Time Complexity

O(n)
*/


/*
=========================================
Question 13
Topic: Set Methods
Difficulty: Medium

Problem:
Use add(), delete(),
has() and size.
=========================================
*/

// Arrow Function
const setMethods = () => {

    // Create Set
    const fruits = new Set();

    // Add Values
    fruits.add("Apple");

    fruits.add("Banana");

    fruits.add("Mango");

    // Check Value
    console.log(

        fruits.has("Banana")

    );

    // Delete Value
    fruits.delete("Apple");

    console.log(fruits);

    // Total Values
    console.log(fruits.size);

};

// Function Call
setMethods();

/*
Output

true

Set { "Banana", "Mango" }

2

Explanation

add()

Adds value

delete()

Removes value

has()

Checks existence

size

Returns total values
*/

/*
=========================================
Question 14
Topic: Map
Difficulty: Medium

Problem:
Store key-value pairs.
=========================================
*/

// Arrow Function
const mapExample = () => {

    // Create Map
    const user = new Map();

    // Add Values
    user.set("name", "Subhadeep");

    user.set("age", 22);

    user.set("city", "Kolkata");

    console.log(user);

};

// Function Call
mapExample();

/*
Output

Map(3) {

"name" => "Subhadeep",

"age" => 22,

"city" => "Kolkata"

}

Explanation

Map

Stores key-value pairs.

Keys can be

String

Number

Object

Function

Time Complexity

O(1)
*/


/*
=========================================
Question 15
Topic: Map Methods
Difficulty: Medium

Problem:
Use get(), set(),
has(), delete(), size.
=========================================
*/

// Arrow Function
const mapMethods = () => {

    // Create Map
    const employee = new Map();

    employee.set("id", 101);

    employee.set("name", "Rahul");

    employee.set("department", "IT");

    // Get Value
    console.log(

        employee.get("name")

    );

    // Check Key
    console.log(

        employee.has("id")

    );

    // Delete Key
    employee.delete("department");

    console.log(employee);

    // Total Entries
    console.log(employee.size);

};

// Function Call
mapMethods();

/*
Output

Rahul

true

Map(2) {

"id" => 101,

"name" => "Rahul"

}

2

Explanation

set()

Adds value

get()

Returns value

has()

Checks key

delete()

Removes key

size

Returns total entries
*/