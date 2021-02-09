const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  str = Array(...new Set(str)).sort();
  console.log(str);
  let recur = function (str, cur) {
    if (str === "") {
      result.push(cur);
      return;
    }

    result.push(cur);
    for (let i = 0; i < str.length; i++) {
      recur(str.slice(i + 1), cur + str[i]);
    }
  };

  recur(str, "");
  return result;
};

powerSet("abc");
// ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
// powerSet("jjump");

// let test = "jjump";
// let setTest = Array(...new Set(test));
// console.log(setTest.sort());

let x = [1, 2, 3, 4, 5, 6];

console.log(x.slice(3));
