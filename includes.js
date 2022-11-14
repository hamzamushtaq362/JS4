/**
 * return true if value exist
 * return false otherwise
 * This method is case sensitive.
 * Negative index is allowed.
 */
{
    let arr = ['Hamza', 'Ali', 'Ahmed'];

    console.log(arr.includes('Hamza'));
    // output: true
}

// using starting position
{
    let arr = ['Hamza', 'Ali', 'Ahmed'];

    console.log(arr.includes('Hamza',1));
    // output: false
}

// case sensitive
{
    let arr = ['Hamza', 'Ali', 'Ahmed'];

    console.log(arr.includes('hamza'));
    // output: false
}

// negative values are allowed
{
    let arr = ['Hamza', 'Ali', 'Ahmed'];

    console.log(arr.includes('Hamza', -3));
    // output: true
}

