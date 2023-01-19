function solution(s) {
  let removeZeroCnt = 0;
  let depth = 0;
  let result;

  const recursion = (depth, removeZeroCnt, str) => {
    if (str === "1") {
      result = [depth, removeZeroCnt];
      return;
    }
    const removed = [...str].filter((el) => {
      if (el !== "0") {
        return true;
      } else {
        removeZeroCnt++;
      }
    });

    const next = removed.length.toString(2);

    recursion(depth + 1, removeZeroCnt, next);
  };

  recursion(depth, removeZeroCnt, s);

  console.log(result);

  return result;
}

solution("11");
