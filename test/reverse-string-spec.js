const chai = require('chai');
const spies = require('chai-spies');
const assert = require('assert');
const reverseString = require('../problems/reverse-string.js');
const expect = chai.expect;
chai.use(spies);

describe('reverseString() function', () => {
    it('should return the reverse of the string', () => {
        //Arrange
        const expectedString = 'nuf'
        const string = 'fun'
        //Act

        //Assert
        expect(reverseString(string)).to.equal(expectedString);
    })
    it('should throw an error when passed a non string value', () => {
        const expectedString = 'nuf'
        assert.throws(() => {
            reverseString(1234)
        },
            TypeError
        );
    });
});
