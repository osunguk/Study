function solution(stones, k) {
  let set = new Set(stones);
  let arr = [...set].sort();
  if (arr.length === 1) return arr[0];

  
  let low = 0;
  let high = arr.length - 1;
  while (1) {
    let pivot = Math.floor((high + low) / 2); // 중간 녀석 인덱스 값
    let check = canPass(stones, arr[pivot], k)
    if (check  === 'answer') { // pivot 명은 건널 수 있다.
      return arr[pivot]
    } else if (check === 'left'){ // pivot + 1 명은 못건넌다
      high = pivot - 1;
    } else { // check === 'right'
      low = pivot + 1;
    }
  }
}
// [1, 2, 3, 4, 5]

/*
* arr : stones
* num : 건너는 friends
* k : 점프력
* num 번째 친구가 건너고 num + 1 번째 친구가 건널 수 없을 때만 "answer"
* "left" 둘다 건널 수 없는 경우
* "right" 둘다 건널 수 있는 경우
*/
function canPass(arr, num, k) {
  let jump = k
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] - num + 1;
    if (temp <= 0) {
      jump--
    } else {
      jump = k;
    }
    if (jump === 0) {
      return 'left'; // 여기 걸리면 피봇 왼쪽으로
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] - num;
    if (temp <= 0) {
      jump--
    } else {
      jump = k;
    }
    if (jump === 0) {
      return 'answer';
    }
  }
  return 'right'; // 여기 걸리면 피봇 오른쪽으로
}



// console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3, 3)); // 3
// console.log(canPass([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3, 3)); // 3
// console.log(solution([2, 4, 5, 2, 2, 1, 4, 2, 5, 1], 3)); // 2
// console.log(solution([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2)); // 3

// arr 가 [1] 경우 => 답 1
// arr 가 [1, 2] 인 경우 => arr[1] 건너고 건너면 2 아니면 1
// arr 가 [1, 2, 3] 인 경우 