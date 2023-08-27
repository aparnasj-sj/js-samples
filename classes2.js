// class ClassName{...define methods & properties ...}
// define conctructor(){...} method inside class for dng any initializatin
//  to inherit stuff from another class : extends ParentClassName 
// & wihtin constructor of ChildClass call super() 
// this will  call the car's constructor method so that we get any initialization or setup code in there to run as well.
// when we use the extended keyword, we are saying I want Toyota to have access to all the methods
//and set up inside of car.

//example
class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
  }
  
  class Snake extends Monster {
      constructor(options){
          super(options) // equivalent to Monster.constructor() call
          
      }
      bite(snake){
          snake.health=snake.health-10;
      }
  
  }
  
  // use case , React replaced React.createClass({.....}) with class MyComponent extends Component{....}
  // made it eaiser a lot to sublcass stuff
  
  