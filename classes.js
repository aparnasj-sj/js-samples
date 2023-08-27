//So JavaScript doesn't really have true object inheritance.It has what is called Prototypal inheritance.
// classes is an es6 feature , under the hood  Whenever we use a class, we are still making use of Prototyp inheritance
// we can add methods the prototype object of the constructor

/**
 what is prototypal inheritance
 In JavaScript, objects have a special hidden property [[Prototype]] , that is either null or references another object. That object is called “a prototype”:
When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”
 */
function Car(options){ 
    this.title=options.title;
  }
  Car.prototype.drive=function(){
    console.log('Vroom')
  }
  // ^^ The Car constructor function is defined, and methods like drive are added to its prototype. 
  //This allows all instances of Car to share these methods.
  
  
  // Toyota shld inherit mmethod & properties of Car 
  function Toyota(options){
    Car.call(this,options) ; // Call Car constructor with 'this' context
    this.price=options.price;
    
  }
  
  // even after Car.call(this) , we can acess properties , but not able to access methods of Car via Toyota object
  Toyota.prototype=Object.create(Car.prototype);
  //Toyota.prototype=Car.prototype;
  // //Toyota.prototype is set to a new object created by Object.create(Car.prototype), establishing a prototype 
  // //chain that connects Toyota instances to Car instances, allowing them to inherit methods from Car.
  
  Toyota.prototype.constructor=Toyota;
  Toyota.prototype.sound=function(){
    console.log('beep')
  }
  // The constructor property of Toyota.prototype is then set back to Toyota function to ensure correct constructor attribution.
  /*
  console.log(Car.prototype)//{ drive: [Function (anonymous)] }
  console.log(Object.create(Car.prototype)) ; // Car {} , seems to be a car Object
  console.log(Toyota.constructor) // [Function: Function]
  */
  
  
  const focus=new Car({title:'focus'})
  focus.drive() // Vroom
  const toyota=new Toyota({title:'focus',price:2000000})
  toyota.drive() // Vroom
  focus.sound()
  
  
  // additional explanation
  /*When you create a new instance of Toyota, you also want it to inherit the properties and methods of Car. 
   However, you can't directly set Toyota.prototype to Car.prototype because then changes made to Toyota.prototype would also affect Car.prototype,
   which you usually don't want.
   To solve this, you create a new object that is linked to Car.prototype but is separate from it. 
   This is done using Object.create(Car.prototype). This new object is now the prototype of Toyota.
    
  if i directly do 
  Toyota.prototype=Car.prototype; then even focus.sound() ( Car obj), will also print beep
  
   */
  