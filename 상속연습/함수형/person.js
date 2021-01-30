let makePerson = (name, age) => {
  const person = {};

  person.name = name;
  person.age = age;

  person.introduce = () => {
    console.log(`안녕하세요 제 이름은 ${name} 이구요. 나이는 ${age} 살입니다.`);
  };

  return person;
};

module.exports = makePerson;

// let osk = makePerson("오성국", 20);
// osk.introduce();
