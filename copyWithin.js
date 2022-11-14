// passing two parameters.
{
    // modifies the original array 
    const arr = ['Hamza', 'Ali', 'Ahmed'];
    console.log(arr.copyWithin(1,0));
    // output: ['Hamza', 'Hamza', 'Ali']
}

// passing three parameters.
{
    const arr = ['Hamza', 'Ali', 'Ahmed'];
    console.log(arr.copyWithin(1,0,1)); // (target,start,end)
    // output: ['Hamza', 'Hamza', 'Ali']
}

// passing negative parameters.
{
    const arr = ['Hamza', 'Ali', 'Ahmed'];
    console.log(arr.copyWithin(-1)); // target is -1, start is by-default 0
    // output: ['Hamza', 'Ali', 'Hamza']
}