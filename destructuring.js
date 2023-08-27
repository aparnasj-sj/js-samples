// lessr code to pull propeties off from objects 

const expense = {
    type: "Food",
    amount: 50.00
  };
  // es5
  var type=expense.type
  console.log(type) // Food
  // es6
   var {amount} =expense; // created new var 'amount' & it refernce expensea.amount
                    // the var name wihtin {...} must match property on LHS
                   // detsrcture somthing that dosent exist on obj , will be assigned 'undefined', wont throw error
   console.log(amount) // 50
   
   // example 2
   const fileSummary = {
    extension: "",
    name: "",
    size: 0,
  };
  // es5
  // function printSummary(file) {
  //     console.log(`File Name: ${file.name}File Extension: ${file.extension} File Size: ${file.size} bytes `);
  //   }
  
  // es6
  
  function printSummary({name,extension,size},{color}) {
      console.log(`File Name: ${name}File Extension: ${extension} File Size: ${size} bytes in color ${color} `);
    }
  printSummary(fileSummary,{color:'red'})


  // destructure arrays : help pull elements out of arrays based on loc within array

const companies = [
  "Acme Tech","Google", "Global Innovators Co.", "Alpha Industries",
  "Bright Future Enterprises","NexGen Technologies","Infinite Insights Ltd.",  "Starship Systems"]
  const [name1 , name2]=companies; // pulls out name1=Acme Tech & name2=Google
  console.log(name1,',', name2)  // Acme Tech , Google
  const [name3 , ...rest]=companies;
  console.log(rest) // evrything excpet first elm 

    // can pull out 'length' peoperty of array via destructruing
    const {length} = companies;
    console.log(length) // 8

  // next example 
    const companies2 = [
        { name: "ABC Corp", location: "New York" },  { name: "TechSolutions", location: "San Francisco" },
        { name: "InnoTech", location: "London" },  { name: "Alpha Ltd", location: "Tokyo" },
        { name: "EcoCo", location: "Berlin" },
        ]
        // loc of first company
        var loc1=companies2[0].location
        console.log(loc1)
      
      // Two set of destructing ( from array & get property off object wihtin array)
      var [comp1]=companies2;
      console.log(comp1)//{ name: 'ABC Corp', location: 'New York' }
      var [{location:loc1},{location:loc2}]=companies2; // get location prop off & renaming it
      console.log(loc1,',',loc2)// New York , San Francisco
      
      // example 
      const Google={
        locations:['new york','mn view','citabdel']
      }
      // access mn view 
      const { locations:[,location2] } = Google; // access locations property and get 2 elm form array 
      console.log(location2) // mn view

 // ==========================================================================
      
// WHEN TO USE DESTRUCTING 

// case : desctrue argument objects 
// And you've got a very long argument list for a function.
//It starts to get a little bit more challenging to rember order of arguments escape
// eg function signup(uname,pw,email,dob,addr,age){..}
// one soln: passing in an obj instedd of list of String
// desctrue off properyies from obj in fn argumnet , u can declare proprties wihitn obj in any order
// function signup({ uname,pw,email,dob,addr,age } ){..}

// example 
// turn below array of array's into array of objects with x & y property

const points=[
  [10,20],[20,30],[15,60]
  ]
// exprected [ {x:10,y:20},.......]
const points2=points.map(function(arr){
 const  [x,y]=arr;
  return {x,y}; //enhaced lietrals x:x,y:x ===> x,y
})
console.log(points2) // [ { x: 10, y: 20 }, { x: 20, y: 30 }, { x: 15, y: 60 } ]
// another imporvment
const points3=points.map(([x,y])=> { // destrucying arr within fn argument itself.
  return {x,y}; 
})
console.log(points3) // [ { x: 10, y: 20 }, { x: 20, y: 30 }, { x: 15, y: 60 } ]


// EXERCISE Q
// Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will 
//return a new array with all values inside of it multiplied by two.  Do not use any array helpers! 
const numbers = [11, 2, 3,4,5,6];

function double(arr) {
    if(arr.length==0){return []}
    
    const [e,...rest]=arr;
    // call recursion on arr-first elm
    const returned=double(rest);
    // join result of first elm & recursion
    return [2*e,...returned];
    
}

console.log(double(numbers))// [ 22, 4, 6, 8, 10, 12 ]
