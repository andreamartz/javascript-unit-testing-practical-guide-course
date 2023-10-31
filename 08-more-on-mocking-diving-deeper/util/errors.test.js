import {describe, it, expect} from 'vitest';
import {HttpError, ValidationError} from './errors.js';


describe('HttpError', () => {
  // beforeAll(() => {

  // });
  
  // beforeEach(() => {
  //   let testStatusCode = '500';
  //   let testMessage = 'HttpError - Internal Server Error';
  //   let testData = 'test data';
  // });
  
  // afterEach(() => {
  //   let testStatusCode = '';
  //   let testMessage = '';
  //   let testData = '';
  //   let testHttpError = 
  // });
  
  // afterAll(() => {

  // });

  it('should contain the provided status code, message, and data', () => {
    const testStatus = 1;
    const testMessage = 'Test';
    const testData = { key: 'test' };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it('should contain undefined as data if no data is provided', () => {
    const testStatus = 1;
    const testMessage = 'Test';

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).not.toBeDefined();
  });

  // it('should have a message property', () => {
  //   let testHttpError = new HttpError(testStatus, testMessage, testData);
    

  // });
});

describe('ValidationError', () => {
  it('should contain the provided message', () => {
    const testMessage = 'test';

    const testError = new ValidationError(testMessage);

    expect(testError.message).toBe(testMessage);
  });
});