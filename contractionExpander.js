// contractionExpander.js

import { contractionsMap } from './contractionsMap.js';

function applyCase(word, replacement) {
  if (word[0] === word[0].toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

export function expandContractions(inputString) {
  // Normalize apostrophes to standard single quote
  const cleanedInput = inputString.replace(/[‘’\']/g, "'");

  // Use word boundaries to match standalone contractions
  const contractionRegex = new RegExp(
    "\\b(" + Object.keys(contractionsMap).join("|") + ")\\b",
    "gi"
  );

  return cleanedInput.replace(contractionRegex, match => {
    const expanded = contractionsMap[match.toLowerCase()];
    return applyCase(match, expanded);
  });
}
