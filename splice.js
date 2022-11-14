{
    let arr = ['Apple', 'Peach', 'Apple'];

    arr.splice(1, 2); // from index 1 remove 2 elements
    console.log(arr);

    // output: ['Apple']
}


{
    let arr = ['Apple', 'Peach', 'Apple'];

    arr.splice(1, 2,'Banana','Orange'); // from index 1 remove 2 elements and add 2 elements
    console.log(arr);

    // output: ['Apple', 'Banana', 'Orange']
}

{
    let arr = ['Apple', 'Peach', 'Apple'];

    arr.splice(1, 0,'Banana','Orange'); // from index 1 remove 0 elements and add 2 elements
    console.log(arr);

    // output: ['Apple', 'Banana', 'Orange', 'Peach', 'Apple']
}

{
    let arr = ['Apple', 'Peach', 'Apple'];

    arr.splice(-1, 0,'Banana','Orange'); // from index -1 remove 0 elements and add 2 elements
    console.log(arr);

    // output: ['Apple', 'Peach', 'Banana', 'Orange', 'Apple']
}

{
    let arr = ['Apple', 'Peach', 'Apple'];

    arr.splice(arr.length, 0,'Banana','Orange'); // from last index remove 0 elements and add 2 elements
    console.log(arr);

    // output: ['Apple', 'Peach', 'Apple', 'Banana', 'Orange']
}