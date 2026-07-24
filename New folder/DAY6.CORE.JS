/*
=========================================
Question 06
Topic: Fetch API + Async Await
Difficulty: Easy

Problem:
Fetch all users from API.
=========================================
*/

// Async Function
const getUsers = async () => {

    // Wait for API response
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    // Convert response into JSON
    const users = await response.json();

    // Print users
    console.log(users);

};

// Function Call
getUsers();

/*
Output

[
 { id:1, name:"Leanne Graham" },
 { id:2, name:"Ervin Howell" },
 ...
]

Explanation

fetch()

↓

Response Object

↓

response.json()

↓

JavaScript Object

↓

Print Data

Time Complexity

O(n)
*/



/*
=========================================
Question 07
Topic: Fetch API
Difficulty: Easy

Problem:
Fetch a single user.
=========================================
*/

const getUser = async () => {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const user = await response.json();

    console.log(user);

};

getUser();

/*
Output

{
 id:1,
 name:"Leanne Graham"
}

Explanation

/users/1

returns

only one user.
*/



/*
=========================================
Question 08
Topic: Try Catch
Difficulty: Medium

Problem:
Handle API Errors.
=========================================
*/

const getUsers = async () => {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error :", error.message);

    }

};

getUsers();

/*
Explanation

try

Normal code

catch

Handles errors

Interview

Always use try-catch
with async await.
*/




/*
=========================================
Question 09

Topic

Multiple Await

=========================================
*/

const getUser = async () => {

    const userResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const user = await userResponse.json();

    console.log(user);

    const postResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
    );

    const posts = await postResponse.json();

    console.log(posts);

};

getUser();

/*
Explanation

API 1

↓

Wait

↓

API 2

↓

Wait

Sequential Calls
*/




/*
=========================================
Question 10

Topic

Promise.all()

Difficulty

Hard

=========================================
*/

const getData = async () => {

    const [users, posts] = await Promise.all([

        fetch("https://jsonplaceholder.typicode.com/users"),

        fetch("https://jsonplaceholder.typicode.com/posts")

    ]);

    const userData = await users.json();

    const postData = await posts.json();

    console.log(userData);

    console.log(postData);

};

getData();

/*
Explanation

Promise.all()

Runs APIs together

Faster

Instead of

API1

↓

Wait

↓

API2

Both execute

at same time.

Interview

Promise.all()

is preferred

for multiple APIs.
*/