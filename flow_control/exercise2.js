function evenOrOdd(number) {
  if (Number.isInteger(number))
    console.log((number % 2 === 0) ? 'even' : 'odd');
  else 
      console.log('Provided integer is not a real integer.');      
}

evenOrOdd(4);