// REST & SPREAD operator

// one uase case of rest : accpet n arguments where 'n' varies 
// rest operator is 3 dots (...x)
function add(array){
    return array.reduce((acc,num)=>{
      return acc+num
    },0)
  }
  
  console.log(add([1,2,3,4,6]))
  // now if im passing in 'n' numbers but not as array , function add(a,b,c,b){..} then make array from argumnets
  // But unable to knw how many arguments beforhand
  function add2(...numbers){
    return numbers.reduce((acc,num)=>{
      return acc+num
    },0)
  }
  console.log(add2(1,2,3,4,13)) // 23
//===================================================================================

// spread : used to flatten stuff out from arrays
// ... ( 3 dots) is spread operator
const colors=["red","green"]
const colors2=["yellow","Blue"]
const allcolors=['black',...colors,...colors2]
console.log(allcolors) // [ 'black', 'red', 'green', 'yellow', 'Blue' ]

// Eg with both rest & spread operator
// shoppcart fn , accpet 'n' items , check if 'milk' there , if not return items with milk included

function shoppingCart(...items){
  if(items.indexOf('milk')<0){
    return ['milk',...items]
  }
  return items
  
}
console.log(shoppingCart('paper','orange','greens','tomato'))// [ 'milk', 'paper', 'orange', 'greens', 'tomato' ]