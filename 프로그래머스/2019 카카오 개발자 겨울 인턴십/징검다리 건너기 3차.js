function solution(stones, k) {
  let set = new Set(stones);
  let arr = [...set].sort();
  let copyArr = arr.slice();
  if (arr.length === 1) return arr[0];

  let low = 0;
  let high = arr.length - 1;
  while (cnt--) {
    let pivot = Math.floor((high + low) / 2);
    if (pass(stones, k, arr[pivot])) {
      if (arr[pivot + 1] === false) {
        return copyArr[pivot];
      }
      arr[pivot] = true;
      low = pivot + 1

    } else {
      if (arr[pivot - 1] === true) {
        return copyArr[pivot - 1];
      }
      arr[pivot] = false;
      high = pivot - 1
    }
  }
}


function pass(stones, k, person) {
  let cnt = 0;
  for (let i = 0; i < stones.length; i++) {
    let temp = stones[i] - (person - 1);
    if (temp !== 0) {
      cnt = 0
    } else {
      cnt++;
    }
    if (cnt >= k) return false;
  }
  return true;
}

console.log(pass([99,98,97,96,95,94,93,93,94], 2, 93));



// console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3, 3)); // 3
// console.log(solution([2, 4, 5, 2, 2, 1, 4, 2, 5, 1], 3)); // 2
console.log(solution([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2)); // 3
console.log(solution([3, 2, 2, 3], 2));

console.log(solution([1, 6, 3, 1,3,3,3,3,3,3,3,3], 2));


