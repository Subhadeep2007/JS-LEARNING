/*
=========================================
Question 16
Topic: Promise
Difficulty: Easy

Problem:
Create a simple Promise.
=========================================
*/

// Arrow Function
const promiseExample = () => {

    const result = new Promise((resolve, reject) => {

        const success = true;

        if (success) {

            resolve("Data Loaded Successfully");

        } else {

            reject("Failed To Load Data");

        }

    });

    result
        .then((data) => {

            console.log(data);

        })
        .catch((error) => {

            console.log(error);

        });

};

// Function Call
promiseExample();

/*
Output

Data Loaded Successfully

Explanation

resolve()

↓

Success

reject()

↓

Failure

then()

↓

Handles Success

catch()

↓

Handles Error

Real Project

API Request

Login

Payment
*/


/*
=========================================
Question 17
Topic: Promise Chaining
Difficulty: Medium

Problem:
Chain multiple operations.
=========================================
*/

// Arrow Function
const promiseChain = () => {

    Promise.resolve(10)

    .then((number) => {

        return number * 2;

    })

    .then((number) => {

        return number + 5;

    })

    .then((result) => {

        console.log(result);

    });

};

// Function Call
promiseChain();

/*
Output

25

Explanation

10

↓

20

↓

25

Each then()

returns value

to next then().
*/

/*
=========================================
Question 18
Topic: Promise.all()
Difficulty: Medium

Problem:
Run multiple promises
at the same time.
=========================================
*/

// Arrow Function
const loadData = () => {

    const user = Promise.resolve("User");

    const products = Promise.resolve("Products");

    const orders = Promise.resolve("Orders");

    Promise.all([

        user,

        products,

        orders

    ]).then((result) => {

        console.log(result);

    });

};

// Function Call
loadData();

/*
Output

[
 "User",
 "Products",
 "Orders"
]

Explanation

Promise.all()

Runs all promises

Waits for ALL

to complete.

Real Project

Dashboard

Multiple APIs
*/


/*
=========================================
Question 19
Topic: Promise.race()
Difficulty: Medium

Problem:
Return the fastest promise.
=========================================
*/

// Arrow Function
const raceExample = () => {

    const first = new Promise((resolve) => {

        setTimeout(() => {

            resolve("First");

        }, 1000);

    });

    const second = new Promise((resolve) => {

        setTimeout(() => {

            resolve("Second");

        }, 2000);

    });

    Promise.race([

        first,

        second

    ]).then((result) => {

        console.log(result);

    });

};

// Function Call
raceExample();

/*
Output

First

Explanation

Promise.race()

Returns

First Completed Promise.

Real Project

Fastest Server

Multiple Mirrors
*/