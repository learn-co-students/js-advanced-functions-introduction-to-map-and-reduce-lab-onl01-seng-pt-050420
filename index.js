// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(number => number *= -1)
}

function mapToNoChange(sourceArray){ 
    return sourceArray.map(number => number = number)
}

function mapToDouble(sourceArray){
    return sourceArray.map(number => number * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(number => number ** 2)
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce(function(total, current){
        return total + current
    }, startingPoint)
}

function reduceToAllTrue(sourceArray){
    return sourceArray.reduce(function(result, value){
        return result && !!value;
    }, true);
};

function reduceToAnyTrue(arr) {
    return arr.reduce(function(result, value) {
        return result || !!value;
    }, false);
};