/**
 * return last index of item from arr
 * From right to left
 * return -1 otherwise
 * start position is allowed
 * negative values are allowed as start position
 */
 {
    let arr = ['Hamza', 'Ali', 'Ahmed','Hamza'];
    let arr2 = [1,2,2,2];


    console.log(arr.lastIndexOf('Ali'));
    // output: 1

    console.log(arr.lastIndexOf('Hamza'));
    // output: 3

    console.log(arr2.lastIndexOf(1));
    // output: 0

    console.log(arr2.lastIndexOf(2));
    // output: 3

    console.log(arr2.lastIndexOf(3));
    // output: -1
}

{
    let arr = ['Hamza', 'Ali', 'Ahmed','Hamza'];
    console.log(arr.lastIndexOf('Hamza',2));
    // output: 0
}



