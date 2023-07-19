import { describe, it, expect } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber', () => {
  it('should return a number type when a string number is passed', () => {
    const input = '9';
  
    const result = transformToNumber(input);
  
    expect(result).toBeTypeOf('number');
  });
  
  it('should return NaN when a string that cannot convert to a number is passed', () => {
    const input = 'invalid';
    const input2 = {};
  
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
    
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
  
  it('should return the string number as a number type', () => {
    const input = '9';
  
    const result = transformToNumber(input);
    
    const expectedResult = 9;
    expect(result).toBe(expectedResult);
  });
  
  it('should not throw an error when a string that cannot convert to a number is passed', () => {
    const input = 'invalid';
  
    const resultFn = () => {
      transformToNumber(input);
    };
    expect(resultFn).not.toThrow();
  });
});


describe('cleanNumbers', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', '2'];
    const resultFn = () => cleanNumbers(numberValues);
    expect(resultFn).toThrow();
  });
});