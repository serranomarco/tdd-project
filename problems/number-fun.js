module.exports = {
    returnsThree,
    reciprocal
};

function returnsThree() {
    return 3;
}

function reciprocal(num) {
    if (num >= 1 && num <= 1000000) {
        return 1 / num;
    } else {
        throw new TypeError('Choose a number between 1 and 1000000!!!');
    }
}
