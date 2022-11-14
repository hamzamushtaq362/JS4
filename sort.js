{
    let arr = ['Apple', 'Peach', 'Apple'];

    let get=arr.sort(); // return string of elements in ascending order
    console.log(get);

    // output: ['Apple', 'Apple', 'Peach']
}

{
    let arr = ['Apple', 'Peach', 'Apple'];

    let get=arr.sort(); // return string of elements in descending order
    get=arr.reverse();
    console.log(get);

    // output: ['Peach', 'Apple', 'Apple']
}

// using compareFunction to provide order
{
    let arr = [1,60,7,80,20,3,40,5];

    let get=arr.sort((a,b)=> {return a-b}); // return string of numbers in ascending order using arrow function
    console.log(get);

    // output: [1, 3, 5, 7, 20, 40, 60, 80]
}