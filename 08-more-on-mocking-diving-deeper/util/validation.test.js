import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

// tests:
  // it should throw an error if text is null or undefined or empty string(i.e., '')
  // it should throw an error if trimmed text has length 0
    // need to mock the .trim method??
  // validateNotEmpty should be called with two arguments: text and errorMessage

  it('should throw an error if an empty string is provided as a value', () => {
    const testInput = '';

    const validationFcn = () => validateNotEmpty(testInput);

    expect(validationFcn).toThrow();
  });

  it('should throw an error if an empty string with blanks is provided as a value', () => {
    const testInput = '  ';

    const validationFcn = () => validateNotEmpty(testInput);

    expect(validationFcn).toThrow();
  });

  it('should throw an error with the provided error message', () => {
    const testInput = '';
    const testErrorMessage = 'Test';

    const validationFcn = () => validateNotEmpty(testInput, testErrorMessage);

    expect(validationFcn).toThrow(testErrorMessage);
  });