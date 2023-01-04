const add = function(x,y) {
  return x + y;
};

const subtract = function(x,y) {
  return x - y;
};

const sum = function(array) {
	return array.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function(array) {
	return array.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function(x,y) {
	return x ** y;
};

const factorial = function(x) {
	if (x == 0) return 1;
  let counter = x;

  while (x > 1){
    x--;
    counter *= x;
  }

  return counter;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
