function lotto(lottos: number[], win_nums: number[]) {
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);
  const zeroNumber = lottos.filter((el) => el === 0).length;
  const matchesNumber = lottos.reduce((acc, cur, index) => {
    if (win_nums.includes(cur)) return acc + 1;
    return acc;
  }, 0);
  let max = matchesNumber + zeroNumber;
  if (max > 6) max = 6;
  if (max < 2) max = 0;
  const ranking = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };
  console.log(matchesNumber);
  console.log(zeroNumber);

  return [ranking[max], ranking[matchesNumber]];
}
