let Person = require("./person");

class Student extends Person {
  constructor(name, age, school, grade, major) {
    super(name, age); // 이거 실행되면서 인구가 늘거라 생각했는데......
    this.school = school;
    this.grade = grade;
    this.major = major;
  }

  // 오버로딩
  // introduce() {
  //   console.log(
  //     `안녕하십니까! ${this.school}학교 ${this.major}과 ${this.grade}학년 ${this.name} 입니다! 잘 부탁드립니다!`
  //   );
  // }

  info() {
    console.log(`현재 ${this.school}학교 ${this.major}과 재학중`);
  }
}

let osk = new Student(
  "오성국",
  20,
  "하버드대",
  4,
  "시스템응용융합테크닉에니지학"
);

let osk2 = new Student(
  "오성국2",
  20,
  "하버드대",
  4,
  "시스템응용융합테크닉에니지학"
);

let osk3 = new Student(
  "오aa성국3",
  20,
  "하버드대",
  4,
  "시스템응용융합테크닉에니지학"
);
// console.log(osk.population);
console.log(osk.isHuman);
// console.log(osk2.population);
console.log(osk2.isHuman);
// console.log(osk3.population);
console.log(osk3.isHuman);

let some = new Student("", 1, "", 4, "");
console.log(some.population);
console.log(Person.population); // ㅖ\
