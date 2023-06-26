// Number 1

function myEach(arr, callbackFn) {
    for (let i = 0; i < arr.length; i++) {
        callbackFn(arr[i]);
    }
}

// Number 2

function myMap(arr, callbackFn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = callbackFn(arr[i]);
    }
    return newArr;
}

// Number 3

function myFilter(arr, callbackFn) {
    const newArr = [];
    const index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i])) {
            newArr[index] = arr[i];
            index++;
        }
    }
    return newArr;
}

// Number 4

function mySome(arr, callbackFn) {
    for (let i = 0; i < arr.length; i++) {
        if(callbackFn(arr[i])) {
            return true;
        }
    }
    return false;
}

// Number 5

function myEvery(arr, callbackFn) {
    const hold = true;
    for (let i = 0; i < arr.length; i++) {
        if(hold && callbackFn(arr[i])) {
            hold = true;
        } else {
            hold = false;
        }
    }
    return hold;
}

// Number 6

function myReduce(arr, callbackFn, val) {
    let hold = val;
    for (let i = 0; i < arr.length; i++) {
        hold = callbackFn(hold, arr[i]);
    }
    return hold;
}

// Number 7

function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target)
            return true;
    }
    return false;
}

// Number 8

function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target)
            return i;
    }
    return -1;
}

// Number 9

function push(arr, target) {
    arr[arr.length] = target;
    return arr.length;
}

// Number 10

function myUnshift (arr, target) {
    for (let i = arr.length - 1; i >= 0; i++) {
        if (arr[i] == target)
            return i;
    }
    return -1;
}

// Number 11

function grabKeys(object) {
    let keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

// Number 12

function grabValues(object) {
    let values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}

// Miscellaneous

function sum(first, last) {
    let sum = 0;
    for (let i = first; i < last; i++) {
        sum += i;
    }
}

function reverse(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        let hold = arr[arr.length-(i+1)];
        arr[arr.length-(i+1)] = arr[i];
        arr[i] = hold;
    }
}