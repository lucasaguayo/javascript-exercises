// checks if the value given is an object.
const isObject = (value) => typeof value === "object" && value !== null;

const totalIntegers = function(input) {
  let count = 0;

  if (!isObject(input)) return undefined;

  const elements = Object.values(input)
  
  for (const element of elements) {
    if (Number.isInteger(element)) {
      count++;
    } else if (isObject(element)) {
      count += totalIntegers(element)
    };
  }

  return count;
};
  
// totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
// totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4

// Do not edit below this line
module.exports = totalIntegers;
