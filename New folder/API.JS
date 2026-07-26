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