// import auth from './../../auth/authService.js'

export default {
    isUserLoggedIn: () => {
        let isAuthenticated = false;

        if (localStorage.getItem('userInfo')) {
            isAuthenticated == true;
        } else {
            isAuthenticated == false;
        }

        return isAuthenticated;
    }
}