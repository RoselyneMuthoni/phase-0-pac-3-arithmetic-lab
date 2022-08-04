function add(a,b) {
    return a+b;
  }
  
  function subtract(a,b) {
    return a-b;
  }
  
  function multiply(a,b) {
    return a*b;
  }
  function divide(a,b) {
    return a/b;
  }
  
  function increment(a) {
    a++;
    return a;
  }
  
  function decrement(a) {
    a--;
    return a;
  }
function preserveDecimal(a) {
   var result= parseFloat(a,10)
return result;
}
function makeInt(n) {
    var result = parseInt(n,10);
    return result;

    var result = parseInt(NaN);
    return NaN;
}
