{
    let arr = ['Apple', 'Peach', 'Apple'];
    let shifted=arr.shift();
    console.log(shifted);
    console.log(arr);
    // Apple
    // output: ['Peach', 'Apple']
}

// by reference allocation
{
    let arr = ['Apple', 'Peach', 'Apple'];
    let arr2 = arr;
    arr2.shift();
    console.log(arr);
    // output: ['Peach', 'Apple']
}
  
{
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [-5, -4, -3],
    ];

    arr.shift(); //removes last element of array.
    console.log(arr);
    /**
     * 0 : [4, 5, 6]
     * 1 : [-5, -4, -3]
    */
}