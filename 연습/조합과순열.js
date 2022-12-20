const Combination = (arr, cnt) => {
  if (cnt === 1) return arr.map((el) => [el]);
  --cnt;
  const result = [];

  arr.forEach((pick, idx, org) => {
    const rest = org.slice(idx + 1);
    const computed = Combination(rest, cnt);
    computed.forEach((el) => {
      result.push([pick, ...el]);
    });
  });

  return result;
};

const getCombination = Combination([1, 2, 3], 2);
console.log(getCombination);

const Permutation = (arr, cnt) => {
  if (cnt <= 1) return arr.map((el) => [el]);
  --cnt;

  const result = [];

  arr.forEach((pick, idx, org) => {
    const rest = org.filter((el, index) => index !== idx);
    const computed = Permutation(rest, cnt);
    computed.forEach((el) => {
      result.push([pick, ...el]);
    });
  });

  return result;
};

const getPermutation = Permutation([1, 2, 3], 2);
console.log(getPermutation);
