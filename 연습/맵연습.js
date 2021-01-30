let map = new Map();

map.set(1, "number 1");
map.set("1", "string 1");
map.set(true, "boolean 1");

// map.set(1, "number 1").set("1", "string 1").set(true, "boolean 1");

console.log(map.get(1));
console.log(map.get("1"));
console.log(map.get(true));

let obj = { a: 1, b: 2 };

map.set(obj, "testing");

console.log(map.get(obj));
console.log(map);

let ob = Object.fromEntries(map);
console.log(ob);
let ma = new Map(Object.entries(ob));
console.log(ma);
