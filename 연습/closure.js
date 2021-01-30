function outer() {
  let temp = { a: { b: 1 } };
  function inner() {
    return { temp, fixTemp: function () { temp = null } }
  }
  return inner
}

let a = outer()
console.log(a())
a().fixTemp()
console.log(a())


function movie(title) {
  return {
    get_title: function () {
      console.log(title);
      return title;
    },
    set_title: function (_title) {
      title = _title;
      console.log(title);
    }
  }
}

ring = movie('ring');
ring.get_title();
ring.set_title('change title');
ring.get_title();