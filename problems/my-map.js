module.exports = function myMap(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(cb(arr[i], i, arr));
    }
    return newArray;
}
