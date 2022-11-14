{
    let arr = ['Apple', 'Peach', 'Apple'];
    console.log(arr);

    let arr2 = arr.slice(1, 2); //excluding end  
    console.log(arr2);

    // output: ['Peach']
}


{
    let arr = ['Apple', 'Peach', 'Apple'];
    console.log(arr);

    let arr2 = arr.slice();
    console.log(arr2);

    // output: get copy of array
}

{
    let arr = ['Apple', 'Peach', 'Apple'];
    console.log(arr);

    let arr2 = arr.slice(1); //startinf from 1 index
    console.log(arr2);

    // output: ['Peach', 'Apple']
}

{
    let arr = ['Apple', 'Peach', 'Apple','Orange','Peach'];
    let arr2 = arr.slice(-3); //last 3 index values excluding -3
    console.log(arr2);

    // output: ['Apple', 'Orange', 'Peach']
}