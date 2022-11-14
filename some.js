// Checks if any element of array pass test in given function.
// executes the callback function once for each element
// return true if any of element pass the test
// return false otherwise
// doesnot modify orignal array values.
// Can apply on elements with empty values.
{
    // takes callback function
    let num=[2,4,6,8,18];
    console.log(num.some(checkAge));

    function checkAge(age){
        return age>=18;
    }

    // output: true
}

// using simple function
{
    let num = [12, 24, 36, 48];
    console.log(num.every(checkAge));

    function checkAge(age) {
        return age < 12;
    }

    // output: false
}