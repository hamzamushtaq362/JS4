{
    let arr = ['Apple', 'Peach', 'Apple'];
    arr.pop();
    console.log(arr);
    // output: ['Apple', 'Peach']
}

// by reference allocation
{
    let arr = ['Apple', 'Peach', 'Apple'];
    let arr2 = arr;
    arr2.pop();
    console.log(arr);
    // output: ['Apple', 'Peach']
}
  
{
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [-5, -4, -3],
    ];

    arr.pop(); //removes last element of array.
    console.log(arr);
    /**
     * 0 : (3) [1, 2, 3]
     * 1 : (3) [4, 5, 6]
    */
}