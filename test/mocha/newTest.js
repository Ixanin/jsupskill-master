var assert = require('assert');
var NEW = require('../../src/new');

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    return 'Hi, I am ' + this.name;
};

function AnotherPerson(name) {
    this.name = name;
    return {}; // it has to be an object, not primitive value
}

function NullPerson(name) {
    this.name = name;
    return null; // it has to be an object, not primitive value
}

describe('NEW', function () {
    it('allows to create new objects', function () {
        var p1 = new Person('Jack');
        var p2 = new AnotherPerson('Kate'); // it's a function constructor call
        var p3 = new NullPerson('Jack');

        assert.equal(p1.sayHi(), 'Hi, I am Jack');
        assert.deepEqual(p2, {});
        assert.ok(p3 instanceof NullPerson);
    });

    it.skip('allows to create new objects - own implementation - happy path', function () {
        var p1 = NEW(Person, ['Jack']);

        assert.equal(p1.sayHi(), 'Hi, I am Jack');
    });

    it.skip('allows to create new objects - own implementation - constructor fn returns object', function () {
        var p2 = NEW(AnotherPerson, ['Jack']);

        assert.deepEqual(p2, {});
    });

    it.skip('allows to create new objects - own implementation - constructor function returns primitive value', function () {
        var p3 = NEW(NullPerson, ['Jack']);

        assert.ok(p3 instanceof NullPerson);
    });

});