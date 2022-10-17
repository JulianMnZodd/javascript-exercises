const leapYears = function(anio) {
    return anio % 4 === 0 && ( anio % 100 !== 0 || anio % 400 === 0)

};

// Do not edit below this line
module.exports = leapYears;
