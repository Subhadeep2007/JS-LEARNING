/*
=========================================
Question 02
Topic: Fetch API
Difficulty: Easy

Problem:
Call an API.
=========================================
*/

// Arrow Function
const getUsers = () => {

    fetch(

        "https://jsonplaceholder.typicode.com/users"

    )

    .then((response) => {

        return response.json();

    })

    .then((data) => {

        console.log(data);

    });

};

// Function Call
getUsers();

/*
Output

[
    {
        id:1,
        name:"Leanne Graham"
    },
    ...
]

Explanation

fetch()

↓

Request

response.json()

↓

Convert JSON

↓

JavaScript Object
*/
/*
=========================================
Question 03
Topic: Async Await
Difficulty: Easy

Problem:
Fetch users using
async/await.
=========================================
*/

// Arrow Function
const getUsers = async() => {

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/users"

    );

    const users = await response.json();

    console.log(users);

};

// Function Call
getUsers();

/*
Explanation

await

Waits until

fetch()

is completed.

Much cleaner than

.then()
*/



/*
=========================================
Question 04
Topic: GET Single User
Difficulty: Easy

Problem:
Get one user.
=========================================
*/

// Arrow Function
const getUser = async() => {

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/users/1"

    );

    const user = await response.json();

    console.log(user);

};

// Function Call
getUser();

/*
Output

{

id:1,

name:"Leanne Graham"

}
*/