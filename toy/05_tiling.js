let tiling = function (n) {
  let cnt = 0;
  let count = 0;
  let solution = [1, 2];

  // 남은 길이 넘겨준다
  const jegwi = function (len) {
    console.log(len);
    console.log(++count);
    console.log(solution);
    console.log(cnt);
    // if (len === 2) {
    //   cnt += 2;
    //   return;
    // }
    // if (len === 1) {
    //   cnt++;
    //   return;
    // }
    if (solution[len - 1] === undefined) {
      jegwi(len - 1);
      jegwi(len - 2);
      solution[len - 1] = cnt;
    } else {
      cnt += solution[len - 1];
    }
  };

  jegwi(n);
  console.log(solution);
  return cnt;
};

console.log(tiling(15));
