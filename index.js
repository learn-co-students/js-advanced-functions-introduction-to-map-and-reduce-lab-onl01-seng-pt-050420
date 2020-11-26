// Map-like methods
const mapToNegativize = function(sourceArray) {
  const newArray = sourceArray.map(x => x * -1);
  return newArray;
};

const mapToNoChange = function(sourceArray) {
  const newArray = sourceArray.map(x => x);
  return newArray;
};

const mapToDouble = function(sourceArray) {
  const newArray = sourceArray.map(x => x * 2);
  return newArray;
};

const mapToSquare = function(sourceArray) {
  const newArray = sourceArray.map(x => x ** 2);
  return newArray;
};

// Reduce-like methods
const reduceToTotal = function(sourceArray, startingPoint = 0) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return sourceArray.reduce(reducer, startingPoint);
};

const reduceToAllTrue = function(sourceArray) {
  const reducer = (accumulator, currentValue) => currentValue ? true : false;
  return sourceArray.reduce(reducer);
};

const reduceToAnyTrue = function(sourceArray) {
  const reducer = (accumulator, currentValue) => currentValue ? true : false;
  return sourceArray.reduce(reducer);
};