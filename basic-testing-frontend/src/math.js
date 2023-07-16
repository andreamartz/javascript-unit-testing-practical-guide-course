import { cleanNumbers } from './util/numbers.js';

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

// takes an array of strings; returns a string result - either the sum or the error message
export function calculateResult(numberInputs) {
  let result = '';
  try {
    const numbers = cleanNumbers(numberInputs);  // array of numbers

    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
    console.log("RESULT: ", result);
  }
  return result;
}
