module.exports = function(arr1, arr2) {
  var interArr = [];
  arr2.forEach(function(el, ind, arr) {
    if (arr1.some(function(elem, ind, arr) {
      return elem === el;
    })) {
      interArr.push(el);
    }
  });
  return interArr;
};
