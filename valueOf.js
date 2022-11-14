{
    let arr = ['Apple', 'Peach', 'Apple'];

    let get=arr.valueOf(); // return array itself
    console.log(get);

    // output: ['Apple', 'Peach', 'Apple']
}


{
    let arr = ['Apple', 'Peach','','', 'Apple'];

    let get=arr.valueOf(); // return array itself
    console.log(get);

    // output: ['Apple', 'Peach', '', '', 'Apple']
}