
module.exports = function reverseString(string) {
    const array = string.split('');
    const newString = array.reverse().join('');
    return newString;
}
