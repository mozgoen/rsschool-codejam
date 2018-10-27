module.exports = function make() {
    let args = [].slice.call(arguments);

    let func = function () {
        let result = 0;

        if (typeof arguments[arguments.length - 1] === 'function') {
            result = args.reduce(function(sum, current) {
                return sum + current;
            }, 0);
        } else {
            let newArgs = [].slice.call(arguments);
            return make(...args.concat(newArgs));
        }

        return result;
    };

    return func;
};