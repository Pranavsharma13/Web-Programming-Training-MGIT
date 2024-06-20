//Variables in JS 

let num = 50;
let str = "Hello";
let bool = true;
let undef;
let nul = null;
let sym = Symbol();
let obj = {A:1, B:2};
let arr = [1,2,3,4,5,6,7,8,9]; 

// functions in JS 
function add (a, b)
{
    return a+b;
}

const multiply = function(a,b)
{
    return a*b;
}

//Lambda way of writting it.... 
const substarct = (a,b) => a-b;


console.log(add(2,3))
console.log(multiply(2,3))
console.log(substarct(10,7))

