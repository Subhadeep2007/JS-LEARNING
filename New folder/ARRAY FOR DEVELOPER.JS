/*
=========================================
Question 11
Topic: Array - indexOf()
Difficulty: Easy

Problem:
Find the index of an element.
=========================================
*/

// Arrow Function
const findIndex = () => {

    // Array
    const fruits = [
        "Apple",
        "Banana",
        "Mango",
        "Orange"
    ];

    // Find index
    const index = fruits.indexOf("Mango");

    console.log(index);

};

// Function Call
findIndex();

/*
Output

2

Explanation

indexOf()

Returns index
of first matching value.

If value not found

Returns -1

Time Complexity

O(n)
*/
/*
=========================================
Question 12
Topic: Array - find()
Difficulty: Medium

Problem:
Find first user whose age
is greater than or equal to 18.
=========================================
*/

// Arrow Function
const findUser = () => {

    // Users
    const users = [

        {
            id: 1,
            name: "Rahul",
            age: 16
        },

        {
            id: 2,
            name: "Amit",
            age: 22
        },

        {
            id: 3,
            name: "Riya",
            age: 25
        }

    ];

    // Find user
    const result = users.find((user) => {

        return user.age >= 18;

    });

    console.log(result);

};

// Function Call
findUser();

/*
Output

{
 id:2,
 name:"Amit",
 age:22
}

Explanation

find()

Returns ONLY
the first matching object.

Interview

Used in Login

Profile

Product Details

Time Complexity

O(n)
*/



/*
=========================================
Question 13
Topic: Array - findIndex()
Difficulty: Medium

Problem:
Find index of user
whose id is 3.
=========================================
*/

// Arrow Function
const userIndex = () => {

    const users = [

        { id: 1, name: "Rahul" },

        { id: 2, name: "Amit" },

        { id: 3, name: "Riya" }

    ];

    // Find Index
    const index = users.findIndex((user) => {

        return user.id === 3;

    });

    console.log(index);

};

// Function Call
userIndex();

/*
Output

2

Explanation

findIndex()

Returns index

Not object

Time Complexity

O(n)
*/
/*
=========================================
Question 14
Topic: Array - filter()
Difficulty: Medium

Problem:
Filter active users.
=========================================
*/

// Arrow Function
const activeUsers = () => {

    const users = [

        {
            name: "Rahul",
            active: true
        },

        {
            name: "Amit",
            active: false
        },

        {
            name: "Riya",
            active: true
        }

    ];

    // Filter users
    const result = users.filter((user) => {

        return user.active;

    });

    console.log(result);

};

// Function Call
activeUsers();

/*
Output

[
 {name:"Rahul"},
 {name:"Riya"}
]

Explanation

filter()

Returns ALL matching data.

Real Project

Product Filter

Category Filter

Search Result

Time Complexity

O(n)
*/


/*
=========================================
Question 15
Topic: Array - map()
Difficulty: Medium

Problem:
Return only user names.
=========================================
*/

// Arrow Function
const userNames = () => {

    const users = [

        {
            id: 1,
            name: "Rahul"
        },

        {
            id: 2,
            name: "Amit"
        },

        {
            id: 3,
            name: "Riya"
        }

    ];

    // Map data
    const names = users.map((user) => {

        return user.name;

    });

    console.log(names);

};

// Function Call
userNames();

/*
Output

[
 "Rahul",
 "Amit",
 "Riya"
]

Explanation

map()

Transforms every item

Returns NEW array

Real Project

Render Products

Render Users

React JSX

Time Complexity

O(n)
*/



/*
=========================================
Question 16
Topic: Array - forEach()
Difficulty: Easy

Problem:
Print all product names.
=========================================
*/

// Arrow Function
const printProducts = () => {

    // Products Array
    const products = [

        "Laptop",

        "Mobile",

        "Keyboard",

        "Mouse"

    ];

    // Loop through array
    products.forEach((product, index) => {

        console.log(index, product);

    });

};

// Function Call
printProducts();

/*
Output

0 Laptop

1 Mobile

2 Keyboard

3 Mouse

Explanation

forEach()

Loops through every element.

Does NOT return a new array.

Used for

Printing

API Response

Rendering Data

Time Complexity

O(n)
*/
/*
=========================================
Question 17
Topic: Array - some()
Difficulty: Medium

Problem:
Check if at least one user
is an Admin.
=========================================
*/

// Arrow Function
const checkAdmin = () => {

    const users = [

        {
            name: "Rahul",
            role: "User"
        },

        {
            name: "Amit",
            role: "Admin"
        },

        {
            name: "Riya",
            role: "User"
        }

    ];

    // Check
    const result = users.some((user) => {

        return user.role === "Admin";

    });

    console.log(result);

};

// Function Call
checkAdmin();

/*
Output

true

Explanation

some()

Returns true

if ANY element matches.

Real Project

Role Check

Permission Check

Time Complexity

O(n)
*/
/*
=========================================
Question 18
Topic: Array - every()
Difficulty: Medium

Problem:
Check whether every student
has passed.
=========================================
*/

// Arrow Function
const checkResult = () => {

    const students = [

        {
            name: "A",
            pass: true
        },

        {
            name: "B",
            pass: true
        },

        {
            name: "C",
            pass: true
        }

    ];

    const result = students.every((student) => {

        return student.pass;

    });

    console.log(result);

};

// Function Call
checkResult();

/*
Output

true

Explanation

every()

Returns true

Only if ALL elements satisfy condition.

Time Complexity

O(n)
*/
/*
=========================================
Question 19
Topic: Array - reduce()
Difficulty: Hard

Problem:
Calculate shopping cart total.
=========================================
*/

// Arrow Function
const cartTotal = () => {

    const cart = [

        {
            product: "Laptop",
            price: 50000
        },

        {
            product: "Mouse",
            price: 1000
        },

        {
            product: "Keyboard",
            price: 2000
        }

    ];

    // Calculate total
    const total = cart.reduce((sum, item) => {

        return sum + item.price;

    }, 0);

    console.log("Total =", total);

};

// Function Call
cartTotal();

/*
Output

Total = 53000

Explanation

reduce()

Combines all values

into one result.

Real Project

Shopping Cart

Salary

Marks

Total Revenue

Time Complexity

O(n)
*/



/*
=========================================
Question 20
Topic: Array - sort()
Difficulty: Medium

Problem:
Sort product prices
in ascending order.
=========================================
*/

// Arrow Function
const sortPrices = () => {

    const prices = [

        500,

        200,

        1000,

        300

    ];

    // Sort
    prices.sort((a, b) => {

        return a - b;

    });

    console.log(prices);

};

// Function Call
sortPrices();

/*
Output

[200,300,500,1000]

Explanation

sort()

Ascending

a - b

Descending

b - a

Real Project

Price Filter

Rating Filter

Newest First

Time Complexity

O(n log n)
*/