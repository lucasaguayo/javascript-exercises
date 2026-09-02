const contains = function(object, searchedValue) {
  const values = Object.values(object);
  if (values.includes(searchedValue)) return true; // *

  // creates a new array, from the given object,
  // only with the values that are objects as well.
  const nestedObjects = values.filter((value) =>
    typeof value === "object" && value !== null
  );

  // if there are no nested objects 
  // some returns false (because the array is empty). 
  return nestedObjects.some((nestedObject) => 
    // calling the contains function again works just as a
    // condition, it returns true if value is founded. (*)
    contains(nestedObject, searchedValue)
  );
};

// Examples:
// contains({ foo: "foo" }, "bar") // false
// contains({ foo: { bar: "bar" } }, "bar") // true
  
// Do not edit below this line
module.exports = contains;
