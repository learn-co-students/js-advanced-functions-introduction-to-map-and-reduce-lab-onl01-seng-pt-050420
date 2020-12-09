// Your code here

const mapToNegativize = function(source) {
  let negNum = [];
  for(let i = 0; i < source.length; i++) {
    negNum.push(-1 * source[i]);
  }
  return negNum;
}

const mapToNoChange = function(source) {
  let num = [];
  for(let i = 0; i < source.length; i++) {
    num.push(source[i]);
  }
  return num;
}

const mapToDouble = function(source) {
  let doubleNum = [];
  for(let i = 0; i < source.length; i ++) {
    doubleNum.push(2 * source[i]);
  }
  return doubleNum;
}

const mapToSquare = function(source) {
  let squaredNum = [];
  for(let i = 0; i < source.length; i++) {
    squaredNum.push(source[i] * source[i]);
  }
  return squaredNum;
}

const reduceToTotal = function(source, start = 0) {
    let total = start;
    for(let i = 0; i < source.length; i++) {
      total = total + source[i];
    }
    return total;
}

const reduceToAllTrue = function(source) {
  for(let i = 0; i < source.length; i++) {
    if (!source[i]) return false
  }
  return true
}

const reduceToAnyTrue = function(source) {
  for(let i = 0; i < source.length; i++) {
    if (source[i]) return true
  }
  return false
}













