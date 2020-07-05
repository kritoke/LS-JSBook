function copyObj(copyObject, keyArray = Object.keys(copyObject)) {
  let newObject = {};

  if (keyArray) {
    keyArray.forEach(key =>
      newObject[key] = copyObject[key]);

    return newObject;
  }
}

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined