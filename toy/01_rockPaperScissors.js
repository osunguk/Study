const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    console.log(fixed);
    const rest = origin.slice(); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

let test = [1, 2, 3];
console.log(getCombinations(test, 3));

const rockPaperScissors = function (n) {
  if (n === undefined) n = 3;
  const result = [];
  const rockPaperScissor = ["rock", "paper", "scissors"];
  if (n === 1) return rockPaperScissor.map((el) => [el]);

  rockPaperScissor.forEach((el, idx, src) => {
    const rest = src.slice();
    const combination = rockPaperScissors(n - 1);
    const attached = combination.map((combination) => [el, ...combination]);
    result.push(...attached);
  });
  return result;
};

console.log(rockPaperScissors(4));
