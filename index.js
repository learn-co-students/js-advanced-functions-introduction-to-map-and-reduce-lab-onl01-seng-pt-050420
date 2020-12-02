// Your code here
var numbers = [-65, -44, -12, -4];

function mapMultiplier(sourceArray) {
    return function(multiplier)
    {return sourceArray.map(source => {
        return source * multiplier
    })}
}

function mapToNegativize(sourceArray){
    // return mapMultiplier(sourceArray)(-1)
    let negativeArray= [];

    sourceArray.forEach(source => {
     negativeArray.push(source * -1)
     });
     return negativeArray;
}

function mapToNoChange(sourceArray){
    // return sourceArray.map(source => {
    //     return source
    // })
    let sameArray= [];

    sourceArray.forEach(source => {
    sameArray.push(source )
     });
     return sameArray;   
}

function mapToDouble(sourceArray){
    // return mapMultiplier(sourceArray)(2)
    let doubleArray= [];

    sourceArray.forEach(source => {
    doubleArray.push(source * 2)
     });
     return doubleArray;
}   


function mapToSquare(sourceArray){
    // return sourceArray.map(source => {
    //     return source * source
    // })
    let squareArray= [];

    sourceArray.forEach(source => {
    squareArray.push(source * source)
     });
     return squareArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    sourceArray.forEach(source => {
        total = total + source
    }); 
    return total  
}

function reduceToAllTrue(sourceArray){
       for (const source of sourceArray) {
            if (!source) return false 
        };
   return true
 }

 function reduceToAnyTrue(sourceArray){
        for (const source of sourceArray) {
            if (source) return true 
        };
    return false
 }


console.log(reduceToAnyTrue(numbers))