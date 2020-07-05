function oddLengths(charArray) {
  let oddArray = charArray.map(element => element.length);
  return oddArray.filter(elmLength => elmLength % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]