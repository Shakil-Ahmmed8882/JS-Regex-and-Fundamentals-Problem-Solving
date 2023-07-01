/*
=======>
// Problem: 1
____________________

You are creating a shopping list application. Complete the following tasks
step:(a) Declare a variable named shoppingList and assign it an empty array.

step:(b) Add the following items to the shoppingList array using the appropriate method:
"Apples"
"Bananas"
"Milk"
"Bread"

step:(c) Remove the second item from the shoppingList array using the appropriate method.

step:(d) Replace the last item in the shoppingList array with the string "Eggs".

step: (e) Access and store the length of the shoppingList array in a variable named listLength.

step:(f) Create a variable named message and assign it the following string:
"I have {listLength} items in my shopping list: {shoppingList}".

Output the message variable to the console.

=======>

Problem: 2
____________________

You are working on a word game application. Complete the following steps:

Step (a):
Declare a variable named word and assign it a string value of your choice.

Step (b):
Declare a variable named wordLength and assign it the length of the word using the appropriate property or method.

Step (c):
Create a function named countVowels that takes a string parameter word and returns the count of vowels (a, e, i, o, u, case-insensitive) in the word. Use a loop and conditional statements to count the vowels.

Step (d):
Call the countVowels function with the word variable as an argument and store the result in a new variable named vowelCount.

Step (e):
Declare an empty array named consonants.

Step (f):
Use a loop to iterate over each character in the word string. If the current character is a consonant (not a vowel), add it to the consonants array using the appropriate method.

Step (g):
Create a string variable named message and assign it the following message:
"The word '{word}' has {wordLength} characters. It contains {vowelCount} vowel(s) and {consonants.length} consonant(s)."

Replace {word}, {wordLength}, {vowelCount}, and {consonants.length} with the actual values of the variables.

Step (h):
Output the message variable to the console.

=======>

Problem: 3
____________________

Title: Random Number Operations

Step (a):
Generate a random decimal number between 0 and 1 using Math.random(). Assign it to the variable randomFraction.

Step (b):
Convert the randomFraction variable into a random whole number between 0 and 10 using Math.floor() and multiplication. Assign it to the variable randomWhole.

Step (c):
Create a function named generateRandomInRange that takes min and max as parameters. Inside the function, generate a random whole number within the specified range (inclusive). Return the result.

Step (d):
Call the generateRandomInRange function with arguments 5 and 15. Assign the returned value to the variable randomInRange.

Step (e):
Create a function named convertToInteger that takes a string parameter str and uses parseInt() to convert it into an integer. Return the result.

Step (f):
Call the convertToInteger function with the argument '42'. Assign the returned value to the variable parsedInteger.


Step (g):
Display the following message to the console:
"Random Fraction: [randomFraction]"
"Random Whole Number: [randomWhole]"
"Random Number in Range [5, 15]: [randomInRange]"
"Parsed Integer: [parsedInteger]"

=======>

Problem: 4
____________________

Title: Menu Selection

Step (a):
Declare a variable named option and assign it a value of your choice (e.g., 'A', 'B', 'C', etc.).

Step (b):
Create a switch statement to handle different options based on the value of option.

Step (c):
Add cases to the switch statement to handle different menu options. For example, if option is 'A', display a message saying "Option A selected". Repeat this step for two more options of your choice.

Step (d):
Add a default case to the switch statement. If none of the options match, display a message saying "Invalid option selected".

Step (e):
Create a function named isOptionValid that takes option as a parameter and returns a boolean value indicating whether the option is valid or not. Use a switch statement inside the function to check if the option is one of the valid options. Return true if it is valid and false otherwise.

Step (f):
Call the isOptionValid function with the argument option. Assign the returned value to the variable isValidOption.




=======>

Problem: 5
____________________

(a) Create an object named course with the following properties:

name: "Mathematics"
instructor: "John Doe"
students: ["Alice", "Bob", "Charlie"]

(b) Add a new student named "David" to the students array.

(c) Remove the last student from the students array.

(d) Update the value of the instructor property to "Jane Smith".

(e) Add a new property named duration with a value of 10 to the course object.

(f) Delete the name property from the course object.


=======>

Problem: 6
____________________

You are working on a music record collection application. Perform the following tasks:

(a) Create an object named recordCollection with the following properties:

2468: {
title: "Song Title 1",
artist: "Artist 1",
year: 2020
}
1357: {
title: "Song Title 2",
artist: "Artist 2",
year: 2018
}
9876: {
title: "Song Title 3",
artist: "Artist 3",
year: 2022
}

(b) Access the value of the property with the id 2468 and store it in a variable called song1.

(c) Check if the recordCollection object has a property with the id 4321. Store the result in a variable called hasSong4321.

(d) Add a new record to the recordCollection object with the id 4321. The record should have the following properties:

title: "Song Title 4"
artist: "Artist 4"
year: 2019
(e) Access the value of the title property of the record with the id 9876 and store it in a variable called songTitle.

(f) Access the value of the year property of the record with the id 1357 and store it in a variable called songYear.



=======>

Problem: 7
____________________

You are building a ticket booking system for a theater. Perform the following tasks:

(a) Use a while loop to print the numbers from 1 to 5 (inclusive) to the console.

(b) Use a for loop to iterate from 0 to 10 (inclusive) and print only the even numbers to the console.

(c) Use a for loop to iterate from 10 to 0 (inclusive) and print the numbers in reverse order to the console.

(d) Iterate through the given array seats using a for loop and print each seat number to the console. The array contains seat numbers from 1 to 10.

(e) Use nested for loops to print the following pattern to the console:
* ** *** **** *****

========>

Problem: 8
____________________

Title: Recursive Countdown Function

Step (a): Declare a variable named countdown and assign it a function that takes a positive integer as an argument.

Step (b): Inside the countdown function, check if the given number is greater than 0.

Step (c): If the number is greater than 0, print the number to the console and recursively call the countdown function with the number decremented by 1.

Step (d): If the number is 0, print the message "Countdown complete!" to the console.

Step (e): Test the countdown function by calling it with a positive integer.



=======>

Problem: 9
____________________

(a) Declare a variable named score and assign it a number value of your choice.

(b) Write a conditional statement using the ternary operator to check if the score is greater than or equal to 80.

(c) If the condition is true, assign the string value "Pass" to a variable named result. Otherwise, assign the string value "Fail" to result.

(d) Print the value of result to the console.

(e) Write another conditional statement using multiple ternary operators to determine the grade based on the score:

If the score is greater than or equal to 90, assign the string value "A" to a variable named grade.
If the score is greater than or equal to 80, assign the string value "B" to grade.
If the score is greater than or equal to 70, assign the string value "C" to grade.
Otherwise, assign the string value "D" to grade.
(f) Print the value of grade to the console.



=======>

Problem: 10
____________________

Problem:
Given an HTML document containing nested <div>, <ul>, <li>, <p>, <span>, <strong>, <i>, and <b> tags, you need to select specific elements based on the following criteria:

Select the parent <div>, <ul>, and <li> elements in one array.
Select the <strong> tags that are direct children of <i> tags, but not those that are children of <span> tags.
You are not allowed to use IDs or any other specific identifiers to select the elements. Instead, you need to navigate the parent-child relationships within the HTML structure.

// ============================== ( Es6 ) ======================================
=======>

Problem:1
____________________
Title: Exploring ES6 Function Features

Step (a):
Define a function named multiply that takes two parameters: a and b. Assign a default value of 1 to the parameter a.

Step (b):
Implement the function body of multiply to return the product of a and b.

Step (c):
Define a function named sumAll that takes a rest parameter named numbers.

Step (d):
Implement the function body of sumAll to calculate the sum of all the numbers in the numbers array.

Step (e):
Declare an array named numbers with some numeric values.

Step (f):
Use the spread operator to pass the numbers array as arguments to the sumAll function.

Step (g):
Declare variables min and max using destructuring assignment to extract the minimum and maximum values from the numbers array.




=======>

Problem: 2
____________________

Title: Managing Data and Functions with Scopes, Mutability, and Arrow Functions

Step (a):
Declare a variable named age using the var keyword and assign it an initial value of 25.

Step (b):
Create a function named updateAge that takes a parameter newAge.

Step (c):
Inside the updateAge function, declare a variable named age using the let keyword and assign it the value of the newAge parameter.

Step (d):
Inside the updateAge function, log the value of the age variable to the console.

Step (e):
Declare an array named numbers using the const keyword and assign it an initial value of [1, 2, 3].

Step (f):
Create a function named addElement that takes a parameter element.

Step (g):
Inside the addElement function, use the push method to add the element parameter to the numbers array.

Step (h):
Call the addElement function with an argument of 4.

Step (i):
Log the numbers array to the console to verify the changes.

Step (j):
Create an object named person with properties name and age.

Step (k):
Create a function named updatePersonAge that takes a parameter newAge.

Step (l):
Inside the updatePersonAge function, use the Object.freeze() method to prevent mutation of the person object.

Step (m):
Inside the updatePersonAge function, assign the newAge parameter to the age property of the person object.

Step (n):
Call the updatePersonAge function with an argument of 30.

Step (o):
Log the person object to the console to verify that the age property is not mutated.

Step (p):
Create an arrow function named multiply that takes two parameters a and b and returns the product of a and b.

Step (q):
Create an arrow function named greet that takes a parameter name and returns a greeting message using template literals.



=======>

Problem: 3
____________________

Title: Destructuring and Rest in JavaScript

Step (a):
Create an object named person with properties name and age.

Step (b):
Use destructuring assignment to assign the values of name and age from the person object to two variables, personName and personAge.

Step (c):
Create a nested object named address with properties city and country.

Step (d):
Use destructuring assignment to assign the values of city and country from the address object to two variables, personCity and personCountry.

Step (e):
Create an array named numbers with multiple numeric values.

Step (f):
Use destructuring assignment to assign the values of the first two elements in the numbers array to two variables, firstNumber and secondNumber.

Step (g):
Use the rest element to assign the remaining elements in the numbers array to a variable named restNumbers.

Step (h):
Create a function named printPersonInfo that takes an object parameter personInfo containing name and age properties.

Step (i):
Inside the printPersonInfo function, use destructuring assignment to assign the values of name and age from the personInfo object directly to variables with the same names.

Step (j):
Inside the printPersonInfo function, log the name and age variables to the console.


=======>

Problem: 4
____________________

Title: Modern JavaScript Syntax

Step (a):
Create a template literal string that includes variables for name and age of a person. Use the template literal syntax to interpolate the variables into the string.

Step (b):
Declare an object named user with properties name and age. Use the object property shorthand to initialize the object.

Step (c):
Create a function named greetUser using the concise declarative function syntax. The function should take the user object as a parameter and return a greeting message using the name property of the user object.

Step (d):
Create a class named Product using the class syntax. The class should have a constructor function that accepts parameters for name, price, and quantity of a product. Inside the constructor, initialize the corresponding properties of the class instance. Implement a getter and a setter for the quantity property to control access to it.

Step (e):
Create a module script file and export the greetUser function and the Product class as named exports.




=======>

Problem: 5
____________________


Title: JavaScript Promises and Module Imports/Exports

Step (a):
Create a new JavaScript promise named myPromise that resolves after a delay of 2 seconds. Inside the promise executor function, use setTimeout to delay the resolution.

Step (b):
Complete the promise myPromise by calling the resolve function after the delay.

Step (c):
Handle the fulfilled promise using the then method. Print a success message to the console when the promise is fulfilled.

Step (d):
Handle a rejected promise using the catch method. Print an error message to the console when the promise is rejected.

Step (e):
Create a new JavaScript module file and export the myPromise promise as the default export.

Step (f):
In another JavaScript file, import the default export from the module file.
























*/
