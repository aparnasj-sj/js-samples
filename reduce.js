// Array. reduce ( ietartor(ini_value , elm ){},value_for_initial_value)
// for futher iteration: Array. reduce ( ietartor(value_return_from_prev_iteration , elm ))
// reduce help condense array into single value
var colors=[{color:'red'},{color:'yellow'},{color:'blue'}]
// desired : ['red','yellow','blue']

var output=colors.reduce(function(previous,color){
 // return [...previous,color.color]
previous.push(color.color)
return previous
},[])
console.log(output) // [ 'red', 'yellow', 'blue' ]
// note : some apt names for first arg to reduce fn : previous , accumulator , mem ...


// USE CASE 
// balanced paranthesis 
// whenevr ) encounterted a ( shld hav already been encountered 
// what if empty acc when ) ......False 
// if we have a counter , when encountering ')' , counter must >=0 ;
function balancedPara(input){
    return !input.split('').reduce(function(prev,char){
        // one more catch
        /// if ever prev go into -ve , ie a clsoing encounterd before a opening
        // it shld stay in negatives
        if(prev<0){return prev}
        if(char=='('){return ++prev;}
         if(char==')'){return --prev;}
        
        
    },0)
    // exprected value =0 , hence ! of reduce output
    // if result non zero => !(non zero) => true 
}
console.log(balancedPara(")("))


// Write a function called 'unique' that will remove all the duplicate values from an array.
// use reduce & find
function unique(array) {
    return array.reduce(function(acc,value){
        // match critera : acc elm equal to array.value
        if(acc.find(function(elm){
            return elm==value;
            })){
            return acc;
            
        }
        acc.push(value);return acc;
        
    },[])
  
}
// reduce , ini: []
// if acc.find(elm) : dont insert , else inert to acc