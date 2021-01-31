let tiling = function (n) {
  let cnt = 0;
  let count = 0;
  let solution = [1, 2];

  // 남은 길이 넘겨준다
  const jegwi = function (len) {
    console.log(++count);
    if (len === 2) {
      cnt += 2;
      return;
    }
    if (len === 1) {
      cnt++;
      return;
    }

    jegwi(len - 1);
    jegwi(len - 2);
  };

  jegwi(n);
  return cnt;
};

console.log(tiling(5));
