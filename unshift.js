{
    let arr = ['Apple', 'Peach', 'Apple'];
    arr.unshift('Banana');
    console.log(arr);
    // output: ['Banana', 'Apple', 'Peach', 'Apple']
}

// more then one element can be add at same time.
{
    let arr = ['Apple', 'Peach', 'Apple'];
    arr.unshift('Banana','Orange','Avocado');
    console.log(arr);
    // output: ['Banana', 'Orange', 'Avocado', 'Apple', 'Peach', 'Apple']
}

// by reference allocation
{
    let arr = ['Apple', 'Peach', 'Apple'];
    let arr2 = arr;
    arr2.unshift('Banana');
    console.log(arr);
    // output: ['Banana', 'Apple', 'Peach', 'Apple']
}

{
    // this function will unshift element into array only if element of same value doesnot exist already.
    function add(arr, item) {
        if (arr.indexOf(item) === -1) {
            arr.unshift(item);
        } else {
            console.log(item + " exist");
        }
    }

    let user = ['Hamza', 'Ali', 'Ahmed'];

    add(user, "John");
    console.log(user);
    // output: ['John', 'Hamza', 'Ali', 'Ahmed']

    add(user, "John");
    // output: John exist
}