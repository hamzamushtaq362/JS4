// Checks if every element of array pass test in given function.
// return true if every element pass the test
// return false otherwise
// doesnot modify orignal array values.
// cannot apply on elements with empty values.
{
    // takes callback function
    let num=[2,4,6,8,10];
    console.log(num.every(checkAge));

    function checkAge(age){
        return age>=18;
    }

    // output: false
}

// using simple function
{
    let num = [2, 4, 6, 8, 10];
    console.log(num.every(checkAge));

    function checkAge(age) {
        return age >= 2;
    }

    // output: true
}

// using arrow function
{
    let num = [2, 4, 6, 8, 10];
    console.log(num.every((age)=> age >= 2));

    // output: true
}