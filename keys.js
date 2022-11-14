/**
 * return a new array itratited objects with keys for each elements.
 */
{
    let name=['Py','Swift','Native','Flutter','Dart'];
    let getName=name.keys();

    for(let item of getName){
        console.log(item);
    }

    /**
     * output: 
     * 0
     * 1
     * 2
     * 3
     * 4
     */
}

// ignore empty array
{
    let name=[];
    let getName=name.keys();

    for(let item of getName){
        console.log(item);
    }

    /**
     * output: 
     * 0
     */
}

// Doesn't ignore empty holes
{
    let name=['Py','Swift','','','Native','Flutter','Dart'];
    let getName=name.keys();

    for(let item of getName){
        console.log(item);
    }

    /**
     * output: 
     * 0
     * 1
     * 2
     * 3
     * 4
     * 5
     * 6
     */
}