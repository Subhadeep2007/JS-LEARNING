/*
=========================================
Question 01
Topic: Async Function

Problem:
Create a basic async function.
=========================================
*/

// Async Function
const greet = async() => {

    return "Hello JavaScript";

};

// Function Call
greet().then((result) => {

    console.log(result);

});

/*
Output

Hello JavaScript

Explanation

1. async keyword makes a function asynchronous.

2. async function always returns a Promise.

3. Even if you return a string,
JavaScript wraps it inside Promise.

Promise {
   "Hello JavaScript"
}

Interview Point

Every async function
returns a Promise.
*/



/*
=========================================
Question 02
Topic: Await

Problem:
Use await with Promise.
=========================================
*/

// Async Function
const message = async() => {

    // Wait for Promise
    let result = await Promise.resolve("Welcome");

    console.log(result);

};

// Function Call
message();

/*
Output

Welcome

Explanation

await waits until
Promise is resolved.

Then stores value
inside result.
*/



/*
=========================================
Question 03

Problem

Return user information.
=========================================
*/

const getUser = async() => {

    return {

        id: 1,

        name: "Subhadeep"

    };

};

const displayUser = async() => {

    const user = await getUser();

    console.log(user);

};

displayUser();

/*
Output

{
 id:1,
 name:"Subhadeep"
}
*/



/*
=========================================
Question 04

Problem

Create delay using Promise.
=========================================
*/

const delay = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("2 Seconds Completed");

        }, 2000);

    });

};

const start = async() => {

    console.log("Start");

    const result = await delay();

    console.log(result);

    console.log("End");

};

start();

/*
Output

Start

(wait 2 sec)

2 Seconds Completed

End

Explanation

await pauses execution
until Promise resolves.
*/



/*
=========================================
Question 05

Problem

Consume Promise
using async await.
=========================================
*/

const login = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Login Successful");

        }, 1000);

    });

};

const userLogin = async() => {

    const result = await login();

    console.log(result);

};

userLogin();

/*
Output

Login Successful
*/