const binarySearch = function (arr, target) {
  let cnt = 0;
  let low = 0;
  let high = arr.length - 1;

  arr = arr.sort((a, b) => a - b);

  if (arr[low] > target || arr[high] < target) {
    return -1;
  }

  if (arr[low] === target) return low;
  if (arr[high] === target) return high;

  while (low !== high) {
    let pivot = parseInt((low + high) / 2);
    if (arr[pivot] === target) {
      return pivot;
    }
    // else if (arr[low] === target) return low;
    // else if (arr[high] === target) return high;

    if (arr[pivot] > target) {
      high = pivot - 1;
    } else if (arr[pivot] < target) {
      low = pivot + 1;
    }

    // 이거 넣어야 통과댐
    if (high < low && arr[low] !== target) return -1;
  }
  if (arr[low] === target) {
    return low;
  }
  return -1;
};

const range = [...Array(100).keys()];
// 2 4 8 16 32 64 128 256 512 1024
// 1 2 3  4  5  6   7   8   9   10
console.log(range);
console.log(binarySearch(range, 98));
// console.log(binarySearch([4, 6, 8, 9, 10, 15], 14));
// console.log(binarySearch([4, 6, 8, 9, 10, 15, 10000], 132));
// let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
// console.log(output); // 2

// output = binarySearch([4, 5, 6, 9], 100);
// console.log(output); // -1

// output = binarySearch([4, 6, 8, 9, 10, 15], 15);
// console.log(output); // 3

// output = binarySearch([0, 1, 2, 3, 4, 5], 1);
// console.log(output); // 1

// output = binarySearch([0, 1, 2, 3, 4, 5], 5);
// console.log(output); // 5
