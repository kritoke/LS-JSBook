let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArray = Object.keys(obj).map(letter => letter.toUpperCase());

console.log(newArray);
console.log(obj);