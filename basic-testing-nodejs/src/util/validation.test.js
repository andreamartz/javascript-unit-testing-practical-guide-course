import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty', () => {
  it('should throw an error, if an empty string is provided', () => {
    const input = '';
    const resultFn = () => validateStringNotEmpty(input);
    expect(resultFn).toThrow();
  });
  
  it('should throw an error with a message stating the reason', () => {
    const input = '';
    const resultFn = () => validateStringNotEmpty(input);
    expect(resultFn).toThrow(/must not be empty/);
  });
  
  it('should throw an error if a long string of blanks is provided', () => {
    const input = '';
    const resultFn = () => validateStringNotEmpty(input);
    expect(resultFn).toThrow();
  });
  
  it('should throw an error if the input is not a string', () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};
  
    const resultFnNum = () => validateStringNotEmpty(inputNum);
    const resultFnBool = () => validateStringNotEmpty(inputBool);
    const resultFnObj = () => validateStringNotEmpty(inputObj);
  
    expect(resultFnNum).toThrow();
    expect(resultFnBool).toThrow();
    expect(resultFnObj).toThrow();
  });
  
  it('should not throw an error, if a non-empty string is provided', () => {
    const input = 'valid';
    const resultFn = () => validateStringNotEmpty(input);
    expect(resultFn).not.toThrow();
  });
});

describe('validateNumber', () => {
  it('should throw an error if NaN is provided', () => {
    const input = NaN;
    const resultFn = () => validateNumber(input);
    expect(resultFn).toThrow();
  });
  
  it('should throw an error with a message that contains a reason for error (invalid number)', () => {
    const input = NaN;
    const resultFn = () => validateNumber(input);
    expect(resultFn).toThrow(/Invalid number/);
  });
  
  it('should throw an error if a non-numeric value is provided', () => {
    const input = '1';
    const resultFn = () => validateNumber(input);
    expect(resultFn).toThrow();
  });
  
  it('should not throw an error, if a number is provided', () => {
    const input = 1;
    const resultFn = () => validateNumber(input);
    expect(resultFn).not.toThrow();
  });
});