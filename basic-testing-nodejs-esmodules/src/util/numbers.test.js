import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

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