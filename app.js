import { signUpUser, signInUser, getUser, redirectIfLoggedIn, checkAuth } from '/fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);

    await signUpUser(data.get('email'), data.get('password'));

    redirectIfLoggedIn();
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signInForm);

    const user = await signInUser(data.get('email'), data.get('password'));

    if (user) {
        redirectIfLoggedIn();
    }
});

window.addEventListener('load', () => {
    const user = getUser();

    if (user) redirectIfLoggedIn();
});
// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
