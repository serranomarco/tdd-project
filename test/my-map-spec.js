const chai = require('chai');
const spies = require('chai-spies');
const assert = require('assert');
const myMap = require('../problems/my-map')
const expect = chai.expect;
chai.use(spies);

describe('myMap() function', () => {

    let inputArray;
    let callback;
    beforeEach(() => {
        inputArray = [1, 2, 3];
        callback = el => el * 2;

    })
    it('should act like the Array#Map method', () => {
        const expectedArray = [2, 4, 6];
        expect(myMap(inputArray, callback)).to.deep.equal(expectedArray);
    })
    it('should not mutate the passed-in argument', () => {
        const unmutatedArray = [1, 2, 3];
        myMap(inputArray, callback);
        expect(inputArray).to.deep.equal(unmutatedArray);
    })
    it('should not call the map method', () => {
        const mapSpy = chai.spy.on(inputArray, 'map');
        myMap(inputArray, callback);
        expect(mapSpy).to.not.have.been.called();
    })
    it('should invoke callback once for each element in array', () => {
        const cbSpy = chai.spy(callback);
        myMap(inputArray, cbSpy);
        expect(cbSpy).to.have.been.called.exactly(3);
    })
})
