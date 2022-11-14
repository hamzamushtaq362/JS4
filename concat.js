{
    let arr = ['Hamza', 'Ali', 'Ahmed'];
    let arr2 = ['Ham', 'A', 'Ah'];

    console.log(arr.concat(arr2));
    // output: ['Hamza', 'Ali', 'Ahmed', 'Ham', 'A', 'Ah']
}

{
    let arr = ['Hamza', 'Ali', 'Ahmed'];
    let arr2 = ['Ham', 'A', 'Ah'];

    console.log(arr.concat([1,2,3]));
    // output: ['Hamza', 'Ali', 'Ahmed', 1, 2, 3]
}

{
    let arr = ['Hamza', 'Ali', 'Ahmed'];
    let arr2 = ['Ham', 'A', 'Ah'];

    console.log(arr.concat([1,2,3],'John','Adam'));
    // output: ['Hamza', 'Ali', 'Ahmed', 1, 2, 3, 'John', 'Adam']
}

{
    let arr = ['Hamza', 'Ali', 'Ahmed'];
    let arr2 = ['Ham', 'A', 'Ah'];

    function concatArray(a,b){ 
        console.log(a.concat(b));
    }

    concatArray(arr,arr2);
    // output: ['Hamza', 'Ali', 'Ahmed', 'Ham', 'A', 'Ah']
}