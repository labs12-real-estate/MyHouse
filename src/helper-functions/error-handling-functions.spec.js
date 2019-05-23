import { clientsidePasswordValidation, incorrectCreds, incorrectSetPasswordCode } from './error-handling-functions';
import React from 'react';

describe('incorrectCreds', () => {
  it('returns a message saying username or password is incorrect', () => {
    expect(incorrectCreds({ message: 'User does not exist.' }, 'name')).toEqual(<span className="name">Username or password is incorrect.</span>);
  });
  it('returns null if there is not an error', () => {
    expect(incorrectCreds({}, 'name')).toEqual(null);
  });
});

describe('incorrectSetPasswordCode', () => {
  it('returns a message if code is invalid', () => {
    expect(incorrectSetPasswordCode({ message: 'Invalid verification code provided' }, 'name')).toEqual(
      <span className="name">
        Either code expired, invalid code or incorrect username. <br />
        Please try again.
      </span>
    );
  });
  it('returns a message telling user to enter the code if user leave input field empty', () => {
    expect(incorrectSetPasswordCode('Code cannot be empty', 'name')).toEqual(<span className="name">Please enter a confirmation code.</span>);
  });
  it('returns null of there is no error', () => {
    expect(incorrectSetPasswordCode({})).toEqual(null);
  });
});

describe('clientsidePasswordValidation ', () => {
  it('returns a message saying how password should be', () => {
    expect(clientsidePasswordValidation('Password must have at least 8 characters, 1 lower case, 1 upper case, and 1 symbol.', 'name')).toEqual(
      <span className="name">Password must have at least 8 characters, 1 lower case, 1 upper case, and 1 symbol.</span>
    );
  });
  it('returns null if there is not an error', () => {
    expect(clientsidePasswordValidation({}, 'name')).toEqual(null);
  });
});
