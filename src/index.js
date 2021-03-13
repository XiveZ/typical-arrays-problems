
exports.min = function min (array) {
  if (array == undefined || min(undefined)|| array.length == 0) return 0;
  return (Math.min(...array))
}

exports.max = function max (array) {
  if (array == undefined || max(undefined)|| array.length == 0) return 0;
  return (Math.max(...array))
}

exports.avg = function avg (array) {
  if (array == undefined || avg(undefined)|| array.length == 0) return 0;
  let k = array.reduce(function(a,b){ return a+b},0) / array.length;
  return k
}
