// Loops
// for 

// while 

// do-while 

// //For in Loop
// for (key in object)
//     {

//     }


// for (variable of iterable)
//     {

//     }

// Search the element in an array 

const item = ["Apple", "Banana", "Bike", "Car", "Drone", "Flight"];
const SearchItem = prompt("Enter the item to search");
let found = false; // flag to chek if I got the value or not 


for (let i = 0 ;i<item.length;i++)
    {
        if (item[i] === SearchItem)
            {
                found = true;
                break;
            }
    }


    if(found)
        {
            console.log("Item found")
        }
    else
    {
        console.log("Item not found")
    }