const mapToNegativize = (arr) => {
    return arr.map(ele => ele * -1)
}

const mapToNoChange = (arr) => {
    return arr
}

const mapToDouble = (arr) => {
    return arr.map(ele => ele * 2)
}

const mapToSquare = (arr) => {
    return arr.map(ele => ele ** 2)
}

const reduceToTotal = (arr, initVal=0) => {
    return arr.reduce((total, amount) => total + amount, initVal)
}

const reduceToAllTrue = (arr) => {
    return arr.every(ele => ele ? true : false)
}

const reduceToAnyTrue = (arr) => {
    return arr.some(ele => ele === true)
}