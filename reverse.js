/**
 * modify orignal array
 */
{
    let arr = ['Apple', 'Peach', 'Apple'];

    let get=arr.sort(); // return string of elements in descending order
    get=arr.reverse();
    console.log(arr);
    console.log(get);
    // output: ['Peach', 'Apple', 'Apple']
    // output: ['Peach', 'Apple', 'Apple']
}

// use spread operator to stop modifying orignal array
{
    let arr = ['Apple', 'Peach', 'Apple'];

    let get=arr.sort(); // return string of elements in descending order
    get=[...arr].reverse();
    console.log(arr);
    console.log(get);
    // output: ['Apple', 'Apple', 'Peach']
    // output: ['Peach', 'Apple', 'Apple']
}