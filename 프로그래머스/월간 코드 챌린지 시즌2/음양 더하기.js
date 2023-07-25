function solution(absolutes, signs) {
  absolutes
    .map((el, idx) => {
      if (!signs[idx]) {
        return -el;
      }
      return el;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
}
