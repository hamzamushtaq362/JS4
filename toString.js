{
    let arr = ['Apple', 'Peach', 'Apple'];

    let get=arr.toString(); // return string of elements in array
    console.log(get);

    // output: Apple,Peach,Apple
}

// array with empty holes
{
    let arr = ['Apple', 'Peach','','', 'Apple'];

    let get=arr.toString(); // return string of elements in array, also include empty holes
    console.log(get);

    // output: Apple,Peach,,,Apple
}

// nested array
{
    let arr = ['Apple', 'Peach', 'Apple',['Hamza','Ali']];

    let get=arr.toString(); // return string of elements in array, convert nested array aswell
    console.log(get);

    // output: Apple,Peach,Apple,Hamza,Ali
}