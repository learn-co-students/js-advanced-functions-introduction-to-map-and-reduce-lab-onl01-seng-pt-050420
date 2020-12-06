// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(el => el * (-1))
}

function mapToNoChange(sourceArray){
    return sourceArray.map(el => el)
}

function mapToDouble(sourceArray){
    return sourceArray.map(el => el * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(el => el * el)
}

function reduceToTotal(sourceArray, startingPoint){

 if (startingPoint){
   return sourceArray.reduce(function(total, element){
       return element + total
   }, startingPoint) 
} else {
    return sourceArray.reduce(function(total, element){
        return element + total
    }) 
}}

function reduceToAllTrue(sourceArray){
    return sourceArray.reduce(function(value, element){
        if(!!value == true && !!element == true){
            return true;
        } else {
            return false;
        }
    })
}
function reduceToAnyTrue(sourceArray){
    return sourceArray.reduce(function(value, element){
        if(!!value == true || !!element == true){
            return true;
        } else {
            return false;
        }
    })
}
