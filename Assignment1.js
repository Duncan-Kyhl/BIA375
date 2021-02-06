/*
Contains all required elements.
Variables: your name, three pets: name, age (number), petID (number 1-3), uses camelCase
Code is indented, blank line between blocks of code, comments before blocks in plain English,
Output to the console and uses template literals.
Output looks like this:
Mary, your pets are named Frank, Ethel, and Maggie.
Mary, the average age of your three pets is 45.6.
Mary, the random petID chosen is 3.
No hard coding (eg. adding numbers manually instead of adding variables that are holding the numbers)
eg. NO: avgAge = (12 + 5 + 7)/3
Data used:
1, Harvey, 12 yrs old
2, Jack, 5 yrs old
3, Hazel, 7 yrs old
Code runs correctly without any errors.

----

Scenario: You are writing a program that provides information about your pets. You have three pets. All of the program output should be addressed personallt to you by name (eg. Mary, blah blah blah).
*/

// Requirements: ----------------------------------------------------------------

// one variable to hold my name.
let myName = 'duncan';

// variables for pets, names, and ages
let petId = [1, 2, 3];
let petName = ['Harvey', 'Jack', 'Hazel'];
let petAge = [12, 5, 7];

// Program displays all of the pet names on one line with comma's between them like this:
console.log(`${myName}, your pets are named ${petName[0]}, ${petName[1]}, and ${petName[2]}.`)

// Program displays the average age of your three pets.
let averageAge = 9 / petAge.length;

console.log(`Mary, the average age of your three pets is ${averageAge}`);


// eg. Mary, the average age of your three pets is 45.6.
//
// Program displays a random number between 1 and 3 so this number can be used to pick one of the pets.
// Hint: remember, between 1 and 3, NOT 0 and 3., and no hard coding.
//
// eg. Mary, the random petID chosen is 3.
// Hand In: Name the file with both of your names: Assignment1MaryJEllenS.js) and save it in your {JS Editor} account. Then pick Share > Share with specific people, and share with me (Dr.C and cindycc@gmail.com). This will let me see it in my account.
// * just one of the pair of you share it with me.
