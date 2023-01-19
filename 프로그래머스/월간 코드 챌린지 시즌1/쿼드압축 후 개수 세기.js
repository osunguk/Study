function solution(arr) {
  const dic = { 0: 0, 1: 0 };
  const size = arr.length;

  const recursion = (size, arr) => {
    if (size === 1) {
      dic[arr[0][0]]++;

      return;
    }
    const compareValue = size * size;
    const zero = 0;

    if (sumArr(arr) === compareValue) {
      dic[1]++;
      return;
    }
    if (sumArr(arr) === zero) {
      dic[0]++;
      return;
    }

    const halfSize = size / 2;

    const splited = splitArr(arr, halfSize);

    for (s of splited) {
      recursion(halfSize, s);
    }
  };

  recursion(size, arr);

  return [dic[0], dic[1]];
}

const sumArr = (arr) => {
  return arr.reduce((acc, cur) => {
    let sum = 0;
    for (i of cur) {
      sum += i;
    }
    return acc + sum;
  }, 0);
};

const splitArr = (arr, size) => {
  const split = (arr) => {
    return arr.reduce(
      (acc, cur, idx) => {
        const s = cur.splice(size);
        acc[0].push(cur);
        acc[1].push(s);
        return acc;
      },
      [[], []]
    );
  };
  const seperated = arr.splice(size);
  return [...split(arr), ...split(seperated)];
};

const t = splitArr(
  [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  2
);
console.log(t);

solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]);
