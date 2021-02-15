
// Alert Box --- ensures users receive some information
// users must click "OK" to proceed
window.alert("some text") // window prefix unnecessary

alert("I am an alert box")

// Confirm Box --- prompts users to veryify or accept some information
// users must click "OK" or "Cancel" to proceed
// "OK" returns a value of true, "Cancel": false
window.confirm("some text")

if (confirm("Press a button!")) {
    txt = "You pressed OK!"
} else {
    txt = "You pressed Cancel!"
}

// Prompt Box --- asks user to input a value before entering a page
// users must click "OK" or "Cancel" to proceed after entering a value
// "OK" returns the value of input, "Cancel": null
window.prompt("sometext", "defaultText")

var person = prompt("Please enter your name", "Duncan Kyhl")
if (person == null || person == "") {
    txt = "User cancelled the prompt."
} else {
    txt = "Hello " + person + "! How are you today?"
}

// Line Breaks
alert("Hello\nHow are you?")

// IF ELSE statements
if (expression) {
    // do something
} else if (expression 2) {
    // do a different thing 
}

// Switch Case --- check multiple conditions for true, else default
// use `break` statements to end each case
var grade = 'A';

switch (grade) {
   case 'A': document.write("Good job<br />");
   break;

   case 'B': document.write("Pretty good<br />");
   break;

   case 'C': document.write("Passed<br />");
   break;

   case 'D': document.write("Not so good<br />");
   break;

   case 'F': document.write("Failed<br />");
   break;

   default:  document.write("Unknown grade<br />")
}
 
/*
Javascript Style Guides

1. Idiomatic.js 
2. jQuery Core Style Guide
3. Google JavaScript Style Guide

4. Dojo Style Guide
5. Aloha Editor JavaScript Style Guide
6. Crock's Code Convenstions For JavaScript


Applications of the Idiomatic.js Style Guide
1. Named function declarations:
Before:    
    function foo(bar,fum,baz){

After:   
    function foo( bar, fum, baz ) {

What changed? We improved readability by:

- Forcing consistent spacing before each of the arguments
- Ensursing this accounts for a space after the function's opening bracket and before the closing bracket
- Adding a space between the closing bracket and the opening brace of the next block


2. Variable assignments:
Before:
    var hello = "Hello";
    var ret;
    var num = 1;

... And we also had inline variables in our for loop:
    for(var i = 0; i < bar.length; i++) {
        var out = bar[i];

After:
    var ret,
        out,
        hello = "Hello",
        num = 1,
        i = 0,
        l = bar.length;


What changed?
- We moved to using one 'var' per functional scope to promote readability. As the Idiomatic guide states, this allows our declaration list to be more free of clutter
- We moved the inline 'var' declaration for i from inside our loop to this same list. bar.length was cached in this same list under a variable l to avoid having to recalculate the length of bar each time. 
- We moved the 'var' declaration for out to this list. This follows the idea of only declaring new vars once in our scope


3. Loops:
Before:
    for(var i = 0; i < bar.length; i++) {

After:
    for ( ; i < l; i++ ) {
        out = bar[i];


What changed?
- Consistent whitespace is now used throughout the loop definition
- Specifically this is done (i) after the for keyword and prior to the opening bracket, (ii) between each expression/statement within the loop and (iii) prior to our opening brace
- By setting our pointer i to 0 prior to the loop, we can avoid the need to define this inline.Instead a simple semi-colon can be used in it's place, which some developers argue reduces clutter. Note: Hoisting the counter declaration to the top of the function is only a stylistic choice here and can be avoided if you feel uncomfortable with it. I personally would usually keep it inline to avoid detracting meaning.


4. Conditional Evvaluation:
Before:
    if (out == ""){
        ret = fum(out) + baz(out);
    }

After:
    if ( !out ) {
        ret = fum( out ) + baz( out );
    }


What changed?
- Rather than evaluating out is empty, we can instead evaluate falsy-ness instead (i.e !out). This both requires fewer keystrokes and is arguably more readable
- As in previous examples, liberal whitespace is used to surround arguments being passed to functions as this is easier on the eyes


5. Practicality - More on Conditional Evvaluation:
Before:
    if (!(ret == undefined)) {
        return ret;
    } else{
       return fum('g2g');
    }

After:
    return ret || fum('g2g');


What changed?
- We're no longer relying on the less reliable == (which should really have been === anyway)
- !(ret == undefined) could be rewritten as !(ret) to once again, take advantage of falsy-ness (but this can be further improved)
- Rather than opting for any of the verbose options above, we can take advantage of the fact that in an or expression, ret (if undefined or false) will skip to the next condition and use it instead. This allows us to trim down our 5 lines of code into fewer characters and it's once again, a lot more readable

*/






