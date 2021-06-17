// this is a single line comment

/*
    Multi-line
    Comment
*/

// var, let, const
// var => global variable
// let => variable that exists in a scope
// const => final variable, can't be changed (local scope)

let myVar = "Hello";
console.log("myVar = " + myVar);

myVar = 5;
console.log("myVar = " + myVar);

myVar = false;
console.log("myVar = " + myVar);

// code block
{
    console.log("myVar = " + myVar);

    let blockVar = "Hello World";
    console.log("blockVar = " + blockVar);

};

function myFunc() {
    var a = 5;
    console.log("a = " + a);
};

myFunc();

var a = 3;
console.log("a = " + a);

// error -> blockVar is locally defined and not within the current scope we're in
// console.log("blockVar = " + blockVar);

console.log("varVariable = " + varVariable);

varVariable = 3;

console.log("varVariable = " + varVariable);

const MY_CONST = 5;

// Comparing Values

let num1 = 5;

if(num1> 10) {
    console.log("true");
}
else {
    console.log("false");
}
