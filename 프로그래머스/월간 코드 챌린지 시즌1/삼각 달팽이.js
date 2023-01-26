function solution(n) {
  const dic = {};
  let depth = n;

  while (depth-- > 0) {
    dic[depth] = new Array(depth + 1);
  }

  let lastCur = 0;

  const calc = (height, startPos) => {
    const recursion = (cur, pos, front) => {
      if (cur === (height - 1) * 3 + lastCur) {
        for (let i = dic[pos].length - 1; i >= 0; i--) {
          if (!dic[pos][i]) {
            dic[pos][i] = cur;
            break;
          }
        }
        lastCur = cur;
        return;
      }

      if (pos === startPos + height - 1) {
        for (let i = 0; i < height; i++) {
          dic[pos][dic[pos].findIndex((el) => !el)] = cur;
          cur += 1;
        }
        if (height === 1 || height === 2) {
          return;
        }
        recursion(cur, pos - 1, false);
      } else {
        if (front) {
          dic[pos][dic[pos].findIndex((el) => !el)] = cur;
          recursion(cur + 1, pos + 1, true);
        } else {
          for (let i = dic[pos].length - 1; i >= 0; i--) {
            if (!dic[pos][i]) {
              dic[pos][i] = cur;
              break;
            }
          }
          recursion(cur + 1, pos - 1, false);
        }
      }
    };

    recursion(1 + lastCur, startPos, true);
  };

  for (let i = 0; i < n / 3; i++) {
    const height = n - 3 * i;
    const startPos = 0 + 2 * i;
    calc(height, startPos);
  }

  const result = [];
  for (let i of Object.values(dic)) {
    result.push(...i);
  }

  return result;
}
