// Longest Word in a string 


function longestWord(str)
{
    let words = str.split("");
    let longest = '';

    for (let i in words){
        if (i.length> longest.length)
            {
                longest = i;
                console.log(" -- ", i)
                
            }
    }

    return longest;
}



console.log(longestWord("The wheels on the bus go round and ABCDEFGHIJKLMNOPQRSTUVWXYZ"));

