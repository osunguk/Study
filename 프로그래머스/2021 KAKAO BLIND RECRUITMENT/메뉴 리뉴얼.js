function solution(orders, selectCourse) {
  const dic = {};
  console.log(orders);
  console.log(dic);

  const recursion = (order, selectCourse) => {
    // 결정문
    // 반복문
  };

  recursion(orders[0], selectCourse[0]);

  console.log(dic);
  // return answer;
}

// const order = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const order = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];

solution(order, course);

const temp = (orders, selectNumber) => {
  let result = [];

  if (selectNumber === 1) return orders.map((value) => [value]);

  const arrayed = new Array(...orders);
  arrayed.forEach((el, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = temp(rest, selectNumber - 1);
    const attached = combinations.map((combi) => [el, ...combi]);
    result.push(...attached);
  });
  return result;
};

temp("xyz", 2);
console.log(temp("xyz", 2));
