module.exports = function sumOfOther(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let sum = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (j !== i) {
        sum += arr[j];
      }
    }
    result.push(sum);
  }
  return result;
};
