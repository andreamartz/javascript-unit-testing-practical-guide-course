// returns an array of strings
export function extractNumbers(formData) {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  return [num1Input, num2Input];
}

// returns an array of strings
export function extractEnteredNumberValues(form) {
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);  // array of strings
  return numberInputs;
}