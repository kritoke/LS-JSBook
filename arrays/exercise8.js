function oddLengths(charArray) {
  const reducer = (filteredArray, element) => {
    let elmLength = element.length;

    if (elmLength % 2 !== 0) filteredArray.push(elmLength);
    return filteredArray;
  }  
  return charArray.reduce(reducer, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]