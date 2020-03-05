module.exports = class DepthCalculator { 
  calculateDepth(arr,depth=1) {
    for (let elem of arr) {
      if (elem instanceof Array) {
        return calculateDepth(arr.flat(1), ++depth);
      }
      else continue;
    }
    return depth;
  }
};