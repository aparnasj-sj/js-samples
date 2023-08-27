// ARRAY helper methods :: 
//forEach
// filter
// map
// find
// every
// some
// reduce
// for Ecah just susbtitute for the FOR LOOP
/* Array.forEach( iterator_fn ) 
the iterator fn executes once for each elm of array : can be anonymous fn or normal fn
in case of named fn Array.forEach( ref_to_fn )
*/
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
images.forEach(function(img){
    areas.push(img.height*img.width)
})


// or
function area(img){ // named fn
   areas.push(img.height*img.width)
}
images.forEach(area) // pass in just refernce to names fn 
