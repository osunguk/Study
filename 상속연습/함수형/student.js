let makePerson = require("./person");

let makeStudent = (name, age, school, grade, major) => {
  const student = makePerson(name, age);

  student.school = school;
  student.grade = grade;
  student.major = major;

  // 아래는 오버로딩!
  // student.introduce = () => {
  //   console.log(
  //     `안녕하십니까! ${school}학교 ${major}과 ${grade}학년 ${name} 입니다! 잘 부탁드립니다!`
  //   );
  // };

  student.info = () => {
    console.log(`현재 ${school}학교 ${major}과 재학중`);
  };

  return student;
};

let osk = makeStudent(
  "오성국",
  20,
  "하버드대",
  4,
  "시스템응용융합테크닉에니지학"
);
osk.introduce();
osk.info();
