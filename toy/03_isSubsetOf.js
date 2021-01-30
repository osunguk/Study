const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  let maxBase = base[base.length - 1];
  here: for (s of sample) {
    if (s > maxBase) return false;
    for (let i = 0; i < base.length; i++) {
      if (base[i] < s) {
        base.shift();
        i--;
        continue;
      }
      if (base[i] === s) {
        continue here;
      }
      if (base[i] > s) {
        return false;
      }
    }
  }
  return true;
};
