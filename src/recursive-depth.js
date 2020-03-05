module.exports = class DepthCalculator { 
            constructor() {
              this.depth = 1;
            }
            calculateDepth(arr) {
              for (let elem of arr) {
                if (elem instanceof Array) {
                  this.depth += 1;
                  this.calculateDepth(arr.flat(1));
                }
                else continue;
              }
              return this.depth;
            }
};