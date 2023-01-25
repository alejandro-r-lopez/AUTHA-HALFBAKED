// Enter Supabase Information
const SUPABASE_URL = 'https://xdcizxdidpizfiibmgtv.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY2l6eGRpZHBpemZpaWJtZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTc4NzYsImV4cCI6MTk4OTgzMzg3Nn0.1AGjiVrmIV6AJNyKnEOyeRjAP87L4_WcL4ZIjmI2sIY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    const { data, error } = await client.auth.signUp({
        email: email,
        password: password,
    });
    return data;
}

export async function signInUser(email, password) {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
