const permutations = function(array) {
  const result = [];

  // Base Case.
  if (array.length === 0 || array.length === 1) return [array]

  // Recursive Case.
  for (let i = 0; i < array.length; i++) {
    // gets the current element of the array (starting with the first).
    const currentElement = array[i];
    // places the remaining elements into another array.
    const remaining = array.filter((_, index) => index !== i); 

    // calls the permutations function recursively with the remaining array,
    // and subPermutations ends up being an array with the result of permutations.
    const subPermutations = permutations(remaining);

    // for each combination (array) that subPermutations has:
    for (const permutation of subPermutations) {
      // pushes the combination of the current element with the elements
      // of the permutation obtained, wrapping it into a new array.
      result.push([currentElement, ...permutation])
    }
  }

  return result;
};

// permutations([1, 2, 3]); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// permutations([]); // [[]] An empty set has a single permutation, 0! = 1

  
// Do not edit below this line
module.exports = permutations;
