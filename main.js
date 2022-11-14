{
    let arr = ['Hamza', 'Ali', 'Ahmed'];
    let num=[12,24,36,48,60];
    // let arr2 = ['Ham', 'A', 'Ah'];
    function concatination(){
        console.log('running');
        arr=arr.concat(document.getElementById("1").value,
        document.getElementById("2").value);
        // console.log(arr);
        document.getElementById("main").innerHTML=arr;
    }

    function push(){
        console.log('running push');
        arr.push(document.getElementById("1").value);
        // console.log(arr);
        document.getElementById("main").innerHTML=arr;
    }

    function pop(){
        console.log('running pop');
        arr.pop();
        // console.log(arr);
        document.getElementById("main").innerHTML=arr;
    }

    function construct(){
        let get = arr.constructor;
        document.getElementById("main").innerHTML=get;
        // console.log(get);
        // output: ƒ Array() { [native code] }
    }

    function copyWithin(){
        // modifies the original array 
        console.log(arr.copyWithin(document.getElementById("1").value,
        document.getElementById("2").value,arr.length-2));
        document.getElementById("main").innerHTML=arr;
    }

    function entries() {
        let get = arr.entries()
        let arr2 = [];
        for (let item of get) {
            arr2 = item;
        }
        document.getElementById("main").innerHTML = arr2;
        // console.log(arr2);
    }

    function every() {
        // takes callback function
        // console.log(num.every(checkAge));
        let res=num.every(checkAge)
        document.getElementById("main").innerHTML = res;
    
        function checkAge(age) {
            return age >= document.getElementById("1").value;
        }
    }

    function filter() {
    
        // console.log(num.filter(check));
        let res=num.filter(check);
        document.getElementById("main").innerHTML = res;
    
        function check(num){
            return num%2==0;
        }
    }

    function find() {
        let res=num.find(ev);
    
        function ev(item){
            return item % 2==0;
        }
        // console.log(res);
        document.getElementById("main").innerHTML=res;
        // output: 2
    }

    function findIndex() {
        let res=num.findIndex(ev);
    
        function ev(item){
            return item==document.getElementById("1").value;
        }
        // console.log(num);
        document.getElementById("main").innerHTML=res;
        // output: 2
    }

    function forEach() {
        let arr2=[];
        num.forEach(ev);
        function ev(item){
            console.log(item);
            arr2.push(item);
        } 
        console.log(arr2);
        document.getElementById("main").innerHTML=arr2;
    }

    function from() {
        let res=Array.from(document.getElementById("1").value);
        // console.log(res);
        document.getElementById("main").innerHTML=res;
    
        /*
        output: ['H', 'a', 'm', 'z', 'a']
        */
    }

    function includes() {
        let res=arr.includes(document.getElementById("1").value);
        // console.log(arr.includes(document.getElementById("1").value));
        document.getElementById("main").innerHTML=res;
        // output: true
    }

    function indexOf(){
        let res=arr.indexOf(document.getElementById("1").value,
        document.getElementById("2").value);

        // console.log(arr.indexOf(document.getElementById("1").value,
        // document.getElementById("2").value));

        document.getElementById("main").innerHTML="At index "+res;
    }

    function isArray() {
        let res=Array.isArray(arr);
        console.log(res);
        document.getElementById("main").innerHTML=res;
    }

    function key() {
        let getName=arr.keys();
        let arr2=[];
    
        for(let item of getName){
            // console.log(item);
            arr2.push(item);
        }
        document.getElementById("main").innerHTML=arr2;
    }

    function lastIndex() {
        let res=arr.lastIndexOf(document.getElementById("1").value);
        // console.log(arr.lastIndexOf(document.getElementById("1").value));
        document.getElementById("main").innerHTML=res;
    }

    function map() {
        function mul(num) {
            return num + num;
        }
    
        let numbers = num.map(mul);
        console.log(numbers);
        document.getElementById("main").innerHTML=numbers;
    }

    function reduce() {
        function join(a, b) {
            return a + b;
        }
    
        let arr2 = num.reduce(join);
        // console.log(arr2);
        document.getElementById("main").innerHTML=arr2;
        // output: Apple Peach Apple
    }

    function reverse() {
        arr.reverse();
        // console.log(arr);
        document.getElementById("main").innerHTML=arr;
    }

    function shift() {
        let shifted=arr.shift();
        // console.log(shifted);
        // console.log(arr);
        document.getElementById("main").innerHTML=arr;
    }

    function unShift() {
        arr.unshift(document.getElementById("1").value);
        // console.log(arr);
        document.getElementById("main").innerHTML=arr;
    }

    function slice() {
        let arr2 = arr.slice(document.getElementById("1").value,
        document.getElementById("2").value); //excluding end  
        // console.log(arr2);
        document.getElementById("main").innerHTML=arr2;
    }

    function splice() {
        arr.splice(document.getElementById("1").value,
        document.getElementById("2").value); // from index 1 remove 2 elements
        console.log(arr);
        document.getElementById("main").innerHTML=arr;
    }

    function some() {
        let res=num.some(checkAge)
        // console.log(num.some(checkAge));

        document.getElementById("main").innerHTML=res;
        function checkAge(age) {
            return age < 18;
        }
    }

    function sort() {
        let res=arr.sort(); // return string of elements in ascending order
        // console.log(res);
        document.getElementById("main").innerHTML=res;
    }

    function toString() {
        let get=arr.toString(); // return string of elements in array
        // console.log(get);
        document.getElementById("main").innerHTML=get;
    }

    function valueOf() {
        let get=arr.valueOf(); // return array itself
        console.log(get);
        document.getElementById("main").innerHTML=get;
    }
        
}

{
    function addNum(){
        // console.log('running');
        let a1=document.getElementById("1").value;
        a1=Number(a1);
        // console.log(typeof(a1));
        let b1=document.getElementById("2").value;
        b1=Number(b1);
        console.log(a1+b1);

    }

    function subNum(){
        // console.log('running');
        let a1=document.getElementById("1").value;
        a1=Number(a1);
        // console.log(typeof(a1));
        let b1=document.getElementById("2").value;
        b1=Number(b1);
        // console.log(a1-b1);
        document.getElementById("main").innerHTML=a1-b1;
    }
}

{
    function getSelect(){
        var form1 = document.getElementById("mySelect").value;
        // console.log(form1);
        if(form1=='Addition'){
            addNum();
        }else if(form1=='Subtraction'){
            subNum();
        }else if(form1=='Concatination'){
            concatination();
        }else if(form1=='Push'){
            push();
        }else if(form1=='Pop'){
            pop();
        }else if(form1=='Constructor'){
            construct();
        }else if(form1=='CopyWithIn'){
            copyWithin();
        }else if(form1=='Entries'){
            entries();
        }else if(form1=='Every'){
            every();
        }else if(form1=='Filter'){
            filter();
        }else if(form1=='Find'){
            find();
        }else if(form1=='FindIndex'){
            findIndex();
        }else if(form1=='ForEach'){
            forEach();
        }else if(form1=='From'){
            from();
        }else if(form1=='Includes'){
            includes();
        }else if(form1=='IndexOf'){
            indexOf();
        }else if(form1=='IsArray'){
            isArray();
        }else if(form1=='Key'){
            key();
        }else if(form1=='LastIndexOf'){
            lastIndex();
        }else if(form1=='Map'){
            map();
        }else if(form1=='Reduce'){
            reduce();
        }else if(form1=='Reverse'){
            reverse();
        }else if(form1=='Shift'){
            shift();
        }
        else if(form1=='UnShift'){
            unShift();
        }else if(form1=='Slice'){
            slice();
        }else if(form1=='Splice'){
            splice();
        }else if(form1=='Some'){
            some();
        }else if(form1=='Sort'){
            sort();
        }else if(form1=='ToString'){
            toString();
        }else if(form1=='ValueOf'){
            valueOf();
        }
        
    }
}