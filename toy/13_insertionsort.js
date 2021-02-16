const insertionSort = function (arr, callback) {
  // TODO: 여기에 코드를 작성합니다.
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    insert(arr[i], result, callback);
  }
  return result;
};

function insert(el, arr, callback) {
  if (arr.length === 0) {
    arr.push(el);
    return;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (callback) {
      if (callback(arr[i]) < callback(el)) {
        arr.splice(i + 1, 0, el);
        return;
      }
    } else if (arr[i] < el) {
      arr.splice(i + 1, 0, el);
      return;
    }
  }
  arr.unshift(el);
}

let output = insertionSort([3, 2, 1, 4, 0, 12, 20, 7]);
