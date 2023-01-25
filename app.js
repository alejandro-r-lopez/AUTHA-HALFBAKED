import { signUpUser } from '/fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);

    await signUpUser(data.get('email'), data.get('password'));
});

// signInForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const data = new FormData(signUpForm);

//     await signupUser(data.get('email'), data.get('password'));
// });
// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
