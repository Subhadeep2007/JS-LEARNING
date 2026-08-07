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
/*
=========================================
Question 05
Topic: Display API Data
Difficulty: Medium

Problem:
Print all user names.
=========================================
*/

// Arrow Function
const displayUsers = async() => {

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/users"

    );

    const users = await response.json();

    users.forEach((user) => {

        console.log(user.name);

    });

};

// Function Call
displayUsers();

/*
Output

Leanne Graham

Ervin Howell

...

Explanation

API

↓

Array

↓

forEach()

↓

Print Data
*/
/*
=========================================
Question 06
Topic: try...catch
Difficulty: Easy

Problem:
Handle API errors using
try...catch.
=========================================
*/

// Arrow Function
const getUsers = async() => {

    try {

        const response = await fetch(

            "https://jsonplaceholder.typicode.com/users"

        );

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(

            "Error:",

            error.message

        );

    }

};

// Function Call
getUsers();

/*
Explanation

try

↓

Run Code

catch

↓

Handle Error

Real Project

API

Database

Authentication
*/
/*
=========================================
Question 07
Topic: response.ok
Difficulty: Medium

Problem:
Check whether API
request is successful.
=========================================
*/

// Arrow Function
const getUser = async() => {

    try {

        const response = await fetch(

            "https://jsonplaceholder.typicode.com/users/100"

        );

        if (!response.ok) {

            throw new Error(

                "User Not Found"

            );

        }

        const user = await response.json();

        console.log(user);

    } catch (error) {

        console.log(

            error.message

        );

    }

};

// Function Call
getUser();

/*
Explanation

response.ok

true

↓

Success

false

↓

Throw Error
*/

/*
=========================================
Question 08
Topic: POST Request
Difficulty: Medium

Problem:
Create a new user.
=========================================
*/

// Arrow Function
const createUser = async() => {

    const newUser = {

        name: "Subhadeep",

        email: "subhadeep@gmail.com"

    };

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/users",

        {

            method: "POST",

            headers: {

                "Content-Type":

                    "application/json"

            },

            body: JSON.stringify(

                newUser

            )

        }

    );

    const data = await response.json();

    console.log(data);

};

// Function Call
createUser();

/*
Explanation

POST

↓

Create New Data

body

↓

Request Data

JSON.stringify()

↓

Object → JSON
*/

/*
=========================================
Question 09
Topic: PUT Request
Difficulty: Medium

Problem:
Update existing user.
=========================================
*/

// Arrow Function
const updateUser = async() => {

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/users/1",

        {

            method: "PUT",

            headers: {

                "Content-Type":

                    "application/json"

            },

            body: JSON.stringify({

                name: "Updated User"

            })

        }

    );

    const data = await response.json();

    console.log(data);

};

// Function Call
updateUser();

/*
Explanation

PUT

↓

Update Entire Resource

Real Project

Edit Profile

Update Product
*/

/*
=========================================
Question 10
Topic: DELETE Request
Difficulty: Medium

Problem:
Delete a user.
=========================================
*/

// Arrow Function
const deleteUser = async() => {

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/users/1",

        {

            method: "DELETE"

        }

    );

    if (response.ok) {

        console.log(

            "User Deleted"

        );

    }

};

// Function Call
deleteUser();

/*
Explanation

DELETE

↓

Remove Resource

Real Project

Delete User

Delete Todo

Delete Product
*/