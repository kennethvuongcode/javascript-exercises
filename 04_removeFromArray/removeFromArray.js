const removeFromArray = function() {
    let array = arguments[0]                                    //initializing a variable titled array for ease of reading

    for (let i = 1; i < arguments.length; i++) {                //running through all arguments in function
        for (let k = 0; k < array.length; k++)                  //comparing a given argument to all values in array
            if (array[k] === arguments[i])                      //if argument matches an array element, remove (splice) it out
                array.splice(k,1);
    }

    return array;                                               //return array 
};

// Do not edit below this line
module.exports = removeFromArray;
