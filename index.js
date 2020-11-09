// Your code here

function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1);
};

function mapToNoChange(arr) {
    return arr.map(num => num);
};

function mapToDouble(arr) {
    return arr.map(num => num * 2);
};

function mapToSquare(arr) {
    return arr.map(num => num * num);
};

function reduceToTotal(arr, start=0) {
    return arr.reduce(function(total, current) {
        return total + current;
    }, start);
};

function reduceToAllTrue(arr) {
    return arr.reduce(function(result, value) {
        return result && !!value;
    }, true);
};

function reduceToAnyTrue(arr) {
    return arr.reduce(function(result, value) {
        return result || !!value;
    }, false);
};
