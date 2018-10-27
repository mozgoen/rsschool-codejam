module.exports = function make() {
    let args = [].slice.call(arguments);

    let func = function () {
        let result = 0;
        let lastElem = arguments[arguments.length - 1];

        if (typeof lastElem === 'function') {
            result = args.reduce(lastElem, 0);
        } else {
            let newArgs = [].slice.call(arguments);
            return make(...args.concat(newArgs));
        }

        return result;
    };

    return func;
};