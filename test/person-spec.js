const chai = require('chai');
const spies = require('chai-spies');
const assert = require('assert');
const Person = require('../problems/person.js');
const expect = chai.expect;
chai.use(spies);

describe('Person() class', () => {
    let person;
    let otherPerson;
    let name = 'Alice';
    let age = 42;
    let otherName = 'Bob';
    let otherAge = 64;

    beforeEach(() => {
        person = new Person(name, age);
        otherPerson = new Person(otherName, otherAge);
    });
    describe('constructor() function', () => {
        it('should create an instance', () => {
            expect(person).to.be.an.instanceOf(Person);
        });
        it('should set the name and age properties', () => {
            expect(person.name).to.equal(name);
            expect(person.age).to.equal(age);
        });
    });
    describe('prototype.sayHello() method', () => {
        it('should return a string with the person\'s name and a greeting', () => {
            expect(person.sayHello()).to.equal(`Hello ${person.name}`);
        });
    });
    describe('prototype.visit(otherPerson)', () => {
        it('should return a string stating that this instance visited the passed in person instance', () => {
            expect(person.visit(otherPerson)).to.equal(`${person.name} visited ${otherPerson.name}`);
        });
    });
    describe('prototype.switchVisit(otherPerson)', () => {
        it('should invoke visit function passing in current instance as argument', () => {
            const visitSpy = chai.spy.on(otherPerson, 'visit');
            person.switchVisit(otherPerson);
            expect(visitSpy).to.have.been.called.once;
        });
    });

    describe('prototype.update(obj)', () => {
        context('If the argument is valid', () => {
            it('should update the instance properties', () => {
                const expectedProperties = new Person('mai', 32);
                expect(person.update({ name: 'mai', age: 32 })).to.deep.equal(expectedProperties)
            });
        });

        context('If the argument is invalid', () => {
            it('should throw a TypeError', () => {
                expect(() => person.update(1)).to.throw(TypeError);
                expect(() => person.update({ height: '5\'9' })).to.throw(TypeError);
            });

        });
    });

    describe('prototype.tryUpdate(obj)', () => {
        context('If prototype.update(obj) was successful', () => {
            it('should return true', () => {
                const newName = 'Nick';
                const newAge = 35;
                expect(person.tryUpdate({ name: newName, age: newAge })).to.be.true;
            });
        });

        context('If prototype.update(obj) was unsuccessful', () => {
            it('should return false', () => {
                expect(person.tryUpdate(1)).to.be.false;
            });
        });
    });

});
