function solution(s) {
  const test = (str) => {
    const stack = [];
    for (let i of str) {
      if (i === "{" || i === "[" || i === "(") {
        stack.push(i);
      } else {
        if (i === "}" && stack[stack.length - 1] === "{") {
          stack.pop();
          continue;
        }
        if (i === "]" && stack[stack.length - 1] === "[") {
          stack.pop();
          continue;
        }
        if (i === ")" && stack[stack.length - 1] === "(") {
          stack.pop();
          continue;
        }
        stack.push(i);
      }
    }
    return !Boolean(stack.length);
  };
  const rotate = (str, callback) => {
    let target = str;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      const splited = target.split("");
      splited.push(splited[0]);
      splited.shift();
      target = splited.join("");
      if (callback(target)) count = count + 1;
    }
    return count;
  };
  return rotate(s, test);
}
