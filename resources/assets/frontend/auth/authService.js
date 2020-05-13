import EventEmitter from 'events'
import authConfig from './../../../../auth_config.json'


class AuthService extends EventEmitter {

    isAuthenticated() {
        if (localStorage.getItem('userInfo')) {
            return true;
        } else {
            return false;
        }
    }
}

export default new AuthService();