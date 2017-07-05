function isObject(value) {
    return (value !== null) &&
        ((typeof value === 'object') ||
        (typeof value === 'function'));
}



module.exports = function NEW(constructor, args) {
    // TODO: your code goes here
    var obj = {};
    obj.__proto__ = constructor.prototype;
    var retVal = constructor.apply(obj, args);
    if (isObject(retVal))  return retVal.constructor; else {
        return obj;
    }
};
