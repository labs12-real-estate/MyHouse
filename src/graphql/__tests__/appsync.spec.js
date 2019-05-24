import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsConfig from 'aws-exports';
import { getUser } from 'graphql/queries';

Amplify.configure(awsConfig);

describe('Auth.signIn', () => {
  it('authenticates a valid user', () => {
    const username = 'admin2921111';
    const password = 'Password123!';
    const user = {
      username,
      password
    };
    expect.assertions(1);
    return Auth.signIn(user).then(data => expect(data.signInUserSession).not.toBeNull());
  });
  it('throws an error for invalid user', () => {
    const username = 'BADUSER123';
    const password = 'Password123!';
    const user = {
      username,
      password
    };
    expect.assertions(1);
    return Auth.signIn(user).catch(data => expect(data.message).toBe('User does not exist.'));
  });
  Auth.signOut();
});

describe('Auth.signUp', () => {
  it('throws an error for bad password', () => {
    const username = 'BADUSER';
    const password = 'password';
    const user = {
      username,
      password
    };
    expect.assertions(1);
    return Auth.signUp(user).catch(data => expect(data.message).toEqual(expect.stringContaining('Password did not conform with policy')));
  });
});

describe('getUser', () => {
  it('successfully gets a user information when a valid user is signed in', async () => {
    const username = 'admin2921111';
    const password = 'Password123!';
    const user = {
      username,
      password
    };
    await Auth.signIn(user);
    expect.assertions(1);
    return API.graphql(graphqlOperation(getUser, { id: username })).then(({ data }) => {
      expect(data.getUser.houses.items).toBeInstanceOf(Array);
      Auth.signOut();
    });
  });
});
