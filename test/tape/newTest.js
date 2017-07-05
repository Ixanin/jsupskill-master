var test = require('tape');
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

test('allows to create new objects', function (t) {
    var p1 = new Person('Jack');
    var p2 = new AnotherPerson('Kate'); // it's a function constructor call
    var p3 = new NullPerson('Jack');

    t.equal(p1.sayHi(), 'Hi, I am Jack');
    t.deepEqual(p2, {});
    t.ok(p3 instanceof NullPerson);

    t.end();
});

test('allows to create new objects - own implementation - happy path', function (t) {
    var p1 = NEW(Person, ['Jack']);

    t.equal(p1.sayHi(), 'Hi, I am Jack');

    t.end();
});

test.skip('allows to create new objects - own implementation - constructor fn returns object', function (t) {
    var p2 = NEW(AnotherPerson, ['Jack']);

    t.deepEqual(p2, {});

    t.end();
});

test.skip('allows to create new objects - own implementation - constructor function returns primitive value', function (t) {
    var p3 = NEW(NullPerson, ['Jack']);

    t.ok(p3 instanceof NullPerson);

    t.end();
});