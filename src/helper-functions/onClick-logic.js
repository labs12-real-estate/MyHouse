export const handleSignIn = (e, signIn, creds, history) => {
  e.preventDefault();
  signIn(creds, history);
};

export const handleSignOut = (e, closeModal, signOut, history) => {
  e.preventDefault();
  closeModal(e);
  signOut(history);
};
