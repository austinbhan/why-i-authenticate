// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout

const logOut = document.getElementById('logout');

logOut.addEventListener('click', () => {
    location.replace('/');
});

