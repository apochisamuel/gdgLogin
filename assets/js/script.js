document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const signUpLink = document.getElementById('mobileSignUp');
  const signInLink = document.getElementById('mobileSignIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
  signUpLink.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });

  signInLink.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
});