/*
=========================================
Question 01
Topic: Object
Difficulty: Easy

Problem:
Create an object and
print it.
=========================================
*/

// Arrow Function
const createObject = () => {

    // Create Object
    const student = {

        name: "Subhadeep",

        age: 22,

        course: "JavaScript"

    };

    // Print Object
    console.log(student);

};

// Function Call
createObject();

/*
Output

{
 name: "Subhadeep",
 age: 22,
 course: "JavaScript"
}

Explanation

Object stores data
using key-value pairs.

Time Complexity

O(1)
*/

/*
=========================================
Question 02
Topic: Object
Difficulty: Easy

Problem:
Access object properties.
=========================================
*/

// Arrow Function
const accessProperties = () => {

    const student = {

        name: "Subhadeep",

        age: 22,

        city: "Kolkata"

    };

    // Dot Notation
    console.log(student.name);

    // Bracket Notation
    console.log(student["city"]);

};

// Function Call
accessProperties();

/*
Output

Subhadeep

Kolkata

Explanation

Dot Notation

object.key

Bracket Notation

object["key"]

Time Complexity

O(1)
*/

/*
=========================================
Question 03
Topic: Object
Difficulty: Easy

Problem:
Update object property.
=========================================
*/

// Arrow Function
const updateObject = () => {

    const user = {

        name: "Rahul",

        age: 25

    };

    // Update Property
    user.age = 26;

    console.log(user);

};

// Function Call
updateObject();

/*
Output

{
 name:"Rahul",
 age:26
}

Explanation

Existing properties
can be updated directly.

Time Complexity

O(1)
*/


/*
=========================================
Question 04
Topic: Object
Difficulty: Easy

Problem:
Add and delete properties.
=========================================
*/

// Arrow Function
const modifyObject = () => {

    const employee = {

        name: "Amit"

    };

    // Add Property
    employee.department = "IT";

    // Delete Property
    delete employee.name;

    console.log(employee);

};

// Function Call
modifyObject();

/*
Output

{
 department:"IT"
}

Explanation

Add

object.key = value

Delete

delete object.key

Time Complexity

O(1)
*/


/*
=========================================
Question 05
Topic: Object Methods
Difficulty: Medium

Problem:
Print object keys,
values and entries.
=========================================
*/

// Arrow Function
const objectMethods = () => {

    const student = {

        name: "Subhadeep",

        age: 22,

        city: "Kolkata"

    };

    console.log(Object.keys(student));

    console.log(Object.values(student));

    console.log(Object.entries(student));

};

// Function Call
objectMethods();

/*
Output

["name","age","city"]

["Subhadeep",22,"Kolkata"]

[
 ["name","Subhadeep"],
 ["age",22],
 ["city","Kolkata"]
]

Explanation

Object.keys()

Returns keys

Object.values()

Returns values

Object.entries()

Returns key-value pairs

Real Project

Tables

Forms

API Data

Time Complexity

O(n)
*/