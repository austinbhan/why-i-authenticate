// use checkAuth function to redirect if user not authenticated
import { checkAuth, logOut } from '../fetch-utils.js';
// add event listener to the logout button and call logout

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logOut();
});



