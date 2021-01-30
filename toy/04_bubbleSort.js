const bubbleSort = function (arr) {
  if (arr.length === 0) return [];
  console.log(arr);

  let lastLength = arr.length; // for loop 가 한번씩 돌 때마다 줄어든다
  console.log(lastLength);
  let loop = lastLength; // 전체 반복 횟수

  while (loop--) {
    let isSorted = true; // 전체가 정렬되어있으면 그대로 리턴하기 위해
    console.log(7 - loop, "번째 루프");
    for (let i = 0; i < lastLength - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        isSorted = false;
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      }
    }
    if (isSorted) return arr;
    lastLength--;
  }
  console.log(arr);
};

console.log(bubbleSort([4, 2, 5, 7, 8, 2, 1]));
