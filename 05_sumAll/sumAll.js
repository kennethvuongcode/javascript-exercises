const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number")
        return "ERROR"; 

    if (num1 > num2){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    small = num1 - 1;

    sumLarge = (num2 * (num2 + 1)) / 2;
    sumSmall = (small * (small + 1)) / 2;

    return sumLarge - sumSmall;
};

// Do not edit below this line
module.exports = sumAll;
