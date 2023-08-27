// lets say i have computer[] , where each has property memory & ram
// A computer can run prgm if it has > 16 memory & 8 cpu
// brute force :: 
// can all computers run ?
// var canAllComputersRun = true // initial assumtpion is True
// for loop : (if computer.mem < 16 || comp.cpu<8) canAllComputersRun=False
// can any computers run ?
// var canAnyComputersRun = false // initial assumtpion is False
// for loop : (if computer.mem > 16 &&  comp.cpu> 8) canAnyComputersRun= True

// Array.every( Ierator fn )
// iterator fn runs on every elm ,Return Boolean ,  and individual result are && 
// ie , if evry elm return true for iterator fn, Result will be True, else False
var computers=[
    {memory:12,cpu:1},{memory:1,cpu:9},{memory:2,cpu:1},{memory:2,cpu:31}, ]
const canAllComputersRun=computers.every(function(comp){
    return comp.memory>16 && comp.cpu>8
})
// iterator fn runs on every elm ,Return Boolean ,  and individual result are || 
// ie , if iterator True for any elm ,Result will be True 
// Result False , if every elm return False
const canAnyComputersRun=computers.some(function(comp){
    return comp.memory>16 && comp.cpu>8
})
console.log(canAnyComputersRun)
// use case : Form validation
function Field(value){
    this.value=value
}
var username=new Field("abava")
var password=new Field("ababsbbsb")
var address=new Field("aggs shshhs, ahshhs")
// Field if valid if not empty
Field.prototype.validate=function(){
    return this.value.length > 0;
}

// Brtue Force : username.valid() && password.valid && .....
// EVERY HELPER
const fields=[username,password,address]
const isFormValid=fields.every(function(field){
    return field.validate()
})
isFormValid   // true