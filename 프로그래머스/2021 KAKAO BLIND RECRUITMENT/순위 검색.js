// 효율성 테스트 실패
function solution(info, query) {
  const result = [];

  for (let q of query) {
    let cnt = 0;
    const checkList = q.split("and").map((t) => t.trim());
    const last = checkList.pop();
    checkList.push(...last.split(" "));
    for (let i of info) {
      const splited = i.split(" ");
      if (checkPass(splited, checkList)) {
        cnt++;
      }
    }
    result.push(cnt);
  }
  return result;
}

function checkPass(info, test) {
  for (let i = 0; i < test.length; i++) {
    if (test[i] === "-") continue;
    if (isFinite(Number(test[i]))) {
      if (Number(test[i]) > info[i]) return false;
    } else {
      if (info[i] !== test[i]) {
        return false;
      }
    }
  }
  return true;
}

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

solution(info, query);
