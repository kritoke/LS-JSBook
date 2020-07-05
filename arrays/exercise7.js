function sumOfSquares(numberArray) {
  const reducer = (accumulator, num) => {
    return accumulator + num*num;
  }
  
  return numberArray.reduce(reducer, 0);
}

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83