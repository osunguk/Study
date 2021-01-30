let obj = {
  from: 0,
  to: 20,
  step: 3,
};

// 원하는 동작은
// 3 6 9 12 ... 21 까지 출력되게!

obj[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    step: this.step,

    next() {
      if (this.current <= this.last) {
        this.current += this.step;
        return { done: false, value: this.current };
      } else {
        return { done: true };
      }
    },
  };
};

for (let i of obj) {
  console.log(i);
}

console.log(Array.from(obj));
