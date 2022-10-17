const sumAll = function(num1,num2) {    
    if((num1||num2)<0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR'
    }
    else{
        if(num1>num2){//works with larger number first
            let aux=num2
            num2=num1
            num1=aux
        }
        let suma=0
        for(let i=num1;i<num2+1;i++){//sums numbers within the range,works with large numbers
            suma+=i
        }
        return suma
    }
};

// Do not edit below this line
module.exports = sumAll;
