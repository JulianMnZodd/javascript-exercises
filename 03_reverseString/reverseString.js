const reverseString = function(cad) {
    let value
    value= cad.split('')//convierte la cadena en un array
    value = value.reverse()// revierte el orden de los elementos del array
    value = value.join('')//une los elementos del array en una cadena
    return value;
};

// Do not edit below this line
module.exports = reverseString;
