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



// const n=5;
// const result=createCounter(n);


