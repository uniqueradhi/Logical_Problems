function multiply(matrix1, matrix2) {
  const r1 = matrix1.length;
  const c1 = matrix1[0].length;
  const r2 = matrix2.length;
  const c2 = matrix2[0].length;

  if (c1 !== r2) {
    console.log("canot able to multiply");
  }

  const result = new Array(r1);
  for (let i = 0; i < r1; i++) {
    result[i] = new Array(c2).fill(0);
    //initially the new matrix value as 0
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}
const matrix1 = [[2, 3], [4, 5]];
const matrix2 = [[1, 2]];

const resultMatrix = multiply(matrix1, matrix2);
console.log("Multiplied Matrix:");
console.log(resultMatrix);
