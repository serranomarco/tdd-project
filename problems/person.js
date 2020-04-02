module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
    visit(otherPerson) {
        return `${this.name} visited ${otherPerson.name}`;
    }

    switchVisit(otherPerson) {
        return otherPerson.visit(this);
    }

    update(obj) {
        if (typeof obj !== 'object') {
            throw new TypeError('The argument was not an object');
        }
        if (obj['name'] === undefined && obj['age'] === undefined) {
            throw new TypeError('The object does not contain an age or a name');
        }
        this.name = obj['name'];
        this.age = obj['age'];
        return this;
    }

    tryUpdate(obj) {
        try {
            this.update(obj);
        } catch (err) {
            return false;
        }
        return true;
    }
}
