/*Q01_Square.js*/
// Number of rows and columns
let n = 5;

// Outer loop for rows
for (let i = 1; i <= n; i++) {

    // Store one row
    let row = "";

    // Inner loop for columns
    for (let j = 1; j <= n; j++) {

        // Add star
        row += "*";

    }

    // Print row
    console.log(row);

}


/*Q02_LeftTriangle.js*/


let n = 5;

// Outer loop for rows
for (let i = 1; i <= n; i++) {

    let row = "";

    // Print stars equal to row number
    for (let j = 1; j <= i; j++) {

        row += "*";

    }

    console.log(row);

}



/*Q03_InvertedTriangle.js*/

let n = 5;

// Outer loop
for (let i = n; i >= 1; i--) {

    let row = "";

    // Print stars
    for (let j = 1; j <= i; j++) {

        row += "*";

    }

    console.log(row);

}
/*
=========================================
Question 04
Topic: Star Pattern
Difficulty: Medium

Problem:
Print a right aligned triangle.

Output:
    *
   **
  ***
 ****
*****
=========================================
*/

let n = 5;

// Outer loop
for (let i = 1; i <= n; i++) {

    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {

        row += " ";

    }

    // Print stars
    for (let k = 1; k <= i; k++) {

        row += "*";

    }

    console.log(row);

}

/*
Explanation

Step 1
Print spaces.

Step 2
Print stars.

Spaces decrease.

Stars increase.

Time Complexity:
O(n²)
*/


/*
=========================================
Question 05
Topic: Star Pattern
Difficulty: Medium

Problem:
Print an Inverted Right Triangle.

Output:

*****
 ****
  ***
   **
    *

=========================================
*/

let n = 5;

// Outer loop for rows
for (let i = n; i >= 1; i--) {

    let row = "";

    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars
    for (let k = 1; k <= i; k++) {
        row += "*";
    }

    console.log(row);
}

/*
Explanation

Row 1 -> 0 spaces, 5 stars
Row 2 -> 1 space, 4 stars
Row 3 -> 2 spaces, 3 stars
Row 4 -> 3 spaces, 2 stars
Row 5 -> 4 spaces, 1 star

Time Complexity:
O(n²)
*/



/*
=========================================
Question 06
Topic: Star Pattern
Difficulty: Medium

Problem:
Print Full Pyramid.

Output:

    *
   ***
  *****
 *******
*********

=========================================
*/

let n = 5;

// Outer loop
for (let i = 1; i <= n; i++) {

    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}

/*
Explanation

Spaces = n - i

Stars = (2 × row) - 1

Example

Row 1 → 1 Star

Row 2 → 3 Stars

Row 3 → 5 Stars

Time Complexity:
O(n²)
*/



/*
=========================================
Question 07
Topic: Star Pattern
Difficulty: Medium

Problem:
Print Inverted Pyramid.

Output:

*********
 *******
  *****
   ***
    *

=========================================
*/

let n = 5;

// Outer loop
for (let i = n; i >= 1; i--) {

    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}

/*
Explanation

Spaces increase

Stars decrease

Formula

Stars = (2 × row) - 1

Time Complexity:
O(n²)
*/


/*
=========================================
Question 08
Topic: Star Pattern
Difficulty: Hard

Problem:
Print Diamond Pattern.

Output:

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

=========================================
*/

let n = 5;

// Upper Pyramid
for (let i = 1; i <= n; i++) {

    let row = "";

    // Spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}

// Lower Pyramid
for (let i = n - 1; i >= 1; i--) {

    let row = "";

    // Spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}

/*
Explanation

Diamond =

Upper Pyramid

+

Lower Pyramid

Upper:
1 → n

Lower:
n-1 → 1

Time Complexity:
O(n²)
*/



/*
=========================================
Question 09
Topic: Star Pattern
Difficulty: Medium

Problem:
Print Hollow Square Pattern.

Output:

*****
*   *
*   *
*   *
*****

=========================================
*/

let n = 5;

// Outer loop for rows
for (let i = 1; i <= n; i++) {

    let row = "";

    // Inner loop for columns
    for (let j = 1; j <= n; j++) {

        // Print star on border
        if (i === 1 || i === n || j === 1 || j === n) {
            row += "*";
        } else {
            row += " ";
        }

    }

    console.log(row);
}

/*
Explanation

Border Condition

First Row
Last Row
First Column
Last Column

Otherwise
Print Space

Time Complexity:
O(n²)
*/



/*
=========================================
Question 10
Topic: Star Pattern
Difficulty: Hard

Problem:
Print Hollow Pyramid.

Output:

    *
   * *
  *   *
 *     *
*********

=========================================
*/

let n = 5;

// Outer loop
for (let i = 1; i <= n; i++) {

    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars and spaces
    for (let k = 1; k <= (2 * i - 1); k++) {

        if (
            k === 1 ||
            k === (2 * i - 1) ||
            i === n
        ) {

            row += "*";

        } else {

            row += " ";

        }

    }

    console.log(row);
}

/*
Explanation

First Star

Last Star

Last Row

Print *

Otherwise

Print Space

Time Complexity:
O(n²)
*/



/*
=========================================
Question 11
Topic: Number Pattern
Difficulty: Easy

Problem:
Print Number Triangle.

Output:

1
12
123
1234
12345

=========================================
*/

let n = 5;

// Outer loop
for (let i = 1; i <= n; i++) {

    let row = "";

    // Print numbers
    for (let j = 1; j <= i; j++) {

        row += j;

    }

    console.log(row);

}

/*
Explanation

Row 1

1

Row 2

12

Row 3

123

Time Complexity

O(n²)
*/


/*
=========================================
Question 12
Topic: Number Pattern
Difficulty: Easy

Problem:
Print Continuous Numbers.

Output:

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

=========================================
*/

let n = 5;

// Starting number
let number = 1;

// Outer loop
for (let i = 1; i <= n; i++) {

    let row = "";

    // Inner loop
    for (let j = 1; j <= i; j++) {

        row += number + " ";

        number++;

    }

    console.log(row);

}

/*
Explanation

Start Number = 1

Every iteration

Print Number

Increase Number

Time Complexity

O(n²)
*/



/*
=========================================
Question 13
Topic: Number Pattern
Difficulty: Easy

Problem:
Print Floyd's Triangle.

Output:

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
=========================================
*/

let n = 5;
let number = 1;

// Outer loop for rows
for (let i = 1; i <= n; i++) {

    let row = "";

    // Inner loop for columns
    for (let j = 1; j <= i; j++) {

        // Add current number
        row += number + " ";

        // Increase number
        number++;
    }

    console.log(row);
}

/*
Explanation

number starts from 1.

Every time a number is printed,
increase number by 1.

Row 1 -> 1
Row 2 -> 2 3
Row 3 -> 4 5 6
...

Time Complexity:
O(n²)
*/


/*
=========================================
Question 14
Topic: Number Pattern
Difficulty: Hard

Problem:
Print Palindrome Number Pattern.

Output:

1
121
12321
1234321
123454321
=========================================
*/

let n = 5;

// Outer loop
for (let i = 1; i <= n; i++) {

    let row = "";

    // Increasing numbers
    for (let j = 1; j <= i; j++) {
        row += j;
    }

    // Decreasing numbers
    for (let j = i - 1; j >= 1; j--) {
        row += j;
    }

    console.log(row);
}

/*
Explanation

Step 1:
Print numbers from 1 to i.

Step 2:
Print numbers from i-1 to 1.

Example:

i = 4

Increasing
1234

Decreasing
321

Final
1234321

Time Complexity:
O(n²)
*/


/*
=========================================
Question 15
Topic: Number Pattern
Difficulty: Hard

Problem:
Print Pascal's Triangle.

Output:

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
=========================================
*/

let n = 5;

// Outer loop
for (let i = 0; i < n; i++) {

    let row = "";

    // Print leading spaces
    for (let j = 0; j < n - i - 1; j++) {
        row += " ";
    }

    // First value in every row
    let value = 1;

    // Print values
    for (let j = 0; j <= i; j++) {

        row += value + " ";

        // Calculate next value
        value = value * (i - j) / (j + 1);

    }

    console.log(row);
}

/*
Explanation

Formula:

Next Value =
Current Value × (Row - Column)
------------------------------
(Column + 1)

Example

Row 4

1

1×4/1 = 4

4×3/2 = 6

6×2/3 = 4

4×1/4 = 1

Output

1 4 6 4 1

Time Complexity:
O(n²)
*/