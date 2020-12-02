// MAP
function mapToNegativize(sourceArray) {
  let negative = []
  for (let i = 0; i < sourceArray.length; i++) {
    negative.push(-1*sourceArray[i])
  }
  return negative
}

function mapToNoChange(sourceArray) {
  let norm = []
  for (let i = 0; i < sourceArray.length; i++) {
    norm.push(sourceArray[i])
  }
  return norm 
}

function mapToDouble(sourceArray){
  let double = []
  for (let i = 0; i < sourceArray.length; i++) {
    double.push(2*sourceArray[i])
  }
  return double 
}

function mapToSquare(sourceArray){
    let square = []
    for (let i = 0; i < sourceArray.length; i++) {
      square.push(sourceArray[i]*sourceArray[i])
    }
    return square 
  }

// REDUCE
function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++) {
    total = total+sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false
  }
    return true 
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
      if (sourceArray[i]) return true
    }
      return false 
  } 