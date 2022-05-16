// Enter Supabase Information
const SUPABASE_URL = 'https://ekvctprnmhlihrtxfomc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdmN0cHJubWhsaWhydHhmb21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMTI1MDcsImV4cCI6MTk2Nzg4ODUwN30.3DwFaO1PRQPJQBj3OEs8ed-pA5qQ_7kbxTiw3YzzplY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
