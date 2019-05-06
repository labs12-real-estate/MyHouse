export const handleSignIn = (e, signIn, creds, history) => {
  e.preventDefault();
  signIn(creds, history);
};

export const handleSignOut = (e, closeModal, signOut, history) => {
  e.preventDefault();
  closeModal(e);
  signOut(history);
};

export const scrollToTop = e => {
  e.preventDefault();
  window.scrollTo(0, 0);
};
