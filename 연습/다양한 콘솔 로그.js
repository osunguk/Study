// 대부분의 기능이 브라우저 환경에서만 지원된다.

console.log("안녕하세요 %d", 123123);

let obj = { a: 1, b: "2", c: true, d: function () {} }; // 브아루저에서는 가능!
console.log("객체를 출력해 봅시다 %O 쨘!", obj);

console.log(
  "%c콘솔 로그 이쁘게 꾸미기",
  "color:red; font-size:30px; font-weight:100; font-style:italic"
);

// 그룹화
console.group();
console.log("Inside 1st group");
console.group();
console.log("Inside 2nd group");
console.groupEnd();
console.groupEnd();
console.log("Outer scope");

// 다양한 기본 기능들
console.warn("This is a warning!");
console.error("This is an error!");
console.info("This is very informative!");
console.debug("Debugging a bug!");
console.assert(true, "This won't be logged!");
console.assert(false, "This will be logged!");

console.log(console.__proto__);
console.log(console.__proto__.__proto__ === Object.prototype);

console.count("this");
console.count("this");
console.count("this");
console.count("this");
console.count("this");
console.count("this");
console.count("this");
console.countReset("this");

let row = 10;
let col = 10;
let matrix = new Array(row).fill(null);
for (let i = 0; i < col; i++) {
  matrix[i] = new Array(col).fill(0);
}

console.table(matrix);
