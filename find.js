// brute force
// for i=0--> len : if users[i].name=='Liza' : user=users[i]
// FIND : help find single record matching criteria
// iterator fn is called on every elm of araray
// Returns True or False
//once it returns true, the final helper immediately exits its iteration, returning the record  that it found.
var users=[{ firstName: "John", lastName: "Doe"},{ firstName: "meena", lastName: "Roy"},{ firstName: "Liza", lastName: "Koshy"}]
var user=users.find(function(obj){
    return obj.firstName==='Liza'
    
})
console.log(user) // { firstName: 'Liza', lastName: 'Koshy' }
// example 2

function Car(model){
    this.model=model
 }
 cars=[ new Car('suzuki'), new Car('Bolero'),  new Car('honda') ]
 var car=cars.find(function(car){
     return car.model=='Bolero'
 })
 console.log(car)   // Car { model: 'Bolero' }

 // IMP EG
//  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
// findWhere(ladders, { height: '20 feet' });
// var ladders = [
//     { id: 1, height: 20 },
//     { id: 3, height: 25 }
//   ];
  //   findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }

 function findWhere(array, criteria) {
    let property = Object.keys(criteria)[0]; // extract keyname 
    var value=criteria[property]            // expected value
    return array.find(function(arr){
        return arr[property] === value;
    });
}
 // use case :  what resource we wanna show on screen , we hav a url <url>/45 , & we wanna find & display post of id =45
