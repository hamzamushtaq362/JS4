/**
 * return index of item from arr
 * return -1 otherwise
 * start position is allowed
 * nrgative values are allowed as start position
 */
 {
    let arr = ['Hamza', 'Ali', 'Ahmed','Hamza'];
    let arr2 = [1,2,3,4];


    console.log(arr.indexOf('Ali'));
    // output: 1

    console.log(arr.indexOf('Hamza',2));
    // output: 3

    console.log(arr2.indexOf(1));
    // output: 0

    console.log(arr2.indexOf(3));
    // output: 2

    console.log(arr2.indexOf(3.5));
    // output: -1
}

{
    function add(arr, item) {
        if (arr.indexOf(item) === -1) {
          arr.push(item);
        } else {
          console.log(item + " exist");
        }
      }
      
      let user = ['Hamza', 'Ali', 'Ahmed'];
      
      add(user, "John"); 
      console.log(user); 
      // output: ['Hamza', 'Ali', 'Ahmed', 'John']
      
      add(user, "John");
      // output: John exist
}

