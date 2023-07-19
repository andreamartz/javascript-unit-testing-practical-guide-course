import { expect, describe, it } from 'vitest';
import { generateToken } from './async-example';

// we want to test that we are invoking the generateToken fcn correctly;
  // we do NOT want to test the jwt module

describe('generateToken', () => {
  // IMPORTANT: Jest and Vitest will NOT wait for any inner callback functions to finish. Therefore, when the expect is INSIDE the callback function, the expect will never be executed.
    // IMPLICATION: the test will pass, because there was no assertion at all.
    // SOLUTION: pass the done fcn parameter and call done when you know you will be done with all testing-related work. Jest and Vitest will WAIT until the done fcn is called. So, it will recognize that the callback function was executed.

  it('should generate a token value-1', () => {

    const testUserEmail = 'test@test.com';
  
    // NOTE: the expect is inside the callback function

    // PASSES, but expect is never executed
    generateToken(testUserEmail, (err, token) => {
      expect(token).toBeDefined();
    });
  });

  it('should generate a token value-2', () => {
    const testUserEmail = 'test@test.com';

    // PASSES with false assertion, bc expect is never executed
    generateToken(testUserEmail, (err, token) => {
      expect(token).toBe(2);  // assertion is false, but test passes, because this expect is never executed
    });
  });

  
  it('should generate a token value-3', (done) => {
    const testUserEmail = 'test@test.com';

    // PASSES bc now we've passed done and vitest waits for done to execute
    generateToken(testUserEmail, (err, token) => {
      expect(token).toBeDefined();  
      done();
    });
  });

  // it('should generate a token value-4', (done) => {
    // const testUserEmail = 'test@test.com';

    // TIMES OUT
      // fcns like .toBe throw an error if they fail
      // when testing synchronous code, vitest and Jest will pick up the error and consider the test to have failed
      // when you have a callback fcn and you're using the done fcn, then the error thrown by .toBe or the other .to___ fcns will NOT be picked up by the test runner
      // SOLUTION: add a try / catch block inside the test code
    // generateToken(testUserEmail, (err, token) => {
      // expect(token).toBe(2);  
      // done();
    // });
  // });

  it('should generate a token value-5', (done) => {
    const testUserEmail = 'test@test.com';

    // FAILS bc vitest picks up the error with the try catch
    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBe(2);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('should generate a token value-6', (done) => {
    const testUserEmail = 'test@test.com';

    // PASSES but would have failed if assertion were false
    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();  // do not pass arguments to done in the success case
      } catch (err) {
        done(err);  // pass the error to done in the failure case
      }
    });
  });
});

