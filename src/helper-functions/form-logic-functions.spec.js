import { useForm, diffObjects, validateLength, useValidation, useInput, validateEmail, validatePassword } from './form-logic-functions';

describe('diffObjects', () => {
  it('returns empty object when given two equal objects', () => {
    const objA = { a: 1, b: 2 };
    const objB = { a: 1, b: 2 };
    expect(diffObjects(objA, objB)).toEqual({});
  });
  it('returns just the differences from the second object', () => {
    const objA = { a: 1, b: 2 };
    const objB = { a: 1, b: 2, c: 'hey' };
    expect(diffObjects(objA, objB)).toEqual({ c: 'hey' });
    expect(diffObjects(objB, objA)).toEqual({});
  });
});

describe('validateLength', () => {
  it('returns false for string less than min length', () => {
    const str = 'Hello';
    expect(validateLength({ min: 6 })(str)).toEqual(false);
  });
  it('returns false for string greater than max length', () => {
    const str = 'Hello again';
    expect(validateLength({ max: 6 })(str)).toEqual(false);
  });
  it('returns true for string less than max length', () => {
    const str = 'Hello';
    expect(validateLength({ max: 6 })(str)).toEqual(true);
  });
});

describe('validateEmail', () => {
  it('returns false for bad email', () => {
    const emailA = 'hello@gmail.';
    const emailB = 'hellogmail.com';
    const emailC = 'hello@gmailcom';
    expect(validateEmail(emailA)).toEqual(false);
    expect(validateEmail(emailB)).toEqual(false);
    expect(validateEmail(emailC)).toEqual(false);
  });
  it('returns true for good email', () => {
    const email = 'email@example.com';
    expect(validateEmail(email)).toEqual(true);
  });
});

describe('validatePassword', () => {
  it('returns false for password less than 8 characters', () => {
    const password = 'Pas123!';
    expect(validatePassword(password)).toEqual(false);
  });
  it('returns false for password missing lower case', () => {
    const password = 'PASSWORD123!';
    expect(validatePassword(password)).toEqual(false);
  });
  it('returns false for password missing upper case', () => {
    const password = 'password123!';
    expect(validatePassword(password)).toEqual(false);
  });
  it('returns false for password missing number', () => {
    const password = 'passwordHELLO!';
    expect(validatePassword(password)).toEqual(false);
  });
  it('returns false for password missing special character', () => {
    const password = 'passwordHELLO12';
    expect(validatePassword(password)).toEqual(false);
  });
  it('returns true for valid password', () => {
    const password = 'passwordHELLO12!';
    expect(validatePassword(password)).toEqual(true);
  });
});
