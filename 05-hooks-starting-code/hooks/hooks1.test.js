// * Every test sets a value for testEmail. We could instead put this declaration at the top of the file as a global constant.
  // * Some would disagree and say you shouldn't do this.

// * Every test also and creates a new user instance. We can't put that at the top of the file as a global object, though, because some of the tests manipulate it. Later tests will be using the manipulated user instance, and that is not what we want.
  // ^ Hooks can help with this!!

import { it, expect } from 'vitest';
import { User } from './hooks';

it('should update the email', () => {
  const testEmail = 'test@test.com';
  const newTestEmail = 'test2@test.com';
  const user = new User(testEmail);
  
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  const testEmail = 'test@test.com';
  const user = new User(testEmail);

  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  const testEmail = 'test@test.com';
  const user = new User(testEmail);

  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  const testEmail = 'test@test.com';
  const user = new User(testEmail);

  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  const testEmail = 'test@test.com';
  const user = new User(testEmail);

  user.clearEmail();

  expect(user).toHaveProperty('email');
});
