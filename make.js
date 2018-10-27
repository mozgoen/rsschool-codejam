module.exports = function make(...argsFirst) {
  const args = [].slice.call(argsFirst);

  return (...argsBase) => {
    let result;
    const lastElem = argsBase[argsBase.length - 1];

    if (typeof lastElem === 'function') {
      result = args.reduce(lastElem);
    } else {
      const newArgs = [].slice.call(argsBase);
      return make(...args.concat(newArgs));
    }

    return result;
  };
};
