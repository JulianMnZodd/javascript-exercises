const removeFromArray = function(...arguments) {
    const array = arguments[0]
    return array.filter(item => !arguments.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
