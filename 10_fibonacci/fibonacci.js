const fibonacci = function(pos) {
    pos = Number(pos);

    let previous = 0;
    let holder;
    let next = 1;

    
    if (pos < 0)
        return 'OOPS';

    for (let i = 0; i < pos-1; i++) {
        holder = next;
        next = next + previous;
        previous = holder;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
