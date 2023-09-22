import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';
import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

beforeAll(() => {
  // user = new User(testEmail);
  console.log('beforeAll()');
});

beforeEach(() => {
  user = new User(testEmail);
  console.log('beforeEach()');
});

afterEach(() => {
  console.log('afterEach()');
});

afterAll(() => {
  console.log('afterAll()');
});


// ^ Concurrency - speeds up the overal execution time of your tests
// NOTE: see L57 for some additional notes about the behavior of concurrency within and across testing files as well as one caveat of using .concurrent

// NOTE: you can add .concurrent to describe, and then all the tests in that suite will be run in parallel, which is the same as adding .concurrent to every individual test in the suite.
  // For example: describe.concurrent()

// NOTE: tests with the .concurrent annotation will be run in parallel (concurrently) with all other tests that have this annotation. 
  // The default behavior w/o concurrent is to run one after the other.
it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {

  expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', () => {

  expect(user.email).toBe(testEmail);
});

it.concurrent('should clear the email', () => {

  user.clearEmail();

  expect(user.email).toBe('');
});

it.concurrent('should still have an email property after clearing the email', () => {

  user.clearEmail();

  expect(user).toHaveProperty('email');
});
