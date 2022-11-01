const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
  if(array.length==0){
    return 0
  }else{
    const resultado = array.reduce((a,b)=> a+b);
    return resultado
  }
};

const multiply = function(array) {
  if(array.length==0){
    return 0
  }else{
    const resultado = array.reduce((a,b)=> a*b);
    return resultado
  }
};

const power = function(num,pot) {
  let resultado = Math.pow(num,pot)
  return resultado
};

const factorial = function(num) {
  let resultado=1
  for(let i=num; i>0; i--){
    resultado*=i;
    console.log(num)
  }
  return resultado
};

console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
