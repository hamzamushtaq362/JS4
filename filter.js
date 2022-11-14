{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(arr.filter(check));

    function check(num){
        return num%2==0;
    }

    // output: [2, 4, 6, 8, 10]
}

{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(arr.filter(check));

    function check(num){
        if (num%2==0){
            return true;
        }else{
            return false;
        }
    }

    // output: [2, 4, 6, 8, 10]
}

{
    let arr = [1, 2, null, 4, 5, "six", 7, 8, 9, 10];

    console.log(arr.filter(check));

    function check(num){
        if (num>2 && num<8){
            return true;
        }else{
            return false;
        }
    }

    // output: [4, 5, 7]
}