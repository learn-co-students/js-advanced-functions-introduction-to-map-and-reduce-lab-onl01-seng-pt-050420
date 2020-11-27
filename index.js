function mapToNegativize(arr) {
    let newArr = []
    arr.forEach(i => {
        newArr.push(i * -1)
    })
    return newArr
}

function mapToNoChange(arr) {
    let newArr = arr
    return newArr
}

function mapToDouble(arr) {
    let newArr = []
    arr.forEach(i => {
        newArr.push(i * 2)
    })
    return newArr
}

function mapToSquare(arr) {
    let newArr = []
    arr.forEach(i => {
        newArr.push(i ** 2)
    })
    return newArr
}

function reduceToTotal(arr, agg = 0) {
    arr.forEach(a => {
        agg += a
    });
    return agg
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) return true
    }
    return false
} 