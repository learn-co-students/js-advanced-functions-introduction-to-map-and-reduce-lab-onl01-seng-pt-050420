let numbers = [1, 9 ,-4, 4]

function mapToNegativize(arr) {
    let negatives = [];

    for(const num of arr){
        let changeNumber = -num;
        negatives.push(changeNumber);
    };

    return negatives;
};

function mapToNoChange(arr) {
    let newArr = [];

    for(const elem of arr){
        newArr.push(elem);
    };

    return newArr;
};

function mapToDouble(arr) {
    let doubled = [];

    for(const value of arr){
        let double = value * 2;
        doubled.push(double);
    };

    return doubled;
};

function mapToSquare(arr) {
    let squared = [];

    for(const value of arr) {
        let s = value * value;
        squared.push(s);
    };

    return squared;
};

function reduceToTotal(arr, start = 0){
    let total = start;  
    
    for (const value of arr){
        total = total + value;
    };

    return total;
};

function reduceToAllTrue(arr){
    for (const ele of arr){
        if (!ele) return false;
    };
    return true;
};

function reduceToAnyTrue(arr){
    for (const ele of arr){
        if (ele) return true;
    };
    return false;
};