//FlattenArray 

function Start(arr)
{
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? Start(toFlatten): toFlatten), []);
}


console.log(Start([1,[2, [3, [4]]],5]));

// reduce : --> Method : --> Accumulator (to gather things just like a truck) (by Traversing)

