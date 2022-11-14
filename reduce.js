/**
 * execute reducer function
 * On each element of array
 * Return a single value as output
 * Take parameters (accumulator,currentValue);
 * doesn't change orignal array;
 */
{
    const arr = ['Apple', 'Peach', 'Apple'];

    function join(a, b) {
        return a + " "+ b;
    }

    let arr2 = arr.reduce(join);
    console.log(arr2);

    // output: Apple Peach Apple
}

{
    const arr = [10,20,30];

    function join(a, b) {
        return a + b;
    }

    let arr2 = arr.reduce(join);
    console.log(arr2);

    // output: 60
}