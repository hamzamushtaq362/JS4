/*
return undefined if no element pass test
Does not modify orignal array.
Function is call for each array elemnet.
*/
{
    let arr=[1,2,3,4];
    arr.forEach(ev);

    function ev(item){
        console.log(item);
    }

    /*
    output:
    1
    2
    3
    4
    */  
}

// using object as array elements
{
    let arr=[1,2,3,4];
    let num=arr.forEach(ev);

    function ev(item,index,array){
        console.log(index,item);
    }

    /*
    output:
    0 1
    1 2
    2 3
    3 4
    */  
}

{
    let sum=0;
    let arr=[1,2,3,4];
    arr.forEach(ev);
    console.log(sum);

    function ev(item){
        sum=sum+item;
    }

    /*
    output: 10
    */  
}


