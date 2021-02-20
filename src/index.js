exports.min = function min (array) {
  if (Array.isArray(array) && array.length) {
    let minElem = array[0];
    for(let i of array) {
      if (i < minElem) {minElem = i}
    }
    return minElem;
  } else return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    let maxElem = array[0];
    for(let i of array) {
      if (i > maxElem) {maxElem = i}
    }
    return maxElem;
  } else return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    return ((array.reduce((sum,current) => sum + current, 0))/(array.length))
  } else return 0;
}