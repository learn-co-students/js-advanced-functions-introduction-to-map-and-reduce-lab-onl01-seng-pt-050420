// Your code here
const mapToNegativize = function(arr) {
    return arr.map(num => -num)
}

const mapToNoChange = function(arr) {
    return arr 
}

const mapToDouble = function(arr) {
    return arr.map(num => num *2)
}

const mapToSquare = function(arr) {
    return arr.map(num => num **2)
}

const reduceToTotal = function(arr, startingPoint=0) {
    return arr.reduce((total, num) => {
        return total + num 
    }, startingPoint)

    }


const reduceToAllTrue = function(arr) {
    return arr.reduce((bool, val) => {
        if (!val) {
            bool = false 
        }
        return bool 
    }, true)
}

const reduceToAnyTrue = function(arr) {
    return arr.reduce((bool, val) => {
        if (val) {
            bool = true 
        }
        return bool 
    }, false)
}