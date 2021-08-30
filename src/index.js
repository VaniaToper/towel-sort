module.exports = function towelSort (matrix) {
  let arr2 = [];
  if (!matrix || matrix.length <= 0) {
      return [];
  } else {
      for (let i = 0; i < matrix.length; i++) {
          if (i % 2 === 1 && matrix.length > 1) {
              matrix[i].reverse()
          }
          for (let k = 0; k < matrix[i].length; k++) {
              arr2.push(matrix[i][k]);
          }
      }
      console.log(arr2);
      return arr2;
  }
}
