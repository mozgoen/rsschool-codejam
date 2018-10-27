const assert = require('assert');
const mocha = require('mocha');
const sumOfOther = require('./sumOfOther.js');

const { describe, it } = mocha;

describe('sumOfOther', () => {
  it('First', () => {
    const sum = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(sum, [8, 7, 6, 9]);
  });

  it('Second', () => {
    const sum = sumOfOther([2, 3]);
    assert.deepEqual(sum, [3, 2]);
  });

  it('Third', () => {
    const sum = sumOfOther([0]);
    assert.deepEqual(sum, [0]);
  });

  it('Negative', () => {
    const sum = sumOfOther([-1, -5, -3]);
    assert.deepEqual(sum, [-8, -4, -6]);
  });

  it('Long array', () => {
    const sum = sumOfOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    assert.deepEqual(sum,
      [119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105]);
  });
});


const make = require('./make.js');

const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const division = (a, b) => a / b;
const pow = (a, b) => a ** b;

describe('make', () => {
  it('Base', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });

  it('Simple sum', () => {
    const result = make(1)(2)(sum);
    assert.deepEqual(result, 3);
  });

  it('Second sum', () => {
    const result = make(1)(2, 3)(4)(sum);
    assert.deepEqual(result, 10);
  });

  it('Third sum', () => {
    const result = make(5, 1)(2, 3)(4)(sum);
    assert.deepEqual(result, 15);
  });

  it('Subtraction', () => {
    const result = make(100, 10)(10, 10, 10)(10, 10, 10)(subtraction);
    assert.deepEqual(result, 30);
  });

  it('Pow', () => {
    const result = make(2)(1)(3)(pow);
    assert.deepEqual(result, 8);
  });

  it('Division', () => {
    const result = make(8)(2, 2)(division);
    assert.deepEqual(result, 2);
  });
});


const recursion = require('./recursion.js');

describe('recursion', () => {
  it('First', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const array = recursion(tree);
    assert.deepEqual(array, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('Second', () => {
    const tree = {
      value: 10,
      left: { value: 9, left: { value: 7 }, right: { value: 9 } },
      right: { value: 12, left: { value: 11 }, right: { value: 13 } },
    };
    const array = recursion(tree);
    assert.deepEqual(array, [[10], [9, 12], [7, 9, 11, 13]]);
  });

  it('Three', () => {
    const tree = {
      value: 0,
      left: { value: 0, left: { value: 0 }, right: { value: 0 } },
      right: { value: 0, left: { value: 0 }, right: { value: 0 } },
    };
    const array = recursion(tree);
    assert.deepEqual(array, [[0], [0, 0], [0, 0, 0, 0]]);
  });
});
