module.exports = function recursion(obj, depth = 0, resultFirst = []) {
  const result = resultFirst;

  if (!result[depth]) {
    result[depth] = [];
  }

  if (obj.left) {
    recursion(obj.left, depth + 1, result);
  }

  if (obj.right) {
    recursion(obj.right, depth + 1, result);
  }

  result[depth].push(obj.value);

  return result;
};
