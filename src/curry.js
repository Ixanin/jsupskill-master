module.exports = function curry(originalFn) {
    return function curried(...outerArgs) {
        if (outerArgs.length < originalFn.length) {
            return function (...innerArgs) {
                return curried(...outerArgs.concat(innerArgs))
            }
        } else {
            return originalFn(...outerArgs)
        }
    };
};


