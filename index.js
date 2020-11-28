function mapToNegativize(originalArray) {
    return originalArray.map(x => x * -1);
}

function mapToNoChange(originalArray) {
    return originalArray.map(x => x);
}

function mapToDouble(originalArray) {
    return originalArray.map(x => x * 2);
}

function mapToSquare(originalArray) {
    return originalArray.map(x => x*x);
}

function reduceToTotal(originalArray, startPoint = 0) {
    const reducer = function(accumulator, currentValue) {
        return accumulator + currentValue
    }
    return originalArray.reduce(reducer, startPoint)
}

function reduceToAllTrue(originalArray) {
    const reducer = function(accumulator, currentValue) {
        if(!!accumulator == true && !!currentValue == true) {
            return true;
        }
        else {
            return false;
        }
    }
    return originalArray.reduce(reducer, true)
}

function reduceToAnyTrue(originalArray){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return originalArray.reduce(reducer, false)
} 