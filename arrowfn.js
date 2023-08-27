

// arrow function
// remove "function"
// add =>
// for single expr inside fn , remove {..} 
// once {..} removed , remove "return" keyword ( IMPLICIT return)
// for single argument fn can remove (..) also .


// object team , with  a fn teamSummary , that access this.properties 
let team={
    members:['arya','harry'],
    teamName:'squad 1',
    teamSummary: function(){
        return this.members.map(function(name){
            return `${name} is in team ${this.teamName}`
        })
    }
}
console.log(team.teamSummary())
// [ 'arya is in team undefined', 'harry is in team undefined' ]
// problem : for fn passed into map not having access to this 
team={
    members:['arya','harry'],
    teamName:'squad 1',
    teamSummary: function(){
        return this.members.map(function(name){
            return `${name} is in team ${this.teamName}`
        }.bind(this))
    }
}
console.log(team.teamSummary())
//[ 'arya is in team squad 1', 'harry is in team squad 1' ]
// when ur passing anonymous fn off into map , its not having access team as 'this'

team={
    members:['arya','harry'],
    teamName:'squad 1',
    teamSummary: function(){
        return this.members.map(name=> `${name} is in team ${this.teamName}`
        )
    }
}
console.log(team.teamSummary())
// [ 'arya is in team squad 1', 'harry is in team squad 1' ]
// Arrow functions bind the value of 'this' to the surrounding context
// “This”  is automatically set equal to this in the surrounding context, which in this case is equal to our team.

//Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  The code below has an object that represents a users profile. 
// The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.  
//Does the solution work with a fat arrow function or will you have to use a function keyword instead?

// const profile = {
//     name: 'Alex',
//     getName:()=>{
//         return this.name
//     }
// };
// TypeError: undefined is not an object (evaluating 'undefined.name')

const profile = {
    name: 'Alex',
    getName:function (){
        return this.name
    }
};
// above works