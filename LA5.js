// Instructions

const { allowedNodeEnvironmentFlags } = require("process")

/*
For this first program you will be writing code that uses a 'while' loop!
Create a new project named 'LAWk5YourName' in appStudio. Use it to create a new local repository, 
publish it to your remote Repository, then create a new branch to work in named 'First Program' 
(publish the branch to the remote Repository). 
Commit changes to your work and push to remote Repository occasionally. 
When done with a program, create a Pull request for the branch, then do a Merge. 
* Use a different branch for each program. 

First Program- you will be writing a program with a while loop that runs as many times as the user wants it to run. At each cycle, it will output a message.
Requirements
Name a form 'while'.
Each time the loop runs, it must output a line of text to the console that shows the value of 'i' 
in the format shown below at that iteration of the loop.
     This is loop iteration 1.
     This is loop iteration 2.
     etc.     
*/
let n = prompt('How many times would you like to run the program?')
let i = 0
while (i <= n) {
    console.log(`This is loop iteraation ${i}`)
}

/*    
Second program, you will be writing a program that outputs the names from an array to the console, 
one name per line using a for loop to cycle through the array.
Note: see if you can do this using a for loop with only one line of code in it. 

Requirements
Name a form 'for'.
Create an array named 'names' that holds this data:

Bob, Janet, Tom, Erin, Lucy, Alyssa, Dustin

Each time the loop runs, it must output a name to the console. 
So eventually your program will have output each name, one name per line.
*/

let names = ['Bob', 'Janet', 'Tom', 'Erin', 'Lucy', 'Alyssa', 'Dustin']

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

/*
Third program, you will be writing a program that uses a function. 
The function will take two numbers that you got from the user and send from the main program to the function. 
The function will add them and return the answer back to the main program that called it. 
The main program will output the answer using the required format. 

Requirements
Name a form 'calc'.
Create a function named 'Calculate' that takes 2 parameters, adds them together, and returns the answer to the main program. Name the parameters 'num1' and 'num2'. 
Create a variable in the main program named 'summedNumbers'.
In the main program, get two numbers from the user, make sure they are numbers, then call the function, sending it the two numbers. 
Remember, the two numbers must be passed into the function when you call it from the main program. 
Name the variables in the main program different names than the function 
Calculate parameter names num1 and num2 to avoid confusion.
All output must be done in the main program, not in the function.
Output to the console using this format:

The sum of X and Y is Z.     (where X  and Y come from the user, and Z is the sum returned from the function). 
*/


x = prompt('Enter a number:')
y = prompt('Enter a number:')

if (!(Number.isFinite(x))) {
    x = prompt('Sorry, please enter a number:')
}
if (!(Number.isFinite(y))) {
    y = prompt('Sorry, please enter a number:')
}

function summedNumbers(num1, num2) {
    return num1 + num2
}

console.log(`The sum of X and Y is ${summedNumbers(x,y)}`)


/*
Fourth program - you will be trying out several string methods. For each of the following, 
output the changed string to an alert after each change that is made to a string so I can see that it worked.  
Name a form 'strings'.
Create a variable named 'quoteString' and put this text in it: 
"Failure is simply the opportunity to begin again this time more intelligently."

Using the 'toUpperCase' string method, change the text in 'quoteString' to all upper case.  
Output the changed string to the console using this format: 

               Upper case string is: XXXXX

Create a variable named 'authorString' and put this text in it:

               "- Henry Ford"

Read about this string method 'concat()' (Links to an external site.)  
Use it to create a new string variable 'completeString' that holds a string created by adding 'authorString'  
to the end of 'quoteString'.  Output 'completeString' to the console using this format: 

             Concatenated string is: XXXX

Create a new variable 'found' that uses the string method 'includes()' to determine if "Henry" is in 'completeString' or not. 
Output a  message to the console using this format: 

              Henry was in completeString.
              OR
              Henry was NOT in completeString.
*/


let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
alert(`Upper case string is: ${quoteString.toUpperCase()}`)

let authorString = "- Henry Ford"
alert(authorString)

let completeString = concat(quoteString, authorString)
alert(completeString)

let found = completeString.includes("Henry")
found ? "Henry was in completeString" : "Henry was NOT in completeString"