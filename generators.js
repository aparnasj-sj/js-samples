// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
let colors=['red','green','blue']
// FOR OF loop
for(let color of colors){
  process.stdout.write(color+" ") ; // red green blue 
}

//GENERATORS    function* fn_name(){....} 
// a generator is a function that can be entered and exited multiple times with its context (variable bindings) saved across re-entrances.
// Normally, when we call a function, the function will run and it returns some value and its done
// we can have mutliple yield statements wihtin fn defenition , each time we call fnname.next() --> eexecuted till next yield

// genarator work well with For Of loops , each iteration of FOR OF loop runs till one yield statements
// USE CASE : we can use generators to iterate through any data structure that we want.


function* colors(){
    yield 'red';
     yield 'Blue';
      yield 'Green';
    
  }
  
  const gen=colors();
  // console.log(gen)// Object [Generator] {}
  // console.log(gen.next()). // { value: 'red', done: false }
  // console.log(gen.next()) // { value: 'Blue', done: false }
  // console.log(gen.next()) // { value: 'Green', done: false }
  // console.log(gen.next())// { value: undefined, done: true }
  for(let color of gen){
    console.log(color)
  }
  /*red
  Blue
  Green*/
  

  /**------------------------------------------------------------------------------ */

const engineeringTeam={
    size:3,
    department:'Engineering',
    lead:'Jill',
    dev:"jack",
    tester:'John'
  }
  // iterate only employees
  
  function* TeamIterator(team){
    yield team.lead;
    yield team.dev;
    yield team.tester;
  }
  const genTeam=TeamIterator(engineeringTeam);
  for(let mem of genTeam){
    process.stdout.write(mem+" ")// Jill jack John 
  }
  /**------------------------------------------------------------------------------- */
   // Symbol.iterator :  
  /* Symbol iterator is a tool that teaches objects how to respond to the FOR OF  loop.
  Thi will help us mention obj name inside FOR OF wiithout creating gen fn object
  eg   to tell the testing team how it should behave when someone tries to use a for of loop on it.
  yield* , makes FOR Of try to iteratore testignTeam as best as can , FOR OF is going to look for a key of Symbol.Iterator
  inside testingTeam., if exits , it wil use genartor that key points at*/

  
  
  const testingTeam={
    lead:'james',
     dev:"Lucy",
     [Symbol.iterator]:function*(){ // not [ ] is not makig an array , just fixing SyntaxError: Unexpected token '.'
       yield this.lead;
       yield this.dev;
     }
  }
  const engineeringTeam={
    testingTeam,
     size:3,
     department:'Engineering',
     lead:'Jill',
     dev:"jack",
    sre:'John',
     [Symbol.iterator]:function* (){ // replace all gen creation code for engg team with symbol iterator
       yield this.lead;
       yield this.dev;
       yield this.sre
       yield* testingTeam; // replcae genator creation & yield* gen name  with obj name 
     }
   }
   
   for(let mem of engineeringTeam){
     process.stdout.write(mem+" ")// Jill jack John james Lucy 
     
   }
   
  /**-----------------------------------    -----    -------------------------       --------------------         ------- */
    // GENERATORS WITH RECUSRION
    
  // using generator function to iterator Tree ( ie Node with Children Nodes)
  // use case : Reddit comment trees
  // syntax  *[Symbol.iterator](){ ...}
  class Comment{
    constructor(content,children){
      this.content=content
      this.children=children
      
    }
    *[Symbol.iterator](){ // SYNTAX IS DIFF FOR CLASS 
      yield this.content
      if(this.children.length>0){
      for(let child of this.children){ // go insdie each child & see if iterable & call its generator fn
        yield* child
      }
      }
    }
  }
  
  
 const comments=[ new Comment('awesone',[]), new Comment('lol',[ ]), new Comment('not good',[])  ]
 const tree=new Comment('Good POST ',comments)

 for(let node of tree){
   console.log(node) // each node yield thi.comment
 }
 /*
 Good POST 
awesone
lol
not good
 */
