const pascal = function(n) {
  // Base Case
  if (n === 1) return [1];
  
  // Recursive Case
  const prevRow = pascal(n - 1) // returns the array of the previous row
  
  // We add a 0 at the beginning and the end so that 
  // the 1 remains at both extremes as the result of the sum of neighbors.
  const extendedRow = [0, ...prevRow, 0]
  const result = []
  
  for (let i = 0; i < extendedRow.length - 1; i++) {
    // sums the neighboring elements and adds them to the array.
    result.push(extendedRow[i] + extendedRow[i + 1]);
  }
  
  return result;
};
  
// Create a *recursive* function, `pascal` that will take an input `n` 
// and output the `n`th pascal's row as an array of numbers.
// For example, `pascal(3)` should return `[1, 2, 1]`.

// Do not edit below this line
module.exports = pascal;
