let sourceArray = [1,2,3]
let startingPoint = 100

function mapToNegativize(sourceArray) {

  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(-1 * sourceArray[i])  
  } 
  return r
}

mapToNegativize()

function mapToNoChange(sourceArray) {
    
    const  newArray = sourceArray.map (x => x );

    return newArray
    
    //console.log(newArray)
}


function mapToDouble(sourceArray) {
    
    const  newArray = sourceArray.map (x => x * 2);

    return newArray
    
    //console.log(newArray)
}

function mapToSquare(sourceArray) {
    
    const  newArray = sourceArray.map (x => x * x);

    return newArray
    
    //console.log(newArray)
}


function reduceToTotal(sourceArray, startingPoint) {

    let sum = sourceArray.reduce(function (accumulator, currentValue){
    return accumulator + currentValue}, startingPoint)
    
return sum

}

reduceToTotal()


function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  

  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }