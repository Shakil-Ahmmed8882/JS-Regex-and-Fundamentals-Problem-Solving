
/*



========================>
JAVASCRIPT FUNDAMENTALS..
===============>

Problem: 1. 
TITLE : API REQUEST
_____________________________________

Step (a): API Request using Fetch, XML, and AJAX
In this step, you need to implement the API request using three different options: Fetch, XML, and AJAX. The goal is to retrieve user data from the server.

Option 1: Fetch
Using Fetch, make an HTTP GET request to the server API endpoint /users to retrieve user data. The server will respond with a JSON array of user objects containing id, name, and email properties.

Option 2: XML
Using XML, make an HTTP GET request to the server API endpoint /users to retrieve user data. The server will respond with an XML document containing user information. Parse the XML response and extract the necessary data.

Option 3: AJAX
Using AJAX, make an HTTP GET request to the server API endpoint /users to retrieve user data. The server will respond with a JSON array of user objects containing id, name, and email properties






===============>

Problem: 2. 
TITLE : OBJECT ITERATOR WITH HIGHER ORDER FUNCTION.
_____________________________________

You are working on implementing an object iterator using higher-order functions and callbacks. Your task is to create a function that iterates over the properties of an object and performs a specific action for each property.

Step (a):
Create a higher-order function named objectIterator that takes two parameters: an object and a callback function. The objectIterator function should iterate over the properties of the object and execute the callback function for each property.

Step (b):
Implement a callback function named printProperty that accepts a property name and value as parameters. The printProperty function should log the property name and its corresponding value to the console.

Step (c):
Create an object named person with properties such as name, age, and occupation. Assign appropriate values to each property.

Step (d):
Using the objectIterator function, iterate over the properties of the person object and invoke the printProperty callback function for each property. The printProperty function should log the property name and its value.

Problem 1: Property Sum
Implement a callback function named sumProperty that accepts a property name and value as parameters. The sumProperty function should keep track of the sum of all numeric property values encountered during iteration. After the iteration is complete, log the total sum to the console.

Problem 2: Property Count
Implement a callback function named countProperty that accepts a property name and value as parameters. The countProperty function should count the number of properties that have string values during iteration. After the iteration is complete, log the total count to the console.







===============>

Problem: 3.
TITLE : Destructuring Array
_____________________________________

STEP(A) 
Implement a callback function named destructuringArray that accepts an array as a parameter. The destructuringArray function should destructure the array into individual variables and log them to the console.
_____________
For example:
Input: [1, 2, 3]

output: 
Value 1
Value 2
Value 3


STEP(B)
Implement a callback function named destructuringObject that accepts an object as a parameter. The destructuringObject function should destructure the object properties into individual variables and log them to the console.
_____________
For example:
Input: { name: 'John', age: 30, city: 'New York' }

Output:
Name: John
Age: 30
City: New York


STEP(C)
TITLE: Spread Operator (Array)
Implement a callback function named spreadArray that accepts multiple arguments. The spreadArray function should use the spread operator to combine the arguments into a single array. Log the resulting array to the console.
_____________
For example:
Input: spreadArray(1, 2, 3, 4, 5)

Output : //[1, 2, 3, 4, 5]


STEP(D)
TITLE : Spread Operator (Object)
Implement a callback function named spreadObject that accepts multiple objects as arguments. The spreadObject function should use the spread operator to merge the objects into a single object. Log the resulting object to the console.
_____________
For example:
Input: spreadObject({ name: 'John' }, { age: 30 }, { city: 'New York' })

Output://{ name: 'John', age: 30, city: 'New York' }







===============>

Problem: 4.

TITLE : Object Accessor with Set and Get
_____________________________________

You are working on implementing an object accessor using the set and get methods. Your task is to create an object with properties that can be accessed and modified using these methods.

Step (a):
Create an object named book with the following properties:

title (string)
author (string)
price (number)

Step (b):
Implement the setTitle method using the set keyword. This method should accept a string parameter and set the title property of the book object to the provided value.

Step (c):
Implement the setAuthor method using the set keyword. This method should accept a string parameter and set the author property of the book object to the provided value.

Step (d):
Implement the setPrice method using the set keyword. This method should accept a number parameter and set the price property of the book object to the provided value.

Step (e):
Implement the getTitle method using the get keyword. This method should return the value of the title property of the book object.

Step (f):
Implement the getAuthor method using the get keyword. This method should return the value of the author property of the book object.

Step (g):
Implement the getPrice method using the get keyword. This method should return the value of the price property of the book object.

Problem: Book Information Update
Using the book object and the provided methods, update the book's information by setting the title to "The Great Gatsby", the author to "F. Scott Fitzgerald", and the price to 9.99.

After updating the information, use the getTitle, getAuthor, and getPrice methods to retrieve and log the updated information to the console.

Your goal is to solve the steps (a, b, c, d, e, f) using the provided blueprint and the additional problem involving object accessor. Test your solution and verify that it produces the expected output.






===============>

Problem: 4.

TITLE : String Method
_____________________________________

Step(a): Reverse String
Write a function named reverseString that takes a string as input and returns the reversed version of the string using string methods.

Step(b): Define the Problem
Create a function that accepts a string as input and returns the reversed version of the string.

Step (c): Plan the Approach
Use string methods to reverse the string. Consider methods like split(), reverse(), and join() to achieve the desired outcome.






===============>

Problem: 5.

TITLE : Event Bubbling

EVENT BUBBLING
________________
Step (a): Create a parent element and multiple nested child elements within it.
Step (b): Attach a click event listener to the parent element. When a child element is clicked, log a message to the console indicating the element that was clicked.

Event Capturing
_________________

Step (a): Create a parent element and multiple nested child elements within it.

Step (b): Attach a click event listener to each child element with the { capture:
       true } option. When a child element is clicked, log a message to the console indicating the element that was clicked.

Your goal is to solve these problems by following the provided steps (a) and (b) for each problem. Implement the necessary code and test it to ensure the desired behavior of event bubbling and event capturing.


*/