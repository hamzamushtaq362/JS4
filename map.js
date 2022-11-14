/**
 * Call function for every array element 
 * Create new array.
 */
{
    let arr = ['Apple', 'Peach', 'Apple'];
    let user = arr.map(item => item.length);
    console.log(user);
    /**
     * output: [5, 5, 5]
     */
}

{
    let num = [2, 4, 6, 8, 10];

    function mul(num) {
        return num + num;
    }

    let numbers = num.map(mul);
    console.log(numbers);
    /**
     * output: [4, 8, 12, 16, 20]
     */
}

{
    let arr=[
        {name:'Hamza',age:12,},
        {name:'Ali',age:13,},
    ]

    let arr2=arr.map(newAge);
    console.log(arr2);

    function newAge(item){
        obj={};
        obj.name=item.name;
        obj.age= item.age+1;
        return obj;
    }
    
    /**
     * output:
     * 0 : {name: 'Hamza', age: 13}
     * 1 : {name: 'Ali', age: 14}
     */
}