// 최소 2가지 이상의 단품 메뉴로 구성
// 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합
// 각 손님은 단품메뉴를 2개 이상 주문함
// 결과는 알파벳 오름차순으로 정렬
// 구성이 여러개라면 모두 담는다
// result 가 [] 인 경우는 없다

function solution(orders, course) {
  const answer = [];
  for (let i of course) {
    const dic = {};

    const filtered = orders.filter((el) => el.length >= i);

    for (let order of filtered) {
      const split = order.split("").sort();
      const combi = combination(split, i);
      for (let c of combi) {
        const joined = c.join("");
        if (dic[joined]) {
          dic[joined]++;
        } else {
          dic[joined] = 1;
        }
      }
    }
    console.log(dic);
    let temp = [];
    let max = 0;
    for (i in dic) {
      if (max < dic[i]) {
        max = dic[i];
        temp = [i];
      } else if (max === dic[i]) {
        temp.push(i);
      }
    }
    if (max > 1) {
      answer.push(...temp);
    }
  }
  console.log(answer.sort());
  return answer.sort();
}

const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];

solution(orders, course);

function combination(order, cnt) {
  if (cnt === 1) return order.map((el) => [el]);
  cnt--;
  const result = [];
  order.forEach((pick, idx, org) => {
    const rest = org.slice(idx + 1);
    const computed = combination(rest, cnt);
    computed.forEach((el) => {
      result.push([pick, ...el]);
    });
  });
  return result;
}

console.log("abcde".split("").join(""));
