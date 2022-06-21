const arrays = [[1, 4], [11], [3, 5, 7]];

const findSum = (array) => {
  let sum = 0;
  for (x of array) {
    for (y of x) {
      sum += y;
    }
  }
  return sum;
};
console.log(findSum(arrays));

const sumArray = (arrays) =>
  arrays.reduce((x, y) => x.concat(y)).reduce((x, y) => x + y);

console.log(sumArray(arrays));

//result should be 31
