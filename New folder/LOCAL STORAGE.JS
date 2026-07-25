/*
=========================================
Question 01
Topic: localStorage.setItem()
Difficulty: Easy

Problem:
Store a username in
localStorage.
=========================================
*/

// Arrow Function
const saveUsername = () => {

    // Save Data
    localStorage.setItem(

        "username",

        "Subhadeep"

    );

    console.log("Username Saved");

};

// Function Call
saveUsername();

/*
Output

Username Saved

Explanation

setItem(key, value)

Stores data in browser.

Real Project

Login

Theme

Cart

Time Complexity

O(1)
*/

/*
=========================================
Question 02
Topic: localStorage.getItem()
Difficulty: Easy

Problem:
Read username from
localStorage.
=========================================
*/

// Arrow Function
const getUsername = () => {

    // Read Data
    const username = localStorage.getItem(

        "username"

    );

    console.log(username);

};

// Function Call
getUsername();

/*
Output

Subhadeep

Explanation

getItem(key)

Returns stored value.

If key doesn't exist

↓

Returns null.

Time Complexity

O(1)
*/


/*
=========================================
Question 03
Topic: localStorage.removeItem()
Difficulty: Easy

Problem:
Remove username from
localStorage.
=========================================
*/

// Arrow Function
const removeUsername = () => {

    // Remove Data
    localStorage.removeItem(

        "username"

    );

    console.log("Username Removed");

};

// Function Call
removeUsername();

/*
Output

Username Removed

Explanation

removeItem(key)

Deletes only
one specific key.

Time Complexity

O(1)
*/




/*
=========================================
Question 04
Topic: localStorage.clear()
Difficulty: Easy

Problem:
Remove all data
from localStorage.
=========================================
*/

// Arrow Function
const clearStorage = () => {

    // Remove Everything
    localStorage.clear();

    console.log("Storage Cleared");

};

// Function Call
clearStorage();

/*
Output

Storage Cleared

Explanation

clear()

Deletes ALL keys
from localStorage.

Use Carefully.

Time Complexity

O(n)
*/



/*
=========================================
Question 04
Topic: localStorage.clear()
Difficulty: Easy

Problem:
Remove all data
from localStorage.
=========================================
*/

// Arrow Function
const clearStorage = () => {

    // Remove Everything
    localStorage.clear();

    console.log("Storage Cleared");

};

// Function Call
clearStorage();

/*
Output

Storage Cleared

Explanation

clear()

Deletes ALL keys
from localStorage.

Use Carefully.

Time Complexity

O(n)
*/


/*
=========================================
Question 05
Topic: Check Stored Value
Difficulty: Easy

Problem:
Check whether username
exists in localStorage.
=========================================
*/

// Arrow Function
const checkUsername = () => {

    const username = localStorage.getItem(

        "username"

    );

    if (username) {

        console.log(

            "Welcome",

            username

        );

    } else {

        console.log(

            "No User Found"

        );

    }

};

// Function Call
checkUsername();

/*
Output

Welcome Subhadeep

OR

No User Found

Explanation

If value exists

↓

Show Welcome

Else

↓

Show Default Message

Real Project

Auto Login

Remember Me

Dashboard

Time Complexity

O(1)
*/


/*
=========================================
Question 06
Topic: Store Object
Difficulty: Medium

Problem:
Store an object
inside localStorage.
=========================================
*/

// Arrow Function
const storeObject = () => {

    // Object
    const user = {

        name: "Subhadeep",

        age: 22,

        city: "Kolkata"

    };

    // Convert Object → JSON
    localStorage.setItem(

        "user",

        JSON.stringify(user)

    );

    console.log("User Saved");

};

// Function Call
storeObject();

/*
Output

User Saved

Explanation

localStorage

Stores only Strings.

JSON.stringify()

↓

Object → String

Real Project

Login

Profile

Settings

Time Complexity

O(n)
*/


/*
=========================================
Question 07
Topic: Read Object
Difficulty: Medium

Problem:
Read object from
localStorage.
=========================================
*/

// Arrow Function
const getObject = () => {

    // Read String
    const data = localStorage.getItem(

        "user"

    );

    // Convert String → Object
    const user = JSON.parse(data);

    console.log(user);

};

// Function Call
getObject();

/*
Output

{
 name:"Subhadeep",
 age:22,
 city:"Kolkata"
}

Explanation

JSON.parse()

↓

String → Object

Real Project

Dashboard

Profile Page

Time Complexity

O(n)
*/


/*
=========================================
Question 08
Topic: Store Array
Difficulty: Medium

Problem:
Store array inside
localStorage.
=========================================
*/

// Arrow Function
const storeArray = () => {

    // Array
    const skills = [

        "HTML",

        "CSS",

        "JavaScript",

        "React"

    ];

    // Save Array
    localStorage.setItem(

        "skills",

        JSON.stringify(skills)

    );

    console.log("Skills Saved");

};

// Function Call
storeArray();

/*
Output

Skills Saved

Explanation

Array

↓

JSON.stringify()

↓

Stored as String

Time Complexity

O(n)
*/


/*
=========================================
Question 09
Topic: Update Object
Difficulty: Medium

Problem:
Update stored object.
=========================================
*/

// Arrow Function
const updateObject = () => {

    // Read Object
    const user = JSON.parse(

        localStorage.getItem("user")

    );

    // Update Property
    user.age = 23;

    // Save Again
    localStorage.setItem(

        "user",

        JSON.stringify(user)

    );

    console.log(user);

};

// Function Call
updateObject();

/*
Output

{
 name:"Subhadeep",
 age:23,
 city:"Kolkata"
}

Explanation

Read

↓

Update

↓

Save Again

Real Project

Edit Profile

Settings

Time Complexity

O(n)
*/


/*
=========================================
Question 10
Topic: Delete Object
Difficulty: Hard

Problem:
Delete one user
from stored array.
=========================================
*/

// Arrow Function
const deleteUser = () => {

    // Users Array
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

    // Save Users
    localStorage.setItem(

        "users",

        JSON.stringify(users)

    );

    // Read Users
    const data = JSON.parse(

        localStorage.getItem("users")

    );

    // Remove User
    const updatedUsers = data.filter(

        (user) => user.id !== 2

    );

    // Save Again
    localStorage.setItem(

        "users",

        JSON.stringify(updatedUsers)

    );

    console.log(updatedUsers);

};

// Function Call
deleteUser();

/*
Output

[
 {id:1,name:"Rahul"},
 {id:3,name:"Riya"}
]

Explanation

filter()

Removes object

↓

Save Updated Array

Real Project

Delete User

Delete Product

Delete Todo

Time Complexity

O(n)
*/