
/*
==================>
REGULAR EXPRESSION
==================>



Problem 1: VALIDATE EMAIL ADDRESS
__________________________________

Step (a):
Create a regular expression pattern that matches a valid email address. The email address should follow the format: username@domain.com. The username can contain alphanumeric characters, dots (.), underscores (_), or hyphens (-), but it cannot start or end with a dot, underscore, or hyphen. The domain should consist of at least one alphanumeric character, followed by a dot (.), and end with a valid top-level domain (e.g., .com, .org, .net).

Step (b):
Create a function named validateEmail that takes an email address as a parameter and uses the regular expression to validate it. The function should return a boolean value indicating whether the email address is valid or not.


Problem 2: VALIDATE PASSWORD
_____________________________

Step (a):
Create a regular expression pattern that matches a valid password. The password should follow these criteria:

At least 8 characters long
Contains at least one uppercase letter
Contains at least one lowercase letter
Contains at least one numeric digit
Contains at least one special character (e.g., !@#$%^&*)
Step (b):
Create a function named validatePassword that takes a password as a parameter and uses the regular expression to validate it. The function should return a boolean value indicating whether the password is valid or not.


Problem 3: VALIDDATE PHONE NUMBER
__________________________________

Step (a):
Create a regular expression pattern that matches a valid phone number. The phone number should follow the format: XXX-XXX-XXXX, where each X represents a digit (0-9). The pattern should also allow optional parentheses around the first three digits.

Step (b):
Create a function named validatePhoneNumber that takes a phone number as a parameter and uses the regular expression to validate it. The function should return a boolean value indicating whether the phone number is valid or not.






==============>
Problem: 2
Title: Extract Phone Numbers
______________________________

Step (a):
Create a regular expression pattern that matches phone numbers in the format: (123) 456-7890. The pattern should include the parentheses around the area code, a space between the area code and the local number, and a hyphen between the local number and the extension (if present). The area code and local number should consist of exactly three digits each. The extension, if present, should be optional and consist of one or more digits.

Step (b):
Use the match method of a string and pass the regular expression as an argument to extract phone numbers from a given text. The match method returns an array of matched phone numbers.

Step (c):
Create a function named extractPhoneNumbers that takes a text string as a parameter and uses the regular expression to extract phone numbers. Return an array of phone numbers found in the text.






================>
Problem: 3
Title: Validate Password Strength
_____________________________________
Step (a):
Create a regular expression pattern that enforces the following password strength rules:

At least 8 characters long
Contains at least one uppercase letter
Contains at least one lowercase letter
Contains at least one digit
Contains at least one special character (e.g., !@#$%^&*)
Step (b):
Use the test method of the regular expression to check if a given string meets the password strength requirements. Return true if it matches the pattern, and false otherwise.

Step (c):
Create a function named validatePassword that takes a password as a parameter and uses the regular expression to validate its strength. Return a boolean value indicating whether the password meets the strength requirements or not.



*/