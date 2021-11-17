const grayCode = (n) => {
  const subsequence = new Array(n + 1).fill(0);
  const result = [];
  let j = null;
  while (j !== n) {
    result.push(subsequence.slice(0, -1).reverse().join(''));
    subsequence[n] = 1 - subsequence[n];
    j = subsequence[n] === 1 ? 0 : subsequence.findIndex(number => number === 1) + 1;
    subsequence[j] = 1 - subsequence[j];
  }
  return result;
}

const result = grayCode(4);
console.log(result)
