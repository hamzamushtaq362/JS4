/*
Return first element of array that pass the test function.
return undefined if no element pass test
Does not modify orignal array.
This funation is specifically applied when we want to apply test function on object values.
Function is applied on each array elemnet one by one.
*/
{
    let arr=[1,2,3,4];
    let num=arr.find(ev);

    function ev(item){
        return item % 2==0;
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

    let user=arr.find(fN);

    function fN(item){
        return item.id==1;
    }
    console.log(user);

    // output: {name: 'Hamza', id: 1}
}

// using arrow function
{
    let arr=[
        {name:'Hamza', id:1},
        {name:'Ali', id:2},
        {name:'Ahmed', id:3},
    ];

    let user=arr.find((item)=> item.id==1);
    console.log(user.name);

    // output: Hamza
}