/*
    creates a new array using arraylike objects.
    arraylike means having length and like string.
    */
{
    // using two parameters
    let arr=Array.from('Hamza');
    console.log(arr);

    /*
    output: ['H', 'a', 'm', 'z', 'a']
    */
}

// using two parameters
{
    function get(str,mapFunc){
        let arr=Array.from(str,mapFunc);
        console.log(arr);
    }

    get([1,2,3],(element)=>element+2);

    /*
    output: [3, 4, 5]
    */
}