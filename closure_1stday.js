// console.log('mukesh kumar')
// this is a closure patterns 
function createhelloworld(){
    return function(){
        return "hello world";
    }
}
const helloworldfunction=createhelloworld();
const result=helloworldfunction();
console.log(result)


// counter function by using closure pattern

function createfunction(a){
    let count=a;
    let isFirstCall = true;

     function counter(){
        if (isFirstCall) {
        isFirstCall = false;
        return count; // Return the initial value 'n' on the first call
    } else {
        count++; // Increment the count for subsequent calls
        return count; // Return the incremented value
    }
  }
    return counter;

}
const n=10;
const counter=createfunction(n);
// console.log(n)
console.log(counter());
console.log(counter());
console.log(counter());


// testing the projects code 
function exert(val){
   return {
    toBe: function (otherVal){
        if( val!==otherVal){
            throw new Error('Not equal')
        }
        return true;
    },
    
    nottoBe: function(otherVal){
              if (val==otherVal){
                throw new Error('Equal')
              }
              return true
    } 
}
 
}

const value =5;
const assertion=exert(value);


  
 try {
     assertion.toBe(5);
     console.log('test pass for toBe');
 
 }  catch(error) {
     console.log('test failed for toBe',error.message);
 
 }
 
 try {
     assertion.nottoBe(20);
     console.log('test pass for nottoBe')
 }
 catch(error) {
     console.log('test failed for nottoBe',error.message);
 }
 


function createCount(init){
    let count =init;
  return {
  increment: function(){
    count++;
    return count
  },
  
  decrement: function(){
      count--;
      return count;
  },

  reset: function(){
     count=init;
     return count;
  }

  }
}

