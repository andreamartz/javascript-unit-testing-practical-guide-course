//* Maximilian shares two links re: spies, mocks, stubs, and fakes (but he says spies and mocks are all you need):
  //* https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub
  //* https://stackoverflow.com/questions/52131231/simple-definition-of-stub-spy-fake-and-mock-in-unit-testing

//^ Spy: a "wrapper" around a fcn OR an empty replacement for a fcn that allow you to track if and how a fcn was called
  //^ 'how' a fcn is called might be a test of which arguments were received, for example
  //^ spies are useful if you don't care about what a function does, but you just want to know if it was executed
  //^ so, you either wrap the original fcn with a spy object, OR you replace the fcn (the latter is more common, bc it allows you to get rid of the side effect) 

//^ Mock: a replacement for an API that may provide some test-specific behavior instead
  //^ with mocks, you often replace bigger parts of an API of a certain module or code
  //^ with mocks, you often also implement some test-specific logic in the replacement fcn that does something else than the original function, but which helps you test different scenarios

//& NOTE: vi.fn() (and jest.fn()) is a spy
  //& it keeps track of calls to the function and the arguments it was called with

import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData', () => {
  //^ Note: logFn produces a side effect by logging to the console
  it('should execute logFn if provided', () => {
    const logger = vi.fn();    //* vi.fn() is like jest.fn
    generateReportData(logger);
    
    // either one will work here: .toBeCalled() or .toHaveBeenCalled()
    expect(logger).toBeCalled();
  });
});