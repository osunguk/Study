function solution(new_id) {
  function stepOne(new_id) {
    return new_id.toLowerCase();
  }

  function stepTwo(new_id) {
    let trans = "";
    const numPattern = /[0-9]/;
    const smallLetterPattern = /[a-z]/;
    for (i of new_id) {
      if (numPattern.test(i)) trans += i;
      if (smallLetterPattern.test(i)) trans += i;
      if (i === "." || i === "-" || i === "_") {
        trans += i;
      }
    }
    return trans;
  }
  function stepThree(new_id) {
    const repeatPattern = /\.{2,}/;
    let result = new_id.replace(repeatPattern, ".");
    while (repeatPattern.test(result)) {
      result = result.replace(repeatPattern, ".");
    }
    return result;
  }
  function stepFour(new_id) {
    if (new_id[0] === ".") {
      new_id = new_id.slice(1);
    }
    if (new_id[new_id.length - 1] === ".") {
      new_id = new_id.slice(0, new_id.length - 1);
    }

    return new_id;
  }
  function stepFive(new_id) {
    if (new_id.length === 0) {
      new_id += "a";
    }
    return new_id;
  }
  function stepSix(new_id) {
    if (new_id.length >= 16) {
      new_id = new_id.slice(0, 15);
    }
    if (new_id[new_id.length - 1] === ".") {
      new_id = new_id.slice(0, new_id.length - 1);
    }
    return new_id;
  }
  function stepSeven(new_id) {
    const lastLetter = new_id[new_id.length - 1];
    while (new_id.length <= 2) {
      new_id += lastLetter;
    }
    return new_id;
  }

  function sequence(new_id) {
    let result = (firstResult = stepOne(new_id));
    result = stepTwo(result);
    result = stepThree(result);
    result = stepFour(result);
    result = stepFive(result);
    result = stepSix(result);
    result = stepSeven(result);
    return result;
  }
  const result = sequence(new_id);
  return result;
}

const a = "....aaa......bc...dE#@!!!!FG123!._-...";
const b = "a";
const c = "123_.def";
let result = solution(c);

console.log(result);
