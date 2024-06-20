// Calculate the sum of first 10 natural numbers 

let sum = 0 ;
let i = 1;

while(i<=10)
    {
        sum +=i;
        i++;
    }
console.log("Sum is: ", sum);



// Sample code : For-in Loop 
const person = {name: "Pranav Sharma", age: 100, city: "Vancouver, CA"}
for (let key in person)
    {
        console.log(key + ": " + person[key]);
    }



// Sample code: For -of Loop 
const str = "Hello";
for(let Individual_chacter of str)
    {
        console.log(Individual_chacter);
    }

    