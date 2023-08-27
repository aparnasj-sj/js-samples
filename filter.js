// Array.filter( iterator_fn ) 
// iterator fn take in each elm & must return True or False
// if return value is  True elm is kept in result array else not
let products=[
    { name: 'banana', type: 'fruit' ,quantity:0, price :20},
    { name: 'cucumber', type: 'vegetable',quantity:2, price :10},
    { name: 'apple', type: 'fruit',quantity:3, price :20},
     { name: 'potato', type: 'vegetable',quantity:1, price :9}]
   
fruits=products.filter(function(obj){
   if(obj.type=='fruit') {
       return true
   }
   false 
})
console.log(fruits)

// checking multiple conditions 
result=products.filter(function(obj){
   return obj.type==='vegetable' && obj.price<10 && obj.quantity>0
})
console.log(result)

// example 3
//reate a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true',
// the item should *not* be included in the new array.  Hint: you can reuse filter.
function reject(array, iteratorFunction) {
    return array.filter(function(elm){       // just dng array.filter(!iteratorFuction) not wokring
        return !iteratorFunction(elm)
    })
   }
 // USE CASE : function ( post, comments[] )  & return comments asso with that post alone

