import { signUpUser, signInUser, getUser, redirectIfLoggedIn, checkAuth } from '/fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

const singInEmail = document.getElementById('sign-in-email');
const singInPassword = document.getElementById('sign-in-password');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);

    await signUpUser(data.get('email'), data.get('password'));

    redirectIfLoggedIn();
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = await signInUser(singInEmail.value, singInPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        singInEmail.value = '';
        singInPassword.value = '';
    }
});

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
