const repeatString = function(string,num) {
    let value;
    if(num<0){
        value='ERROR'
    }
    else{
        value= string.repeat(num);
    }

    return value;
};

// Do not edit below this line
module.exports = repeatString;
