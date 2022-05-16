// use checkAuth function to redirect if user not authenticated
import { checkAuth } from '../fetch-utils.js';
// add event listener to the logout button and call logout

checkAuth();

const logOut = document.getElementById('logout');

logOut.addEventListener('click', () => {
    location.replace('/');
});

