let Person = require("./person");

function Student(name, age, school, grade, major) {
  Person.call(this, name, age);
  this.school = school;
  this.grade = grade;
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// 오버로딩
// Student.prototype.introduce = function () {
//   console.log(
//     `안녕하십니까! ${this.school}학교 ${this.major}과 ${this.grade}학년 ${this.name} 입니다! 잘 부탁드립니다!`
//   );
// };

Student.prototype.info = function () {
  console.log(`현재 ${this.school}학교 ${this.major}과 재학중`);
};

let osk = new Student(
  "오성국",
  20,
  "하버드대",
  4,
  "시스템응용융합테크닉에니지학"
);

osk.introduce();
osk.info();
