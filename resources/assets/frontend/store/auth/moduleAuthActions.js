import jwt from "./../../http/requests/auth/jwt/index.js";
import router from "./../../router.js";

export default {
    loginJwt({ commit }, payload) {
        return new Promise((resolve, reject) => {
            jwt
                .login(payload.userDetails.username, payload.userDetails.password)
                .then(response => {
                    // console.log(response);
                    if (response.data.code != 401) {
                        // console.log(response.data.data.token.token);
                        router.push(router.currentRoute.query.to || '/')

                        localStorage.setItem("accessToken", response.data.data.token.token);

                        commit("UPDATE_USER_INFO", response.data.data.pengguna, { root: true });
                        // console.log(commit("UPDATE_USER_INFO"))
                        commit("SET_BEARER", response.data.data.token.token);

                        resolve(response);
                    } else {
                        reject({ message: response.data.message });
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};