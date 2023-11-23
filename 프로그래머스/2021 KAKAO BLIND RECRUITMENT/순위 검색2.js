function solution(info, query) {
  const result = [];
  const splited = info
    .map((el) => el.split(" "))
    .sort((a, b) => Number(a[info.legnth - 1]) - Number(b[info.legnth - 1]));
  console.log(splited);
  for (let q of query) {
    const checkList = getCheckList(q);
    let cnt = 0;
    let checked = [...splited];
    for (let index in checkList) {
      if (checkList[index] === "-") continue;

      checked = checked.filter((el) => checkPass(el[index], checkList[index]));
      if (checked.length === 0) {
        result.push(0);
        break;
      }
    }
    result.push(checked.length);
  }
  return result;
}

function checkPass(info, test) {
  if (isFinite(Number(info))) {
    if (Number(info) < Number(test)) return false;
  } else if (info !== test) {
    return false;
  }
  return true;
}

function getCheckList(query) {
  const checkList = query.split("and").map((t) => t.trim());
  const last = checkList.pop();
  checkList.push(...last.split(" "));
  console.log(checkList);
  return checkList;
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
