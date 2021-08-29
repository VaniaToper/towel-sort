
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [[1,2,3],[4,5,6],[7,8,9]]
  let arr2 = []
    for (let i = 0; i<arr[0].length; i++){
        for (let k = 0; k<arr[0].length; k++)
            arr2.push(arr[i][k])
        }
    }
    return arr2.sort((a,b)=> a-b)
}
