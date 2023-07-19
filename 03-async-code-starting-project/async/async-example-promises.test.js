import { expect, describe, it } from 'vitest';
import { generateTokenPromise } from './async-example';

// we want to test that we are invoking the generateToken fcn correctly;
  // we do NOT want to test the jwt module

describe('generateTokenPromise', () => {
  // VALID APPROACH #1
  it('should generate a token value (with promises-1)', () => {
    const testUserEmail = 'test@test.com';

    // NOTE: expect supports promises out of the box
    // NOTE (L52): use return before the promise assertion to guarantee that Vitest / Jest will wait for the promise to be resolved.

    // PASSES
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();

    // FAILS
    // return expect(generateT÷okenPromise(testUserEmail)).resolves.toBe(2);
  });

  // VALID APPROACH #2
  it('should generate a token value (with promises-2 with async await)', async() => {
    const testUserEmail = 'test@test.com';

    // NOTE: expect supports promises out of the box
    // NOTE (L52): You don't need a return before the expect when using async / await bc fcns annotated with async return a promise implicitly

    const token = await generateTokenPromise(testUserEmail);
    
    // PASSES
    expect(token).toBeDefined();

    // FAILS
    // expect(token).toBe(2);
  });
});