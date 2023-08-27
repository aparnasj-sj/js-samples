// Enhaced Object Literals
//===========================
// eg : book store obj
// key & value that are identical , u can condense it down to just varname 
// if you have key: value pair where value is function, u can omit : and function keyword
// fn_name: function(){....} ----> fn_name(){....}

function BookStore(inventory){
    return {
    inventory:inventory,
    TotalPrice:function(){
        return this.inventory.reduce((acc,elm)=>acc+elm.price,0)
    },
    PriceForTitle:function(title){
       return  inventory.find(elm => elm.title==title).price
        
    }
    }
    
}
// inventory array {titile,price}[]
// priceforTitle fn
// total price fn 
const inventory=[ {title:'harry potter',price:30}, {title:'alice in wonderland',price:30},
      {title:'merry go round',price:10}  ]

const book_store=BookStore(inventory)
console.log(book_store.PriceForTitle('alice in wonderland'))

function BookStore2(inventory){
    return {
    inventory, // when key& value var same name
    TotalPrice(){ // remove function keyword & : 
        return this.inventory.reduce((acc,elm)=>acc+elm.price,0)
    },
    PriceForTitle(title){
       return  inventory.find(elm => elm.title==title).price
        
    }
    }
    
}
const book_store2=BookStore2(inventory)
console.log(book_store2.TotalPrice())



