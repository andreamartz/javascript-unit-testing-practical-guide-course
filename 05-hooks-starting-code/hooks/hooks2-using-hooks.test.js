// ^ Hooks here have nothing to do with React hooks
// ^ Hooks are special fcns provided by Vitest and Jest that are executed automatically by the test runner at certain points in time.

import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';
import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

// ^ NOTE: You could instead add these hooks to a suite (i.e., inside the describe) and then they would apply only to that suite

// beforeAll is useful for setting up a testing database
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

// afterAll is useful for erasing a testing database
afterAll(() => {
  console.log('afterAll()');
});

it('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {

  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {

  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {

  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {

  user.clearEmail();

  expect(user).toHaveProperty('email');
});
