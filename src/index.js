
module.exports = function towelSort (matrix) {
  return matrix == undefined || matrix.length == 0 ? [] : matrix.map((element, index) => {
    return index % 2 !== 0 ? element.reverse() : element;
  }).flat();
}
