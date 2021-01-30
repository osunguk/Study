const getCombinations = function (arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    console.log(combinations);
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    result.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return result; // 결과 담긴 result return
};

let test = [1, 2, 3, 4];
console.log(getCombinations(test, 3));

console.log(test.slice(1));
// let test2 = [0, 1, 2, 3];
// console.log(getCombinations(test2, 2));

const rockPaperScissors = function (rounds) {
  rounds = rounds || 3;
  const rps = ["rock", "paper", "scissors"];

  const outcomes = [];
  let permutate = function (roundsToGo, playedSoFar) {
    if (roundsToGo === 0) {
      outcomes.push(playedSoFar);
      return;
    }

    for (let i = 0; i < rps.length; i++) {
      let currentPlay = rps[i];
      permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }
  };

  permutate(rounds, []);

  return outcomes;
};
