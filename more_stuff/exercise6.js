function allMatches(phrase, expression) {
  let matches = [];

  phrase.forEach(word => {
      if (expression.test(word)) matches.push(word);
    }
  );
  
  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']