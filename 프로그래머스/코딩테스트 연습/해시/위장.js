function solution(clothes) {
  var answer = 0;

  let obj = {};

  for (let cloth of clothes) {
    if (obj.hasOwnProperty(cloth[1])) {
      obj[cloth[1]].push(cloth[0]);
    } else {
      obj[cloth[1]] = [cloth[0]];
    }
  }

  let result = 1;

  for (category of Object.keys(obj)) {
    result = result * (obj[category].length + 1);
  }
  return result - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

solution([
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
]);
