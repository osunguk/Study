function solution(a) {
  const final = new Set();
  const memo = {};
  const recursion = (left, chance) => {
    if (left.length === 1) {
      final.add(left[0]);
      return;
    }
    if (memo[JSON.stringify(left) + chance]) {
      return;
    } else {
      memo[JSON.stringify(left) + chance] = true;
    }
    if (chance) {
      for (let i = 1; i <= left.length - 1; i++) {
        const compare = left.slice(i - 1, i + 1);
        const chooseLeft = left.filter((el) => el !== compare[0]);
        recursion(chooseLeft, compare[0] > compare[1]);
        const chooseRight = left.filter((el) => el !== compare[1]);
        recursion(chooseRight, compare[0] < compare[1]);
      }
    } else {
      for (let i = 1; i <= left.length - 1; i++) {
        const compare = left.slice(i - 1, i + 1);
        if (compare[0] > compare[1]) {
          const chooseLeft = left.filter((el) => el !== compare[0]);
          recursion(chooseLeft, false);
        } else {
          const chooseRight = left.filter((el) => el !== compare[1]);
          recursion(chooseRight, false);
        }
      }
    }
  };
  recursion(a, true);
  return final.size;
}

function solution2(a) {
  const first = a[0];
  const last = a[a.length - 1];
  const result = new Set();

  let pivot = first;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) {
      result.add(a[i]);
      pivot = a[i];
    }
  }
  pivot = last;
  for (let i = a.length - 1; i > 0; i--) {
    if (a[i] < pivot) {
      pivot = a[i];
      result.add(a[i]);
    }
  }
  return result.size + 2;
}
