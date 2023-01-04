const palindromes = function (str) {
    str = str.replace(/\s+/g, '');
    let palCheck = filterNormalChar(str.split(''));

    for (let i = 0; i < (palCheck.length/2) + 1; i++) {
        if (palCheck[i] != palCheck[(palCheck.length-i)-1])
            return false;
    }
    return true;
};

function filterNormalChar(array) {
    for (let i = 0; i < array.length; i++) {
        if (isLetter(array[i]) == false)
            array.splice(i,1);
    }

    array = array.join('');
    array = array.toLowerCase();

    return array;
} 



function isLetter(str) {
    if (str.length === 1 && str.match(/[a-z]/i)) {
        return true;
    }     
    
    return false;  
}

// Do not edit below this line
module.exports = palindromes;
