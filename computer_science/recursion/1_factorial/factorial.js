const factorial = function(n) {
  if (n === 0) {
    return 1;
  } else if (typeof n !== "number" || n < 0 || !Number.isInteger(n)){
    return undefined;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;