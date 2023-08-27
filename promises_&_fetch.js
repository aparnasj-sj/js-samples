/*in JS no concept of execution of code , like sleeep(1000) to pause at a line for 1000s, 
there are only  stuff to defer execution of code like setInterval etc

promises help run some code, only after something finishes.
a promise exists in three possible states, unresolved, resolved , default state : unresolved
unresolved/pending: waiting for somthing to finishe
resolved : process finished & evrything went ok
rejected : process finished & evrything went wrong ( eg : mayb network req failed )

we can register callback functions with either "then" or "catch" 
then & catch are  properties that sit on top of ourpromise object 
when a promise enters the resolve state, fuctions inside "then" would get executed
when it enter "rejected" state, callbacks registered with "catch" would get called.
note: can chain multiple call backs on then() or catch

can create promise via new Promise(<function defeniton>)
the inner function gets 2 argumnets resolve & reject functions , which we can call to indicate sucess OR fail.


how to incorprate asynchronous code into this --> bases on when resolve() and reject() are called .
And I want my code to continue executing in the background other things to happen and just wait for
the promise to actually get resolved here*/


//const promise=new Promise((resolve,reject)=>{}) 
/*[[PromiseState]]: "pending"
[[PromiseResult]]: undefined*/
let promise=new Promise((resolve,reject)=>{ resolve();})
promise.then(()=>{
    console.log('sucess')
}).then(()=>{
    console.log('sucess 1.2')
})
promise.catch(()=>{
    console.log('something went wrong')
})

promise=new Promise((resolve,reject)=>{ reject();}) // call reject() , only fns within catch r executed 
promise.then(()=>{
    console.log('sucess')
}).catch(()=>{
    console.log('something went wrong insde promise 2')
})
/*output
sucess
something went wrong insde promise 2
sucess 1.2
*/

/**----------------------------- -----------------    ----------------------- */

promise=new Promise((resolve,reject)=>{ 
    // stimulate somehitn that takes stimulate
    setInterval(()=>{
      reject()
    },1000)
  })
  promise.then(()=>{console.log('sucess on promise 3')})
  .catch(()=>{console.log('Failed on promise 3')})
  // Failed on promise 3


// FETCH
url="https://jsonplaceholder.typicode.com/posts/"
fetch(url).then(data=>console.log(data.data)). //OUTPUT: undefined 
// missing a step
fetch(url).then(data=>data.json()).then(data=> console.log(data)) // (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, ...
// problem with fetch , if server retruns anuthing above 300 it dosent enter catch block
// catch is entered only if network req is failed to be made 
// if fetch() hits your server and gets a failed status code, it executed "then" block ,
// which is dissimilar to how every other Ajax library out there behaves
