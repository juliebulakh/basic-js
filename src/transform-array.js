module.exports = function transform(arr) {
        if (Array.isArray(arr)) {
          for (let i = 0 ; i < arr.length; i++) {
            switch (arr[i]) {
              case "--discard-next": arr.splice(i, 2); break;
              case "--discard-prev": arr.splice(i - 1, 2); break;
              case "--double-next": arr.splice(i, 1, arr[i + 1]); break;
              case "--double-prev": arr.splice(i, 1, arr[i - 1]); break;
            }
          }
        }
        else { return false; }
      
        return arr;
};
