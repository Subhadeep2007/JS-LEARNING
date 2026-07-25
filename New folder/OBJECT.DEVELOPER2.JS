/*
=========================================
Question 11
Topic: hasOwnProperty()
Difficulty: Easy

Problem:
Check whether an object
contains a specific property.
=========================================
*/

// Arrow Function
const checkProperty = () => {

    // Object
    const user = {

        name: "Subhadeep",

        age: 22

    };

    // Check Property
    console.log(user.hasOwnProperty("name"));

    console.log(user.hasOwnProperty("city"));

};

// Function Call
checkProperty();

/*
Output

true

false

Explanation

hasOwnProperty()

Checks whether
the property exists
inside the object.

Time Complexity

O(1)
*/


/*
=========================================
Question 12
Topic: Optional Chaining (?.)
Difficulty: Medium

Problem:
Safely access nested properties.
=========================================
*/

// Arrow Function
const getUser = () => {

    const user = {

        name: "Subhadeep",

        address: {

            city: "Kolkata"

        }

    };

    console.log(user.address ? .city);

    console.log(user.company ? .name);

};

// Function Call
getUser();

/*
Output

Kolkata

undefined

Explanation

?.

Stops error when
property doesn't exist.

Without ?.

user.company.name

↓

Error

Real Project

API Response

User Profile

Time Complexity

O(1)
*/


/*
=========================================
Question 13
Topic: Nullish Coalescing (??)
Difficulty: Medium

Problem:
Provide default value.
=========================================
*/

// Arrow Function
const showName = () => {

    const user = {

        name: null

    };

    // Default Value
    const result = user.name ? ? "Guest";

    console.log(result);

};

// Function Call
showName();

/*
Output

Guest

Explanation

??

Returns right value

ONLY if left value

is null

or

undefined

Real Project

Profile

API Data

Forms

Time Complexity

O(1)
*/


/*
=========================================
Question 13
Topic: Nullish Coalescing (??)
Difficulty: Medium

Problem:
Provide default value.
=========================================
*/

// Arrow Function
const showName = () => {

    const user = {

        name: null

    };

    // Default Value
    const result = user.name ? ? "Guest";

    console.log(result);

};

// Function Call
showName();

/*
Output

Guest

Explanation

??

Returns right value

ONLY if left value

is null

or

undefined

Real Project

Profile

API Data

Forms

Time Complexity

O(1)
*/
/*
=========================================
Question 14
Topic: Object.freeze()
Difficulty: Medium

Problem:
Prevent object modification.
=========================================
*/

// Arrow Function
const freezeObject = () => {

    const user = {

        name: "Subhadeep"

    };

    // Freeze Object
    Object.freeze(user);

    // Try Update
    user.name = "Rahul";

    console.log(user);

};

// Function Call
freezeObject();

/*
Output

{
    name:"Subhadeep"
}

Explanation

Object.freeze()

Cannot

Add

Delete

Update

properties.

Time Complexity

O(1)
*/



/*
=========================================
Question 15
Topic: Object.seal()
Difficulty: Medium

Problem:
Allow update but
prevent add/delete.
=========================================
*/

// Arrow Function
const sealObject = () => {

    const user = {

        name: "Subhadeep"

    };

    // Seal Object
    Object.seal(user);

    // Update
    user.name = "Rahul";

    // Add Property
    user.age = 22;

    console.log(user);

};

// Function Call
sealObject();

/*
Output

{
    name:"Rahul"
}

Explanation

Object.seal()

✅ Update Existing

❌ Add New

❌ Delete Existing

Time Complexity

O(1)
*/