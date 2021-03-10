/**
 * Realization of Levenshtein distance algorithm
 * @param {string} firstString - source string
 * @param {string} secondString - comparing string
 * @return {number} - Levenshtein distance
 */
function levenshteinDistance(firstString, secondString) {
  const firstStrLength = firstString.length;
  const secondStrLength = secondString.length;

  if (!firstStrLength) {
    return secondStrLength;
  }

  if (!secondStrLength) {
    return firstStrLength;
  }

  const matrix = [];
  for (let i = 0; i <= firstStrLength; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= secondStrLength; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= firstStrLength; i++) {
    for (let j = 1; j <= secondStrLength; j++) {
      if (firstString.charAt(i - 1) === secondString.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, /** substitution */
          Math.min(
            matrix[i][j - 1] + 1, /** insertion */
            matrix[i - 1][j] + 1 /** deletion */
          )
        );
      }
    }
  }

  return matrix[firstStrLength][secondStrLength];
}

console.log(levenshteinDistance('helli', 'elli'));