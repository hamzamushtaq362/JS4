
{
    // Return key value pair of array indexes.
    const arr = ['Hamza', 'Ali', 'Ahmed'];
    let get=arr.entries()
    for(let item of get){
        console.log(item);
    }
    // output: [0, 'Hamza'],[1, 'Ali'],[2, 'Ahmed']
}

// using builtin next method for itration
{
    const arr = ['Hamza', 'Ali', 'Ahmed'];
    let get=arr.entries()
    console.log(get.next());
    console.log(get.next());
    console.log(get.next());

    /*
    output: done: false value: (2) [0, 'Hamza']
    output: done: false value: (2) [0, 'Ali']
    output: done: false value: (2) [0, 'Ahmed']
    */ 
}