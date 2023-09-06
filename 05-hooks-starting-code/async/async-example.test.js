import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';


// ^ Test that we are invoking the function correctly (i.e., giving valid input) to get back a token eventually. NOTE: we are not testing the 3rd party library

// ^ TESTING ASYNC CODE WITH CALLBACKS
// * 1st try (callbacks): it passes, but for the wrong reason
it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';
  const doneFn = (err, token) => {
    // expect(token).toBeDefined();  // passes for wrong reason
    expect(token).toBe(2);           // passes, but SHOULD fail bc we always get back a long string from jwt, not a number
  }

  generateToken(testUserEmail, doneFn);
});

// ! TAKEAWAYS from 1st try:
  // ! You need to pass done fcn to the test when testing async code
  // ! You then call the done fcn when finished in the testing code
  // When testing synchronous fcns, you don't need to do this, because the code executes top to bottom.
  // ! REASON this is needed for async code: 
    // ! Jest and Vitest won't wait for any inner callback fcns to finish, and
    // ! therefore, it will not find any expect stmt in the test code
    // ! When there is no expect statement (or none is encountered by Jest/Vitest), the test passes
    // ! When we pass the done fcn, Jest/Vitest will wait until the done fcn is run, and therefore we can place the doneFn inside the callback fcn to make Jest/Vitest wait for the callback fcn to be executed (inside which is our assertion)

// * 2nd try (callbacks): 
  // SOLUTION: need to pass the done argument (a fcn) when testing asynchronous code...
  // ...then call done when finished in the testing code
it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com';

  // * doneFn is the callback fcn; when called, it receives one of the two arguments from jwt (either err or token)
  const doneFn = (err, token) => {
    // expect(token).toBeDefined();     // passes for the right reason
    expect(token).toBe(2);        // fails, bc it times out and throws an error; Vitest does not pick up the error
    done();
  }

  generateToken(testUserEmail, doneFn);
});
  // & Result:
  //⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
  // Failed Tests 1 
  // ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
  //  FAIL  async/async-example.test.js > should generate a token value
  //  Error: Test timed out in 5000ms.
  // If this is a long-running test, pass a timeout value as the last argument or configure it globally with "testTimeout".
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
  // ! TAKEAWAYS: 
  // ! The test failed, bc it timed out.
  // ! All of the 'to' fcns, like .toBe(), throw an error if they fail 
    // ! For async fcns, if the test throws an error, the test runner will pick up the error and consider the test to have failed,...
    // ! ...BUT if you have a callback in your test and you're using the done fcn, then the error thrown by the 'to' fcn will NOT be picked up by the test runner
  // ! SOLUTION: use a try/catch block


// * 3rd try (callbacks): 
  // SOLUTION: use a try/catch block
  it('should generate a token value', (done) => {
    const testUserEmail = 'test@test.com';
  
    // * doneFn is the callback fcn; when called, it receives one of the two arguments from jwt (either err or token)
    const doneFn = (err, token) => {
      // expect(token).toBeDefined();
      try {
        expect(token).toBeDefined();  // passes for the right reason
        // expect(token).toBe(2);    // fails because the try/catch block allows Vitest to pick up the error and treat the test as failed
        done();
      } catch (err) {
        done(err);
      }
    }
  
    generateToken(testUserEmail, doneFn);
  });

// ^ TESTING ASYNC CODE WITH PROMISES -- easier than callbacks
// Note that *expect* supports promises out of the box

// promise w/o async/await
it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';
  
  // * Note: need to return the expect stmt
    // * test may pass w/o return, but return guarantees that Vitest / Jest will wait for the promise to be resolved
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();  // passes
  // return expect(generateTokenPromise(testUserEmail)).resolves.toBe(2);  // fails

});

// promise with async/await
it('should generate a token value', async () => {
  const testUserEmail = 'test@test.com';

  const token = await generateTokenPromise(testUserEmail);

  // * Note: return is not necessary when using async / await since a fcn annotated with async returns a promise implicitly.
  expect(token).toBeDefined();
});