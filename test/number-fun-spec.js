const chai = require('chai');
const spies = require('chai-spies');
const assert = require('assert');
const { returnsThree, reciprocal } = require('../problems/number-fun')
const expect = chai.expect;
chai.use(spies);

describe('returnsThree() function', () => {
    it('should return a three', () => {
        assert.strictEqual(returnsThree(), 3);
    });
});

describe('reciprocal() function', () => {
    context('when it is a valid number between 1 and 1000000', () => {
        it('should return a reciprocal', () => {
            assert.strictEqual(reciprocal(3), 1 / 3);
            assert.strictEqual(reciprocal(9 / 4), 4 / 9);
            assert.strictEqual(reciprocal(7), 1 / 7);
        })
    })

    context('when it is an invalid number', () => {
        it('should return a TypeError', () => {
            assert.throws(() => {
                reciprocal(0);
                reciprocal(-5);
                reciprocal(1000001);

            },
                TypeError);
        });
    });
});
