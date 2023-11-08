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



