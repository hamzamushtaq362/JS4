/**
 * static property.
 * retuen true if given object is array.
 * give false otherwise.
 * We always use it like this: Array.isArray();
 */
{
    let number=[1,2,3,4,5,6];

    let result=Array.isArray(number);
    console.log(result);

    /**
     * output: true
     */
}

{
console.log(Array.isArray([]));
/**
     * output: true
     */

console.log(Array.isArray(new Array(7)));
/**
     * output: true
     */

console.log(Array.isArray(true)); 
/**
     * output: false
     */

console.log(Array.isArray(undefined)); 
/**
     * output: false
     */

console.log(Array.isArray());
/**
     * output: false
     */
}