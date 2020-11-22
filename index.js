function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach(a => {
        newArray.push(a * -1)
    })
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = sourceArray
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    sourceArray.forEach(a => {
        newArray.push(a * 2)
    })
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    sourceArray.forEach(a => {
        newArray.push(a * a)
    })
    return newArray
}

function reduceToTotal(array, agg = 0) {
    array.forEach(a => {
        agg += a
    });
    return agg
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(source) {
    for (let i = 0; i < source.length; i++) {
        if (source[i]) return true
    }
    return false
}