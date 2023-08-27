numbers=[1,2,3,4]
// Map returns new array by manipulation of elm on an array
// iterator fn executed for each elm , and retun manipulated  value
// retuned value is placed into new array
doubled_numbers=numbers.map(function(num){
    return num*2
    
})
console.log(doubled_numbers) // [ 2, 4, 6, 8 ]


// getting values out ffrom object , get array of last names only
let persons=[{ firstName: 'John', lastName: 'Doe'},{
    firstName: 'Mary', lastName: 'Ann'},  ]
lastnames= persons.map(function(person){
    return person.lastName    // IMP , dont need to push to result array , just return 
}) 
console.log(lastnames)// [ 'Doe', 'Ann' ]


// another eg , to use 2 keys of an object to calculate a thirs value to push into array
var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds = trips.map(function(trip){
  return trip.distance/trip.time;
  })
 // Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 
 // var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }]; pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
 function pluck(array, property) {
    return array.map(function(elm){
        return elm[property]
        
    })
    
 }
 