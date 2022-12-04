const repeatString = function(string, number) {
    if (number < 0) return "ERROR";
    
    let holder = string;
    string = '';
    for (let i = 0; i < number; i++){
        string += holder;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
