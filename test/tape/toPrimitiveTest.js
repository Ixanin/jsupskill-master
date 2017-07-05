var test = require('tape');
var Primitive = require('../../src/toPrimitive');

test('converts primitive input type', function (t) {
    t.strictEqual(Primitive(1), 1);
    t.strictEqual(Primitive('a'), 'a');
    t.strictEqual(Primitive(null), null);

    t.end();
});

test('converts object with valueOf happy path', function (t) {
    var o = {
        valueOf: function() {
            return 1;
        },
        toString: function() {
            return '1';
        }
    };

    t.strictEqual(Primitive(o), 1);

    t.end();
});

test.skip('converts object with valueOf unhappy path', function (t) {
    var o = {
        valueOf: function() {
            return {};
        },
        toString: function() {
            return '1';
        }
    };

    t.strictEqual(Primitive(o), '1');

    t.end();
});


test.skip('fails on inconvertible input', function (t) {
    var o = {
        toString: function() {
            return {a: new Date()};
        },
        valueOf: function() {
            return {};
        }
    };

    t.throws(() => {
        Primitive(o);
    }, /input cannot be converted to primitive/);

    t.end();
});