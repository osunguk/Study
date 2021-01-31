const getCombinations = function (arr, selectNumber) {
  console.log("work");
  const result = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    console.log(fixed);
    console.log(rest);
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    result.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return result; // 결과 담긴 result return
};

let test = [1, 2, 3, 4];
console.log(getCombinations(test, 3));

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

// console.log(rockPaperScissors(3));

// sun-yeol

const sunyeol = function (list, number) {
  // 중복 선택 가능한 순열
  let result = []; // 각각의 경우의수 를 담는 변수
  const jegwi = function (num, cur) {
    // num 는 뽑는 횟수, cur 는 현재 경우의 수 진행 상태
    if (num === 0) {
      // 뽑기 기회가 없는 경우
      result.push(cur);
      return;
    }
    for (let i of list) {
      // 경우의 수 나누기
      jegwi(num - 1, [...cur, i]); // 넘길때 cur 그대로 넘기면 주소가 같아져서 각기 다른 배열으로 들어갈 수 있게 해줘야 한다
    }
  };
  jegwi(number, []);
  return result;
};

console.log(sunyeol([1, 2, 3], 5));

const sunyeol_no_redundancy = function (list, number) {
  // 조합은 못 만들고 중복 선택 못하는 순열을 만들어 버렸다
  if (list.length < number) {
    return;
  }
  let result = [];

  const jegwi = function (ppobgi, num, cur) {
    if (num === 0) {
      result.push(cur);
      return;
    }
    for (let i = 0; i < ppobgi.length; i++) {
      let temp = ppobgi.slice();
      temp.splice(i, 1);
      jegwi(temp, num - 1, [...cur.slice(), ppobgi[i]]); // 넘길때 cur 그대로 넘기면 주소가 같아져서 각기 다른 배열으로 들어갈 수 있게 해줘야 한다
    }
  };
  jegwi(list, number, []);
  console.log(result);
  return result;
};

sunyeol_no_redundancy([1, 2, 3, 4], 3);

// const johab = function (list, number) {
//   // 조합은 못 만들고 중복 선택 못하는 순열을 만들어 버렸다
//   if (list.length < number) {
//     return;
//   }
//   let result = [];

//   const jegwi = function (ppobgi, num, cur) {
//     if (num === 0) {
//       result.push(cur);
//       return;
//     }
//     for (let i = 0; i < ppobgi.length; i++) {
//       let temp = ppobgi.slice();
//       temp.splice(i, 1);
//       jegwi(temp, num - 1, [...cur.slice(), ppobgi[i]]); // 넘길때 cur 그대로 넘기면 주소가 같아져서 각기 다른 배열으로 들어갈 수 있게 해줘야 한다
//     }
//   };
//   jegwi(list, number, []);
//   console.log(result);
//   return result;
// };

// johab([1, 2, 3, 4], 3);

let temp = function (arr, number) {
  let result = [];
  let cnt = 0;

  let johab = function (source, target, n, r, count) {
    if (r === 0) result.push(target);
    else if (n === 0 || n < r) return;
    else {
      target.push(source[count]);
      johab(source, Object.assign([], target), n - 1, r - 1, count + 1);
      target.pop();
      johab(source, Object.assign([], target), n - 1, r, count + 1);
    }
  };

  johab(arr, [], arr.length, number, 0);
  return result;
};

// 1,2,3,4

// 1 고정
//나머지 2,3,4 2개를 뽑는 조합
// 2 를 고정
// 3 4 1를 뽑는 조합

console.log(temp([1, 2, 3, 4], 3));
