{
  let arr = ['Apple', 'Peach', 'Apple'];
  arr.push('Banana');
  console.log(arr);
  // output: ['Apple', 'Peach', 'Apple', 'Banana']
}

// by reference allocation
{
  let arr = ['Apple', 'Peach', 'Apple'];
  let arr2 = arr;
  arr2.push('Banana');
  console.log(arr);
  // output: ['Apple', 'Peach', 'Apple', 'Banana']
}

{
  // this function will push element into array only if element of same value doesnot exist already.
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