// contractionExpander.mjs

const contractionMap = {
  "can't": "cannot",
  "won't": "will not",
  "isn't": "is not",
  "aren't": "are not",
  "he's": "he is",
  "she's": "she is",
  "it's": "it is",
  "i'm": "I am",
  "you're": "you are",
  "they're": "they are",
  "we're": "we are",
  "i've": "I have",
  "you've": "you have",
  "they've": "they have",
  "we've": "we have",
  "i'll": "I will",
  "you'll": "you will",
  "he'll": "he will",
  "she'll": "she will",
  "it'll": "it will",
  "we'll": "we will",
  "they'll": "they will",
  "i'd": "I would",
  "you'd": "you would",
  "he'd": "he would",
  "she'd": "she would",
  "it'd": "it would",
  "we'd": "we would",
  "they'd": "they would",
  "doesn't": "does not",
  "don't": "do not",
  "didn't": "did not",
  "hasn't": "has not",
  "haven't": "have not",
  "hadn't": "had not",
  "couldn't": "could not",
  "wouldn't": "would not",
  "shouldn't": "should not",
  "wasn't": "was not",
  "weren't": "were not",
  "mustn't": "must not",
  "isnt": "is not",
  "arent": "are not",
  "hes": "he is",
  "shes": "she is",
  "it's": "it is",
  "im": "I am",
  "youre": "you are",
  "theyre": "they are",
  "were": "we are",
  "ive": "I have",
  "youve": "you have",
  "theyve": "they have",
  "weve": "we have",
  // "ill": "I will",
  "youll": "you will",
  // "hell": "he will",
  // "shell": "she will",
  "itll": "it will",
  // "well": "we will",
  "theyll": "they will",
  "id": "I would",
  "youd": "you would",
  "hed": "he would",
  "shed": "she would",
  "itd": "it would",
  "wed": "we would",
  "theyd": "they would",
  "doesnt": "does not",
  "don'": "do not",
  "didnt": "did not",
  "hasnt": "has not",
  "havent": "have not",
  "hadnt": "had not",
  "couldnt": "could not",
  "wouldnt": "would not",
  "shouldnt": "should not",
  "wasnt": "was not",
  "werent": "were not",
  "mustnt": "must not",
  "cant": "cannot", // misspelled
  "wont": "will not" // misspelled
};

function applyCase(word, replacement) {
  if (word[0] === word[0].toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

export function expandContractions(inputString) {
  const cleanedInput = inputString.replace(/[‘’']/g, "'");
  const contractionRegex = new RegExp(
    Object.keys(contractionMap).join("|"),
    "gi"
  );

  return cleanedInput.replace(contractionRegex, match => {
    const expanded = contractionMap[match.toLowerCase()];
    return applyCase(match, expanded);
  });
}