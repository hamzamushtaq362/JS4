/*
Return index of first element of array that pass the test function.
return -1 if no element pass test
Does not modify orignal array.
Function is applied on each array elemnet one by one.
*/
{
    let arr=[1,2,3,4];
    let num=arr.findIndex(ev);

    function ev(item){
        return item==3;
    }
    console.log(num);

    // output: 2
}

// using object as array elements
{
    let arr=[
        {name:'Hamza', id:1},
        {name:'Ali', id:2},
        {name:'Ahmed', id:3},
    ];

    let user=arr.findIndex(fN);

    function fN(item){
        return item.id==1;
    }
    console.log(user);

    // output: 0
    // output: return -1 if no element pass test

}

// using arrow function
{
    let arr=[
        {name:'Hamza', id:1},
        {name:'Ali', id:2},
        {name:'Ahmed', id:3},
    ];

    let user=arr.findIndex((item)=> item.id==1);
    console.log(user);

    // output: 0
    // output: return -1 if no element pass test
}